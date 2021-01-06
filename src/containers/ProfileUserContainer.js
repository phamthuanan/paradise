import React, { Component } from 'react'
import UserProfile from '../components/userprofile/UserProfile'
import Reload from '../components/loading/Reload'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as profileActions from '../actions/profile.actions'
import * as providerActions from '../actions/provider.actions'
import storeConfig from '../config/storage.config'
import axios from 'axios'
class ProfileUserContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            name : '',
            phone: '',
            address : '',
            avartar : '',
            historyBuyTour : null,
            tourDesigns : null,
            file : null,
            notiupdatePassword: null
        }
    }

    async componentWillMount() {
        let res = await this.props.actions.auth();
        this.props.providerActions.getAllProvider()
        if (res === false) this.props.history.push("/");
        if (storeConfig.getUser() !== null) {
          this.setState({
            email: storeConfig.getUser().email,
            name: storeConfig.getUser().name,
            phone: storeConfig.getUser().phone,
            address: storeConfig.getUser().address,
            avatar: storeConfig.getUser().avatar
          });
        }
        let result = null;
        try {
          result = await axios.post("http://localhost:8080/user/myhistory/" + storeConfig.getUser().id);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({historyBuyTour: result.data.data}) 

        let results= null;
        try {
          results = await axios.get("http://localhost:8080/user/alltourdesignbyuser/" + storeConfig.getUser().id);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({tourDesigns: results.data.data})
      }
      componentWillUnmount() {
        this.props.profileActions.resetProfile();

      }
      updatePassword = async (oldpassword, newpassword) => {
        let res = null;
        try {
          res = await axios.post("http://localhost:8080/user/updatepassword", {
            email: storeConfig.getUser().email,
            oldpassword: oldpassword,
            newpassword: newpassword
          });
        } catch (err) {
          console.log(err);
          this.setState({ notiupdatePassword: false });
          return false;
        }
        this.setState({notiupdatePassword: true})
      };
      resetUpdatePassword = () => {
        this.setState({
            notiupdatePassword: null
        })
    }

    render(){
      if(this.props.islogin){
        if(this.state.historyBuyTour && this.state.tourDesigns){
            return(
                  <UserProfile
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.actions.logout()}
                    email={this.state.email}
                    name={this.state.name}
                    address={this.state.address}
                    phone={this.state.phone}
                    avatar={this.state.avartar}
                    historyBuyTour = {this.state.historyBuyTour}
                    setEmail={value => this.setState({ email: value })}
                    setName={value => this.setState({ name: value })}
                    setAddress={value => this.setState({ address: value })}
                    setPhone={value => this.setState({ phone: value })}
                    setAvatar={value => this.setState({ avatar: value })}
                    updateInfor={() =>
                      this.props.profileActions.updateInfor(
                        this.state.email,
                        this.state.name,
                        this.state.address,
                        this.state.phone,
                        this.state.avatar,
                        this.state.file
                      )
                    }
                    isupdate={this.props.isupdate}
                    updatePassword={(oldpassword, newpassword) =>
                      this.updatePassword(oldpassword, newpassword)
                    }
                    notiupdatePassword={this.state.notiupdatePassword}
                    resetUpdatePassword={() => this.resetUpdatePassword()}
                    allProvider = {this.props.allProvider}
                    tourDesigns = {this.state.tourDesigns}
                    setFile = {(value) => this.setState({file : value})}
                  />
          )
        }
        else{
          return(
            <Reload />
          )
        }
        
      }
      else {
        this.props.history.push('/')
      }
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    isupdate: state.profileReducers.profile.isupdate,
    allProvider : state.providerReducers.provider.allprovider
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        profileActions: bindActionCreators(profileActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch)

    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) ( ProfileUserContainer);