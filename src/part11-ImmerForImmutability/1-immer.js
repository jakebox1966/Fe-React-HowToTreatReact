/**
 * 복잡한 데이터 구조상에서 불변성을 지키면서 값을 업데이트하기에는 가독성도 좋지 않고 코드가 길어질 수 있다. Immer 라이브러리를 사용하여
 * 간결한 코드로 불변성을 지키며 업데이트 가능하다.
 *
 * Immer 사용법
 *
 * Ex)
 *      import produce from 'immer'
 *
 *      const nextState = produce(originalState, draft => {
 *
 *      //바꾸고 싶은 값 바꾸기
 *      draft.somewhere.deep.inside = 5
 * })
 *
 * - produce라는 함수는 두 가지 파라미터를 받는다. 첫 번째는 수정하고 싶은 상태, 두 번째는 상태를 어떻게 업데이트할지 정의하는 함수
 * - 두 번째 파라미터인 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신 해준다.
 * - 라이브러리 핵심 => 불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해준다.
 * - 복잡한 구조의 객체 말고도 배열 처리에도 유용하다.
 * - immer를 쓴다고 모든 곳에 immer를 적용할 필요가 없다. => 코드만 깔끔하면 됨.
 * - immer에서 제공하는 produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환한다 => useState와 같이 사용하여 코드 간결하게 할 수 있음.
 *
 * Ex)
 *
 *      import produce from 'immer'
 *
 *      const originalState = [
 *      {
 *          id: 1,
 *          todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
 *          checked: true,
 *      },
 *      {
 *          id: 2,
 *          todo: 'immer로 불변성 유지하기',
 *          checked: false
 *      }
 *      ]
 *
 *      const nextState = produce(originalState, draft => {
 *        // id가 2인 항목의 checked 값을 true로 설정
 *        const todo = draft.find(t => t.id === 2) // id로 항목 찾기
 *        todo.checked = true;
 *        // 혹은 draft[1].checked = true
 *
 *        //배열에 새로운 데이터 추가
 *        draft.push({
 *            id:3,
 *            todo: '일정 관리 앱에 immer 적용하기',
 *            checked: false,
 *        })
 *
 *        // id = 1인 항목을 제거하기
 *        draft.splice(draft.findIndex(t => t.id === 1), 1)
 *      })
 *
 * Ex)
 *      * immer update 함수 반환 예시
 *
 *      const update = produce(draft => {
 *        draft.value = 2;
 *      })
 *
 *      const originalState = {
 *          value : 1,
 *          foo: 'bar',
 *      }
 *
 *      const nextState = update(originalState);
 *      console.log(nextState) // { value: 2, foo: 'bar' }
 *
 *
 *
 */
