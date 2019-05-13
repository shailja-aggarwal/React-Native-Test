import React , {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  Dimensions,
  Image,
  Modal,
  AsyncStorage,
  ActivityIndicator,
  BackHandler,
  ImageBackground
}from 'react-native';
import TextInputComponent from '../../reusableComponent/TextInputComponent'
import InvalidCredentials from './InvalidCredentials'
import {
  storeUserName,
  storeUserPassword,
  checkValidUser
} from '../action'

const mapStateToProps=(state)=>{
  return{
    username:state.login.username,
    isCredentialInvaid:state.login.isCredentialInvaid
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    storeUserName:(val)=>dispatch(storeUserName(val)),
    storeUserPassword:(val)=>dispatch(storeUserPassword(val)),
    checkValidUser:(cb)=>dispatch(checkValidUser(cb)),

  }
}

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      validEmail:true,
      validPassword:true,
      email:'',
      password:''
    }
    this.cb=this.cb.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
    this.validatePassword=this.validatePassword.bind(this);
    this.checkUser=this.checkUser.bind(this);

  }

  cb(){
    this.props.navigation.navigate("Dashboard")
  }

  validateEmail(){
    debugger;
    let check=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
    if (!check){
      this.setState({
        validEmail:false,
        email:''
      })
    }
    else{
      this.props.storeUserName(this.state.email)
    }
  }

  validatePassword(){
    debugger;
    if(this.state.password.length<8){
      this.setState({
        validPassword:false,
        password:''
      })
    }
    else{
      this.props.storeUserPassword(this.state.password)
      this.checkUser()
    }
  }

  checkUser(){
    debugger;
    if(this.state.validEmail && this.state.validPassword){
      this.props.checkValidUser(this.cb)
    }
  }

  componentWillMount(){
  }


  render(){
    let {
      storeUserName,
      storeUserPassword,
      checkValidUser,
      username,
      isCredentialInvaid
    }=this.props;
    let img=require('../../images/images.jpeg')
    return(
      <ImageBackground style={{flex:1}} source={img}
      >
        <View style={{padding:15}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'white',textAlign:'center'}}>{'Login'}</Text>
        </View>
        <View style={{flex:1,marginTop:30,}}>
            <TextInputComponent
              placeHolderText={(this.state.validEmail ? 'UserName' : 'Invalid Email')}
              placeholderTextColor={(this.state.validEmail ? '#a8a8a8' : 'yellow')}
              action={(val)=>{
              if(this.state.validEmail)  {
                this.setState({
                  email:val
                })
              }
              else{
                this.setState({
                  email:''
                })
              }
            }}
              blurAction={()=>{
                this.validateEmail()
              }}
              focusAction={()=>{
                this.setState({
                  validEmail:true
                })
              }}
              value={(this.state.validEmail ? this.state.email : '') }
            />
            <TextInputComponent
              placeHolderText={(this.state.validPassword ? 'Password' : 'Inavlid Password')}
              action={(val)=>{
              this.setState({password:val})
            }}
              blurAction={()=>{
                this.validatePassword()
              }}
              focusAction={()=>{
                this.setState({
                  validPassword:true
                })
              }}
              visiblePassword={true}
              secureTextEntry={true}
              value={this.state.password}
              placeholderTextColor={(this.state.validPassword ? '#a8a8a8' : 'yellow')}
            />
            <TouchableOpacity style={{height:40,width:100,alignSelf:'center',marginTop:30,justifyContent:'center',backgroundColor:'#27c475'}}
            onPress={()=>{
              this.validatePassword()

            }}
            >
              <Text style={{fontSize:20,fontWeight:'400',color:'white',padding:10,textAlign:'center'}}>{'Submit'}</Text>
            </TouchableOpacity>
        </View>
        <Modal
          visible={isCredentialInvaid}
          animationType={'slide'}
          transparent = {true}
          onOrientationChange = {'landscape'}
        >
        <InvalidCredentials/>
       </Modal>
      </ImageBackground>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
