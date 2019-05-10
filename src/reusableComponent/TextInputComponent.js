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

  constructor(props) {
    super(props);
  }


  componentWillMount(){
  }


  render(){
    let {
      placeHolderText,
      action,
    }=this.props;
    return(
      <View style={{borderWidth:1,margin:20,height:50,borderColor:'#a8a8a8'}}>
        <TextInput style={{paddingLeft:10}}
          placeholder={placeHolderText}
          onChangeText={(val)=>{
            action(val)
          }}
        />
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)
