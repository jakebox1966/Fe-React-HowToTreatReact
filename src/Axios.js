import React, { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [data, setData] = useState(null)

    // promise 적용
    // const onClick = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    //         console.log(response.data)
    //         console.log(typeof response.data)
    //         setData(response.data)
    //     })
    // }

    // async/await 적용
    // const onClick = async () => {
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //         setData(response.data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // ApiKey Test
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fd3c663915584bb9a394cd406d50780e',
            )
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>

                {data && (
                    <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />
                )}
            </div>
        </div>
    )
}

export default Axios
