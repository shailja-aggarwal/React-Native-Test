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
  BackHandler
}from 'react-native';
import TextInputComponent from '../../reusableComponent/TextInputComponent'
import {
  storeUserName,
  storeUserPassword,
  checkValidUser
} from '../action'

const mapStateToProps=(state)=>{
  return{
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
    this.cb=this.cb.bind(this);
  }

  cb(){
    this.props.navigation.navigate("Dashboard")
  }

  componentWillMount(){
  }


  render(){
    let {
      storeUserName,
      storeUserPassword,
      checkValidUser
    }=this.props;
    return(
      <View style={{flex:1}}>
        <View style={{flex:.1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>{'Login'}</Text>
        </View>
        <View style={{flex:1,marginTop:30,}}>
            <TextInputComponent placeHolderText={'UserName'} action={(val)=>{
              storeUserName(val)
            }}/>
            <TextInputComponent placeHolderText={'Password'}  action={(val)=>{
              storeUserPassword(val)
            }}/>
            <TouchableOpacity style={{height:40,width:100,alignSelf:'center',marginTop:30,justifyContent:'center',alignItems:'center',backgroundColor:'#27c475'}}
            onPress={()=>{
              checkValidUser(this.cb)
            }}
            >
              <Text style={{fontSize:20,fontWeight:'400',color:'white'}}>{'Submit'}</Text>
            </TouchableOpacity>
        </View>

      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
