import React, { Component } from 'react'
import Blog from '../components/blog/Blog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as blogActions from '../actions/blog.actions'
import Reload from '../components/loading/Reload'
class BlogContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        this.props.blogActions.getBlog()
        this.props.blogActions.getNewPost()
        this.props.blogActions.getCategoryBlog()

    }

    render(){
        if(this.props.blog && this.props.blogcategory  && this.props.newPost){
            return(
            <Blog
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout={() => this.props.actions.logout()}
                allProvider = {this.props.allProvider}
                totalpage = {this.props.totalpage}
                page = {this.props.page}
                backPage={() => this.props.blogActions.backPage()}
                nextPage={() => this.props.blogActions.nextPage()}
                setPage={(page) => this.props.blogActions.setPage(page)}
                blog = {this.props.blog}
                newPost = {this.props.newPost}
                blogcategory = {this.props.blogcategory}
            />
         )
        }
        else{
            <Reload/>
        }
        
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    blog : state.blogReducers.blog.data,
    totalpage : state.blogReducers.blog.totalpage,
    page  :state.blogReducers.blog.page,
    blogcategory : state.blogReducers.categoryBlog.data,
    newPost : state.blogReducers.newPost.newPost

})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch),
        blogActions : bindActionCreators(blogActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (BlogContainer)