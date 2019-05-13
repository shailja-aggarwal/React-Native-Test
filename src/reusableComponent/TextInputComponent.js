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

const mapStateToProps=(state)=>{
  return{
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

  }
}

class TextInputComponent extends React.Component{

  static defaultProps={
    placeHolderText:'',
    action:()=>{},
    blurAction:()=>{},
    value:'',
    focusAction:()=>{},
    placeholderTextColor:'#a8a8a8',
    visiblePassword:false,
    secureTextEntry:false
  }

  constructor(props) {
    super(props);
  }


  componentWillMount(){
  }


  render(){
    let {
      placeHolderText,
      action,
      blurAction,
      value,
      focusAction,
      placeholderTextColor,
      visiblePassword,
      secureTextEntry
    }=this.props;
    return(
      <View style={{borderWidth:1,margin:20,height:50,borderColor:'#a8a8a8'}}>
        <TextInput style={{paddingLeft:10,color:'white'}}
          placeholder={placeHolderText}
          onChangeText={(val)=>{
            action(val)
          }}
          onBlur={()=>{
            blurAction()
          }}
          onFocus={()=>{
            focusAction()
          }}
          value={value}
          placeholderTextColor={placeholderTextColor}
          visible-password={visiblePassword}
          secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)
