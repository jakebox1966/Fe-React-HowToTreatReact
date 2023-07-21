/**
 * 보통 Context API 관리는 contexts 라는 디렉토리에 두고 설정
 */

import { createContext } from 'react'

const ColorContext = createContext({ color: 'black' })

export default ColorContext
