/**
 * 1. 미들웨어란?
 *
 * - 리덕스 미들웨어는 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행합니다. 미들웨어는 액션과 리듀서 사이의 중간자라고 볼 수 있다.
 *   => 미들웨어는 액션과 리듀서 사이의 중간자
 *   - 전달받은 액션을 단순히 콘솔에 기록
 *   - 전달받은 액션 정보를 기반으로 액션을 취소
 *   - 다른 종류의 액션을 추가로 디스패치
 *
 * 2. 미들웨어 만들기
 * => lib/loggerMiddleware
 *
 * 3. 비동기 작업을 처리하는 미들웨어 사용
 * - 오픈 소스 커뮤니티에 공개된 미들웨어를 사용하여 리덕스를 사용하고 있는 프로젝트에서 비동기 작업을 더욱 효율적으로 관리할 수 있다.
 *
 * - redux-thunk : 비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어이다. 객체가 아닌 함수형태의 액션을 디스패치할 수 있게 해준다.
 * - redux-saga: redux-thunk 다음으로 가장 많이 사용되는 비동기 작업 관련 미들웨어이다. 특정 액션이 디스패치되었을 때 정해진 로직에 따라
 *               다른 액션을 디스패치시키는 규칙을 작성하여 비동기 작업을 처리할 수 있게 해준다.
 *
 *
 *
 *
 */

import CounterContainer from './containers/CounterContainer'

const Middleware = () => {
    return (
        <div>
            <CounterContainer />
            {/*<SampleContainer />*/}
        </div>
    )
}

export default Middleware
