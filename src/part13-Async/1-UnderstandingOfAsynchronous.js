/**
 *
 * 비동기 작업의 이해
 * - 웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있다. 예를 들어 Ajax 기법을 사용하여 서버의 API를 사용해야 할 때는 네트워크 송수신
 *   과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리한다. => 비동기적으로 처리
 *   만약 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없다. 하지만 이를 비동기적으로 처리한다면
 *   웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있다.
 *
 *   Ex)
 *          function printMe() {
 *              console.log("Hello world!")
 *          }
 *
 *          setTimeout(printMe, 3000);
 *          console.log('대기 중...')
 *
 *          RESULT => 대기중 ... Hello World!
 *
 * - 비동기 작업을 할 때 흔히 사용하는 방법은 콜백 함수를 사용하는 것이다. => 위의 예시에 setTimeout 함수에 printMe 라는 함수를 인자로 전달해주었다.
 *
 * 1. 콜백 함수 : 콜백 함수 안에 콜백 함수를 넣어서 구현하기도 하지만 여러번 중첩되면 가독성이 나빠진다. => 콜백 지옥
 *
 * 2. Promise : Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능이다. => 콜백 지옥 형성 X
 *
 *      Ex)
 *         function increase(number) {
 *                  const promise = new Promise((resolve, reject) => {
 *                      // resolve는 성공, reject는 실패
 *                      setTimeout(()=> {
 *
 *                      const result = number + 10
 *
 *                      if(result > 50) { // 50보다 높으면 에러 발생시키기
 *                      const e = new Error('NumberTooBig')
 *                          return reject(e)
 *                      }
 *                          resolve(result) // number 값에 +10후 성공 처리
 *
 *                      },1000)
 *                  })
 *                  return promise
 *              }
 *
 *          increase(0)
 *              .then(number => {
 *                // promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
 *                console.log(number)
 *                return increase(number) // promise를 리턴하면
 *              })
 *              .then(number => {
 *                  // 또 .then으로 처리 가능
 *                  console.log(number)
 *                  return increase(number)
 *              })
 *              .catch(e => {
 *                  // 도중에 에러가 발생한다면 .catch를 통해 확인할 수 있음
 *              })
 *
 * 3. async/await : async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES2017(es8) 문법이다. 함수의 앞부분에 async 키워드를 추가하고,
 *                  해당 함수 내부에서 Promise의 앞부분에 await 키워드를 사용한다. => Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있다.
 *
 *      Ex)
 *              function increase(number) {
 *                  const promise = new Promise((resolve, reject) => {
 *                      // resolve는 성공, reject는 실패
 *                      setTimeout(()=> {
 *
 *                      const result = number + 10
 *
 *                      if(result > 50) { // 50보다 높으면 에러 발생시키기
 *                      const e = new Error('NumberTooBig')
 *                          return reject(e)
 *                      }
 *                          resolve(result) // number 값에 +10후 성공 처리
 *
 *                      },1000)
 *                  })
 *                  return promise
 *              }
 *
 *
 *              async function runTasks() {
 *                  try { // try/catch 구문을 사용하여 에러를 처리한다.
 *                      let result = await increase(0)
 *                      console.log(result)
 *                      result = await increase(result)
 *                      console.log(result)
 *                      result = await increase(result)
 *                      ...
 *                  }
 *              }
 *
 *
 *
 *
 */
