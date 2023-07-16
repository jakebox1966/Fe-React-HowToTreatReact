/**
 * API 호출과 같이 Promise를 사용해야 하는 경우에 더욱 간결하게 코드를 작성할 수 있도록 해 주는 커스텀 Hook => 예제
 * - 보통은 src 디렉토리에 lib 디렉터리를 만든 후 그안에 CustomHook 작성하여 사용한다고 한다. (Util 느낌)
 *
 * - 요청 상태를 관리할 때 무조건 커스텀 Hook을 만들어서 사용해야 하는 것은 아니지만, 상황에 따라 적절히 사용하면 좋은 코드를 만들 수 있다.
 *
 */
import { useEffect, useState } from 'react'

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리

    const [loading, setLoading] = useState(false)
    const [resolved, setResolved] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const process = async () => {
            setLoading(true)
            try {
                const resolved = await promiseCreator()
                setResolved(resolved)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        process()
    }, [deps])

    return [loading, resolved, error]
}
