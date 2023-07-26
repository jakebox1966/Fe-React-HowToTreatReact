import React, { useEffect } from 'react'
import Sample from '../components/Sample'
import { connect } from 'react-redux'
import { getPost, getUsers } from '../modules/thunk/sampleRefactoring'
import loading from '../modules/loading'

const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
    useEffect(() => {
        getPost(1)
        getUsers(1)
    }, [getPost, getUsers])

    return (
        <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />
    )
}

export default connect(
    ({ sampleWithSaga }) => ({
        post: sampleWithSaga.post,
        users: sampleWithSaga.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_POST'],
    }),
    {
        getPost,
        getUsers,
    },
)(SampleContainer)
