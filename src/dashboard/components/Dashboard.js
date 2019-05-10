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


const mapStateToProps=(state)=>{
  return{
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
  }
}

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.showList=this.showList.bind(this);
  }

  showList(){
    debugger;
    let list=require('../../jsonData/DashboardData.json')
    let data=list.user.map((opt,i)=>{
      return(
        <View style={{flex:1,borderWidth:1}}>
          <View></View>
        </View>
      )
    })

    return data

  }


  componentWillMount(){
  }


  render(){
    let {

    }=this.props;
    return(
      <View style={{flex:1}}>
        <View style={{flex:.1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>{'Dashboard'}</Text>
        </View>
        <ScrollView style={{flex:1}}>
          {this.showList()}
        </ScrollView>
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
