import React, { useEffect } from 'react'
import Sample from '../../components/thunk/Sample'
import { connect } from 'react-redux'
import { getPost, getUsers } from '../../modules/thunk/sampleRefactoring'
import loading from '../../modules/loading'

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
    ({ sampleRefactoring }) => ({
        post: sampleRefactoring.post,
        users: sampleRefactoring.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_POST'],
    }),
    {
        getPost,
        getUsers,
    },
)(SampleContainer)
