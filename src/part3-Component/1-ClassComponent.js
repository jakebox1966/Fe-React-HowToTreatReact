/**
 * ES6 이전에는 자바스크립트에 클래스(class)가 없었다. 개념 자체는 잇었지만, 구현하려면 class 대신 prototype이라는 문법을 사용해야 했다.
 *
 * 1. 클래스 컴포넌트 특징
 * - render함수가 꼭 있어야하고 JSX 를 반환해야 한다.
 *
 * 2. 함수 컴포넌트 특징
 * - 클래스형 컴포넌트보다 비교적 선언하기 편함
 * - 메모리자원 클래스형 컴포넌트보다 덜 사용
 * - 배포 파일 결과물의 크기가 클래스형 컴포넌트보다 작음
 * - state와 라이프 사이클 API 사용이 불가하지만 리액트 v16.8 업데이트 이후 Hook으로 해결
 */
import './ClassComponent.css'
import { Component } from 'react'

class ClassComponent extends Component {
    render() {
        const name = 'react'
        return <div className="react">{name}</div>
    }
}

export default ClassComponent
