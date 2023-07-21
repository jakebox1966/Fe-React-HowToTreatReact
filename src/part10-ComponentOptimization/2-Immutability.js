/**
 * 불변성
 *
 * - 기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 '불변성을 지킨다' 고 한다. 불변성이 지켜지지 않으면 객체 내부의 값이
 *   새로워져도 값이 바뀐 것을 감지하지 못한다. => React.memo에서 서로 비교하여 최적화 불가능
 *
 * - 전개 연산자(...문법)을 사용하여 객체나 배열 내부의 값을 복사할 때는 얕은 복사(shallow copy)를 하게 된다. 즉, 내부의 값이 완전히
 *   새로 복사되는 것이 아니라 가장 바깥쪽에 있는 값만 복사된다. 따라서 내부의 값이 객체 혹은 배열이라면 내부의 값 또한 따로 복사해야 한다.
 *   Ex1 )
 *          const todos = [{id : 1, checked : true}, {id : 2, checked : true}]
 *          const nextTodos = [...todos]
 *
 *          nextTodos[0].checked = false
 *          console.log(todos[0] === nextTodos[0]) => 똑같은 객체를 가리키고 있기 때문에 true
 *
 *          nextTodos[0] = {
 *              ...nextTodos[0],
 *              checked: false
 *          }
 *          console.log(todos[0] === nextTodos[0]) => 새로운 객체를 할당해 주었기에 false
 *
 *   Ex2 ) => 객체 안에 있는 객체라면 불변성을 지키면서 새 값을 할당해야 하므로 다음과 같이 해 주어야 한다.
 *          const nextComplexObject = {
 *              ...complexObject,
 *              objectInside: {
 *                  ...complexObject.objectInside,
 *                  enabled: false
 *              }
 *          }
 *
 *          console.log(complexObject === nectComplexObject) => false
 *          console.log(complexObject.objectInside === nextComplexObject.objectInside) => false
 *
 * - 불변성을 지키기 위해 immer 라는 라이브러리 사용 가능
 *
 */
