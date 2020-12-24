import React, {useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import Contact from '../components/contact/Contact'
import axios from 'axios';
const ContactContiner  = (props) =>{

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [messenges, setmessenges] = useState('')
    const [notificationContact, setnotificationContact] = useState('')

    const onSubmitContact = async (event) =>{
        event.preventDefault()
        try {
            await axios.post('https://localhost:8080/user/contact', {
                name: name,
                phone: phone,
                email: email,
                messenges : messenges
            })
        } catch (error) {

        }
        setName('');
        setphone('');
        setemail('');
        setmessenges('');
        setnotificationContact('Thông tin liên hệ đã được gửi đi thành công')
    }
        return(
            <Contact
                history = {props.history}
                islogin = {props.islogin}
                name = {name}
                setName = { (value) => setName(value)}
                phone ={phone}
                setPhone = {(value) => setphone(value)}
                email = {email}
                setEmail = {(value) => setemail(value)}
                messenges = {messenges}
                setMessenges = {(value) => setmessenges(value)}
                onSubmitContact = {(e) => onSubmitContact(e)}
                notification = {notificationContact}
            />
        )
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ContactContiner);