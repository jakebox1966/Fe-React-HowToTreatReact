/**
 * 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 custom하게 Hook으로 작성하여 로직을 재사용할 수 있다.
 *
 * 다른 개발자가 만든 Hooks 리스트 링크
 * - https://nikgraf.github.io/react-hooks/
 * - https://github.com/rehooks/awesome-react-hooks
 */

import React from 'react'
import useInputs from './7-CustomHooksEx'

const CustomHooks = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    })
    const { name, nickname } = state
    return (
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={onChange} />
                <input type="text" name="nickname" value={nickname} onChange={onChange} />
            </div>

            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default CustomHooks
