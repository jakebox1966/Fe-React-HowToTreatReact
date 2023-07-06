/**
 *
 * getDerivedStateFromProps() 함수
 *
 * - 리액트 v16.3 이후에 새로 만들어진 라이프사이클 메소드이다. props로 받아 온 값을 state와 동기화시키는 용도로 사용하며 컴포넌트가
 *   마운트될 때와 업데이트될 때 호출된다.
 *
 *   Ex) static getDerivedStateFromProps(nextProps, prevState) {
 *       if(nextProps.value !== prevState.value) { //조건에 따라 특정 값 동기화
 *           return {value: nextProps.value}
 *       }
 *       return null // state를 변경할 필요가 없다면 null 반환
 *   }
 *
 */
