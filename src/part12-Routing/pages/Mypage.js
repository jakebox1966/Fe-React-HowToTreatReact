import React from 'react'
import { Navigate } from 'react-router-dom'

const Mypage = () => {
    const isLoggedIn = false

    if (!isLoggedIn) {
        // 여기서 replace props는 useNavigate의 기능과 동일하다 => History에 안남김
        return <Navigate to={'/login'} replace={true} />
    }

    return <div>마이페이지</div>
}

export default Mypage
