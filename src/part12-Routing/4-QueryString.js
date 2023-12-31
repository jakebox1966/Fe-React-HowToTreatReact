/**
 * Query String
 *
 * - 쿼리스트링을 사용할 때는 URL 파라미터와 달리 Route 컴포넌트를 사용할 때 별도로 설정해야하는 것이 없다.
 *
 * - useLocation 이라는 Hook을 사용한다.
 *
 * - useLocation Hook은 location 객체를 반환하는데 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 지니고 있다.
 *      1) pathname : 현재 주소의 경로(쿼리스트링 제외)
 *      2) search : 맨 앞의 ? 문자를 포함한 쿼리스트링 값
 *      3) hash : 주소의 # 문자열 뒤의 값 (주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해쉬 라우터에서 사용)
 *      4) state : 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
 *      5) key : location 객체의 고유값, 초기에는 default 이며 페이지가 변경될 때마다 고유의 값이 생성된다.
 *
 * - useLocation 사용 시 쿼리스트링을 파싱하는 작업을 해야하는데 리액트 라우터에서는 v6부터 useSearchParams라는 Hook을 통해서 쿼리스트링을
 *   더 쉽게 다룰 수 있게 해준다.
 *
 * - useSearchParams는 배열 타입의 값을 반환하며, 첫 번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환한다.
 *   get 메소드를 통해 특정 쿼리파라미터를 조회하고, set메소드를 통해 특정 쿼리파라미터를 업데이트 한다. 만약 조회 시 쿼리파라미터가 존재하지 않는다면 null로 조회된다.
 *   두 번째 원소는 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환한다.
 *
 * - 쿼리파라미터를 사용할 때 주의할 점 : 값은 무조건 문자열 타입이다. 즉 true, false 값을 넣는다면 값을 비교할 때 꼭 'true'와 같이 따옴표로 감싸서 비교를 해야 하고,
 *                                  숫자를 다룬다면 parseInt를 사용하여 숫자 타입으로 변환해야한다.
 */
