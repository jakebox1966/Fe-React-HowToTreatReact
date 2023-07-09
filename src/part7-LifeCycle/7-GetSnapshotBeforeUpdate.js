/**
 *
 * getSnapshotBeforeUpdate() 함수
 *
 * - 리액트 v16.3이후 만들어진 메소드이다. render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다. 이 메소드에서 반환하는 값은
 *   componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있는데 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.(Ex: 스크롤바 위치 유지)
 *
 *   getSnapshotBeforeUpdate(prevProps, prevState) {
 *       if(prevState.array !== this.state.array) {
 *           const {scrollTop, scrollHeight} = this.list
 *           return {scrollTop, scrollHeight}
 *       }
 *   }
 */