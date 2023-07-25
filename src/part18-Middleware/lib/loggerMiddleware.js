/**
 * const loggerMiddleware = store => next => action => {
 *     //미들웨어 기본구조
 * }
 *
 * => 아래와 같음 (function 키워드로 풀어서 쓴 미들웨어 구조)
 *
 * const loggerMiddleware = function loggerMiddleware(store) {
 *     return function(next) {
 *         return function(action)
 *     }
 *     // 미들웨어 기본 구조
 * }
 *
 * - 미들웨어는 결국 함수를 반환하는 함수를 반환하는 함수이다.
 * - 파라미터로 받아오는 store => 리덕스 스토어 인스턴스
 * - 파라미터로 받아오는 action => 디스패치된 액션
 * - 파라미터로 받아오는 next => store.dispatch와 비슷한 역할을 하지만, 차이점은 next(action)을 호출하면 그다음 처리해야 할 미들웨어에게
 *                           액션을 넘겨주고, 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다. store.dispatch를 사용하면 첫 번째 미들웨어 부터 다시 처리한다.
 *                           만약 미들웨어에서 next를 사용하지 않으면 액션이 리듀서에 전달되지 않는다(액션 무시)
 *
 * - 미들웨어는 스토어를 생성하는 과정에서 적용한다.
 */

const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action && action.type) // 액션 타입으로 log를 그룹화함
    console.log('이전 상태', store.getState())
    console.log('액션', action)
    next(action) // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()) // 업데이트된 상태
    console.groupEnd() // 그룹 끝
}

export default loggerMiddleware
