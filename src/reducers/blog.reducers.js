import { blogTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const categoryBlog = (state = { data : []}, action ) => {
    switch (action.type) {
        case blogTypes.SET_BLOG_CATEGORY:
            
            return {
                ...state,
                data : action.data
            }
    
        default:
            return state
    }
}

const blog = (state = {
    data: [], page: 1, totalpage: null}, action) => {
    switch (action.type) {
        case blogTypes.SET_BLOG: {
            return {
                ...state,
                data: action.data
            }
        }
        case blogTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case blogTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}

const newPost = (state = { newPost : []}, action) => {
    switch (action.type) {
        case blogTypes.SET_NEW_POST:
            return{
                ...state,
                newPost : action.newPost
            }
        
        default: return state
    }
}

const blogDetail = (state = {blogDetail: null, blogRelated: []}, action) => {
    switch (action.type) {
        case blogTypes.SET_BLOG_DETAIL: {
            return {
                ...state,
                blogDetail: action.blogDetail
            }
        }
        case blogTypes.SET_BLOG_REALTED: {
            return {
                ...state,
                blogRelated: action.blogRelated
            }
        }
        default: return state
    }
}
export default combineReducers({
    categoryBlog,
    blog,
    blogDetail,
    newPost
})