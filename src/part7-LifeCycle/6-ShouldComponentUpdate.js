/**
 *
 * shouldComponentUpdate() 함수
 *
 * - props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메소드이다. 반드시 true 또는 false 값을 반환해야하며 메소드를 생성하지 않으면
 *  기본적으로 true 값을 반환한다. 메소드가 false를 반환한다면 업데이트 과정은 중지된다.
 *  메소드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근 가능하다.
 *  성능 최적화할 때(불필요한 리렌더링 방지) 사용한다.
 */