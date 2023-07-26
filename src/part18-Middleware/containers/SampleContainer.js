import React, { useEffect } from 'react'
import Sample from '../components/Sample'
import { connect } from 'react-redux'
import { getPost, getUsers } from '../modules/thunk/sampleWithThunkRefactoring'
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
    ({ sampleWithSagaRefactoring }) => ({
        post: sampleWithSagaRefactoring.post,
        users: sampleWithSagaRefactoring.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_POST'],
    }),
    {
        getPost,
        getUsers,
    },
)(SampleContainer)
