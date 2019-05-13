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
}from 'react-native';
import {
  setInvalidCredentials
} from '../action'

const mapStateToProps=(state)=>{
  return{
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setInvalidCredentials:(val)=>dispatch(setInvalidCredentials(val)),
  }
}

class InvalidCredentials extends React.Component{

  constructor(props) {
    super(props);
  }


  componentWillMount(){
  }


  render(){
    let {
      setInvalidCredentials
    }=this.props;
    return(
      <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.2)'}}>
        <View style={{
                    position:'absolute',
                    bottom:0,
                    width:Dimensions.get('window').width,
                    height:150,
                    justifyContent:'center',
                    backgroundColor:'white',
                    alignItems:'center'
                  }}>
          <Text style={{color:'red',fontSize:20}}>
            {'Please Enter Valid Credentials'}
          </Text>
          <TouchableOpacity
          style={{
            padding:10,
            margin:20,
            width:100,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            backgroundColor:'red'
          }}
          onPress={()=>{
            setInvalidCredentials(false)
          }}><Text style={{fontSize:16,alignItems:'center',color:'white'}}>{'OK'}</Text></TouchableOpacity>
       </View>
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InvalidCredentials)
