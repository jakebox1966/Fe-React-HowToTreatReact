/**
 * 대부분의 경우에는 redux-thunk 로도 충분히 기능을 수현할 수 있지만 다음과 같은 상황에서는 redux-saga를 사용하는 것이 유리하다.
 *
 * - 기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
 * - 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할 때
 * - 웹소켓을 사용할 때
 * - API 요청 실패 시 재요청해야 할 때
 *
 * redux-saga에서는 ES6의 제너레이터 함수라는 문법을 사용한다.
 * - 이 문법의 핵심 기능은 함수를 작성할 때 함수를 특정 구간에 멈춰 놓을수도 있고, 원할 때 다시 돌아가게 할 수도 있다.
 *
 *      Ex)
 *          function* generatorFunction() {
 *              console.log('안녕하세요');
 *              yield 1;
 *              console.log('제너레이터 함수');
 *              yield 2;
 *              console.log('function*');
 *              yield 3;
 *              return 4;
 *          };
 *
 *              const generator = generatorFunction();
 *
 *              generator.next();
 *              // 안녕하세요
 *              // value: 1, done: false
 *              generator.next();
 *              // 제너레이터 함수
 *              // value: 2, done: false
 *              generator.next();
 *              // function*
 *              // value: 3, done: false
 *              generator.next();
 *              // value: 4, done: true
 *              generator.next();
 *              // value: undefined, done: true
 *
 * - 제너레이터 함수를 만들 때는 function* 키워드를 사용한다.
 * - 제너레이터 함수를 호출했을 때 반환되는 객체를 제너레이터라고 부른다.
 * - 제너레이터가 처음 만들어지면 함수의 흐름은 멈춰 있는 상태이다. next()가 호출되면 다음 yield가 있는 곳까지 호출하고 다시 함수가 멈춘다.
 *   제너레이터 함수를 사용하면 함수를 도중에 멈출 수도 있고, 순차적으로 여러 값을 반환시킬수도 있다. next 함수에 파라미터를 넣으면 제너레이터 함수에서
 *   yield를 사용하여 해당 값을 조회할 수도 있다.
 *
 * - redux-saga는 제너레이터 함수 문법을 기반으로 비동기 작업을 관리해 준다. => 디스패치하는 액션을 모니터링해서 그에 따라 필요한 작업을 따로 수행할 수 있는 미들웨어이다.
 *
 *      Ex)
 *          function* watchGenerator() {
 *          console.log('모니터링 중...');
 *          let prevAction = null;
 *
 *          while(true) {
 *              const action = yield;
 *              console.log('이전 액션: ', prevAction);
 *              prevAction = action;
 *
 *              if(action.type === 'HELLO') {
 *                  console.log('안녕하세요');
 *                  }
 *              }
 *          }
 *
 *          const watch = watchGenerator();
 *          watch.next();
 *          // 모니터링 중..
 *          // {value: undefined, done: false}
 *          watch.next({type: 'TEST'});
 *          // 이전 액션 : null
 *          // {value: undefined, done: false}
 *          watch.next({type: 'HELLO'});
 *          // 이전 액션 : {type: 'TEST'}
 *          // 안녕하세요
 *          // {value: undefined, done: false}
 *
 *
 * redux-saga가 제공하는 다른 기능
 *
 * - 사가 내부에서 현재 상태를 조회 : select
 * - 사가가 실행되는 주기 제한 : throttle
 *
 */
import { createAction, handleActions } from 'redux-actions'
import { delay, put, select, takeLatest, throttle } from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣는다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined)
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined)

function* increaseSaga() {
    yield delay(1000) // 1초 기다린다.
    yield put(increase()) // 특정 액션을 디스패치한다.
    const number = yield select((state) => state.counter) // state는 스토어 상태를 의미
    console.log(`현재 값은 ${number}입니다.`)
}

function* decreaseSaga() {
    yield delay(1000) // 1초 기다린다.
    yield put(decrease()) // 특정 액션을 디스패치한다.
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
    // yield takeEvery(INCREASE_ASYNC, increaseSaga)
    // 첫 번째 파라미터: n초 * 1000
    yield throttle(3000, INCREASE_ASYNC, increaseSaga)
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
    // 가장 마지막으로 실행된 작업만 수행한다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initialState = 0 // 상태는 꼭 객체일 필요가 없다. 숫자 가능

const counter = handleActions(
    {
        [INCREASE]: (state) => state + 1,
        [DECREASE]: (state) => state - 1,
    },
    initialState,
)

export default counter
