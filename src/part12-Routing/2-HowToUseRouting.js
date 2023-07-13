/**
 * 1.How to Use React-Router
 *
 * - 프로젝트에 리액트 라우터를 적용할 때는 index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다.
 *   => HTML5의 History API를 사용하여 페이지를 새로 불러오지 않고도 주소 변경 및 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있게 해준다.
 *
 * - 사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주려면 Route라는 컴포넌트를 통해 라우트 설정을 해주어야한다.
 *   Route 컴포넌트는 Routes 컴포넌트 내부에서 사용되어야한다.
 *
 *      Ex)
 *          <Route path="주소규칙" element={보여줄 컴포넌트 JSX} />
 *
 * 2. Link Component 사용하여 다른페이지로 이동
 * - 리액트 라우터를 사용하는 프로젝트에서는 a태그를 바로 사용하면 안된다. => a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오기 때문
 * - Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어있다
 *
 *      Ex)
 *          <Link to="경로">링크 이름</Link>
 *
 */
import React from 'react'

const HowToUseRouting = () => {
    return <div></div>
}

export default HowToUseRouting
