/**
 * URL 파라미터와 QueryString
 *
 * - URL 파라미터 : 주소의 경로에 유동적인 값을 넣는 형태 => ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용
 * - QueryString : 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의 (& 로 구분) => 키워드 검색, 페이지네이션, 정렬 방식등 데이터 조회에 필요한 욥션을 전달할 때 사용
 *
 *
 * 1. URL 파라미터
 * - URL 파라미터는 useParams라는 Hook을 사용하여 객체 형태로 조회한다.
 * - URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통해 설정한다.
 * - URL 파라미터는 /profiles/:username 과 같이 경로에 :를 사용하여 설정한다. URL 파라미터가 여러 개인 경우에는 /profiles/:username/:field와 같은 형태로 설정한다.
 */

import React from 'react'
import { useParams } from 'react-router-dom'

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    },
}

const UrlParameter = () => {
    const params = useParams()
    const profile = data[params.username]

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    )
}

export default UrlParameter
