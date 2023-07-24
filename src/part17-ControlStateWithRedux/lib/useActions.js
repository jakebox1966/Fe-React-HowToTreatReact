/**
 * - useActions Hook을 사용하면 여러 개의 액션을 사용해야 하는 경우 코드를 훨씬 깔끔하게
 *   정리하여 작성할 수 있다.
 * - useActions Hook 은 액션 생성 함수를 액션을 디스패치하는 함수로 변환해 준다.
 *  => 액션 생성 함수를 사용하여 액션 객체를 만들고, 이를 스토어에 디스패치하는 작업을
 *     해 주는 함수를 자동으로 만들어 준다.
 *
 * - useActions는 두 가지 파라미터가 필요하다. 첫 번째 파라미터는 액션 생성 함수로
 *   이루어진 배열이다. 두 번째 파라미터는 deps 배열이며, 이 배열 안에 들어 있는 원소가
 *   바뀌면 액션을 디스패치하는 함수를 새로 만들게 된다.
 *
 */

import { useMemo } from 'react'

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const UseActions = (actions, deps) => {
    const dispatch = useDispatch()

    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map((a) => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        deps ? [dispatch, ...deps] : deps,
    )
}

export default UseActions
