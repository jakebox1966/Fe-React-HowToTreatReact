/**
 * 데이터를 불러와서 렌더링해 줄 때는 유효성 검사를 해주는 것이 중요하다. 만약 데이터가 없는 상태라면 post.title을 조회하려고 할 때
 * 자바스크립트 오류가 발생하니 반드시 유효성 검사를 해주어야 한다.
 *
 */

import React from 'react'

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Sample
