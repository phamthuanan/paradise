import React from 'react'
import BlogDetail from '../components/blog/BlogDetail'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as blogActions from '../actions/blog.actions'
import Reload from '../components/loading/Reload'

class BlogDetailContainer extends Component{
    constructor(props){
        super(props)
        this.state  = {

        }
    }

    componentWillMount() {
        console.log(this.props.match.params.blogId)
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        this.props.blogActions.getNewPost()
        this.props.blogActions.getCategoryBlog()
        this.props.blogActions.getBlogRelated(this.props.match.params.blogId)
        this.props.blogActions.getBlogDetail(this.props.match.params.blogId)
    }

    componentWillReceiveProps(){
        this.props.blogActions.getBlogRelated(this.props.match.params.blogId)
        this.props.blogActions.getBlogDetail(this.props.match.params.blogId)
    }

    render(){
        if(this.props.blogDetail && this.props.blogRelated.length > 0 && this.props.blogcategory && this.props.newPost){
            console.log(this.props.blogRelated)
            return(
                <BlogDetail
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.actions.logout()}
                    allProvider = {this.props.allProvider}
                    newPost = {this.props.newPost}
                    categoryBlog = {this.props.blogcategory}
                    blogDetail = {this.props.blogDetail}
                    blogRelated = {this.props.blogRelated}
                />
             )
        }
        else {
            return(
                <Reload / >
            )
        }
        
    }
    
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    blogcategory : state.blogReducers.categoryBlog.data,
    newPost : state.blogReducers.newPost.newPost,
    blogDetail :  state.blogReducers.blogDetail.blogDetail,
    blogRelated :  state.blogReducers.blogDetail.blogRelated
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
)  (BlogDetailContainer);