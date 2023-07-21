/**
 * 중첩된 라우트
 *
 * - 공통적으로 쓰이는 Layout 컴포넌트 사용시 유용하다.
 *
 *      Ex)
 *               <Route path="/articles" element={<Articles />}>
 *                     <Route path=":id" element={<Article />} />
 *               </Route>
 *
 *
 * - 리액트 라우터에서 제공하는 Outlet이라는 컴포넌트를 사용하여 Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할을 한다.
 *
 * - Route 컴포넌트에는 index 라는 props가 있다. 이 props는 path="/" 와 동일한 의미를 가진다. => index props를 사용하면 상위 라우트의 경로와 일치하지만
 *   그 이후에 경로가 주어지지 않았을 때 보여지는 라우트를 설정할 수 있다. path="/"와 동일한 역할을 하며 조금 더 명시적으로 표현하는 방법이다.
 */
