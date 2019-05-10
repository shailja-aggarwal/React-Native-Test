import React , {Component} from 'react';
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
}from 'react-native';
import {connect} from 'react-redux';
import StackNavigator from './StackNavigator'

const mapStateToProps=(state)=>{
  return{
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

  }
}


class Navigation extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
          <StackNavigator/>
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
