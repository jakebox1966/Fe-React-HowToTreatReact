import React, { useCallback, useEffect, useRef, useState } from 'react'
import { produce } from 'immer'

const Immer = () => {
    const nextId = useRef(1)
    const [form, setForm] = useState({ name: '', username: '' })
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    })

    //input 수정을 위한 함수
    //immer 사용하여 코드 수정
    //immer update 함수 적용
    const onChange = useCallback((e) => {
        const { name, value } = e.target
        // setForm({
        //     ...form,
        //     [name]: [value],
        // })

        // setForm(
        //     produce(form, (draft) => {
        //         draft[name] = value
        //     }),
        // )
        setForm(
            produce((draft) => {
                draft[name] = value
            }),
        )
    }, [])

    //form 등록을 위한 함수
    //immer 사용하여 코드 수정
    //immer update 함수 적용
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            }

            //array에 새 항목 등록
            // setData({
            //     ...data,
            //     array: data.array.concat(info),
            // })

            // setData(
            //     produce(data, (draft) => {
            //         draft.array.push(info)
            //     }),
            // )
            setData(
                produce((draft) => {
                    draft.array.push(info)
                }),
            )

            //form 초기화
            setForm({
                name: '',
                username: '',
            })
            nextId.current += 1
        },
        [form.name, form.username],
    )

    useEffect(() => {
        console.log(data)
    }, [data])

    //항목을 삭제하는 함수
    //immer 사용하여 코드 수정
    //immer update 함수 적용
    const onRemove = useCallback((id) => {
        // setData({
        //     ...data,
        //     array: data.array.filter((info) => info.id !== id),
        // })

        // const nextState = {
        //     ...data,
        //     array: data.array.filter((info) => info.id !== id),
        // }
        // setData(nextState)

        /**
         * 중괄호 ({}) 안의 object는 라벨처럼 취급되어 구문이 분석되기 때문에 이것을 해결하기 위해서는
         * 객체 리터럴을 괄호로 감싸야 한다.
         */

        setData((data) => ({
            ...data,
            array: data.array.filter((info) => info.id !== id),
        }))

        // setData(data => {
        //     ...data,
        //         array: data.array.filter(info => info.id !== id)
        // })
        // setData(
        //     produce((draft) => {
        //         draft.array.splice(
        //             draft.array.findIndex((info) => info.id === id),
        //             1,
        //         )
        //     }),
        // )
    }, [])

    const update = produce((draft) => {
        draft.value = 2
    })

    useEffect(() => {
        console.log(update)
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Immer
