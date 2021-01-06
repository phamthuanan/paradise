import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import Contact from '../components/contact/Contact'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactContiner  = (props) =>{

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [messenges, setmessenges] = useState('')
    const [notificationContact, setnotificationContact] = useState('')

    useEffect(() => {
        props.providerActions.getAllProvider()
      });

     const onSubmitContact = async (event) =>{
        event.preventDefault()
        try {
            await axios.post('http://localhost:8080/user/contact', {
                name_contact: name,
                phone_contact: phone,
                email_contact: email,
                messages : messenges
            })
        } catch (error) {
            console.log(error)
            toast.error("Thông tin gửi bị lỗi - Vui lòng thử lại", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return;
        }
        setName('');
        setphone('');
        setemail('');
        setmessenges('');
        toast.success("Thông tin liên hệ đã được gửi thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          });
    }
        return(
            <div>
                <ToastContainer/>
                <Contact
                    history = {props.history}
                    islogin = {props.islogin}
                    logout={() => this.props.actions.logout()}
                    name = {name}
                    setName = { (value) => setName(value)}
                    phone ={phone}
                    setPhone = {(value) => setphone(value)}
                    email = {email}
                    setEmail = {(value) => setemail(value)}
                    messenges = {messenges}
                    setMessenges = {(value) => setmessenges(value)}
                    onSubmitContact = {(e) => onSubmitContact(e)}
                    allProvider = {props.allProvider}
                />
            </div>
            
        )
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ContactContiner);