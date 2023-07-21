import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const activeStyle = {
    color: 'green',
    fontSize: 21,
}

const Articles = () => {
    const ArticleItem = ({ id }) => {
        return (
            <li>
                <NavLink
                    to={`/articles/${id}`}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    게시글 {id}
                </NavLink>
            </li>
        )
    }

    return (
        <div>
            <Outlet />
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        /!*<Link to="/articles/1">게시글 1</Link>*!/*/}
            {/*        <NavLink*/}
            {/*            to={'/articles/1'}*/}
            {/*            style={({ isActive }) => (isActive ? activeStyle : undefined)}>*/}
            {/*            게시글 1*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        /!*<Link to="/articles/2">게시글 2</Link>*!/*/}
            {/*        <NavLink*/}
            {/*            to={'/articles/2'}*/}
            {/*            style={({ isActive }) => (isActive ? activeStyle : undefined)}>*/}
            {/*            게시글 2*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        /!*<Link to="/articles/3">게시글 3</Link>*!/*/}
            {/*        <NavLink*/}
            {/*            to={'/articles/3'}*/}
            {/*            style={({ isActive }) => (isActive ? activeStyle : undefined)}>*/}
            {/*            게시글 3*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    )
}

export default Articles
