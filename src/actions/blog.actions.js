import axios from 'axios'
import { blogTypes } from '../constants/action.types'

export const getCategoryBlog = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/category-blog')
    }
    catch (err) {
        return
    }
    dispatch(setCategoryBlog(res.data.data))
}

export const getBlog = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/blog/allblog', {
            page: getState().blogReducers.blog.page
        })
    }
    catch (err) {
        return
    }
    dispatch(setBlog(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}

export const getNewPost = () => async (dispatch, getState) => {
    
    let res
    try {
        res = await axios.post('http://localhost:8080/blog/newpost')
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setNewPost(res.data.data))
}

export const getBlogRelated = (id) => async (dispatch, getState) => {
    
    let res
    try {
        res = await axios.get('http://localhost:8080/blog/related/' + id, {
        })
    }
    
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setBlogRelated(res.data.data))
}

export const getBlogDetail = (id) => async (dispatch, getState) => {
    
    let res
    try {
        res = await axios.get('http://localhost:8080/blog/' + id, {
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setBlogDetail(res.data.data))
}

export const setBlog = (data) => ({
    type: blogTypes.SET_BLOG,
    data
})

export const setNewPost = (newPost) => ({
    type: blogTypes.SET_NEW_POST,
    newPost
})

export const setPage = (page) => ({
    type: blogTypes.SET_PAGE,
    page
})

export const setTotalPage = (totalpage) => ({
    type: blogTypes.SET_TOTAL_PAGE,
    totalpage
})

export const setCategoryBlog = (data) => ({
    type: blogTypes.SET_BLOG_CATEGORY,
    data
})

export const setBlogDetail = (blogDetail) => ({
    type: blogTypes.SET_BLOG_DETAIL,
    blogDetail
})

export const setBlogRelated = (blogRelated) => ({
    type: blogTypes.SET_BLOG_REALTED,
    blogRelated
})

export const backPage = () => (dispatch, getState) => {
    let page = getState().blogReducers.blog.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().blogReducers.blog.page
    let totalpage = getState().blogReducers.blog.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}