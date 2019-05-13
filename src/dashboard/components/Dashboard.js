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

const WIDTH=Dimensions.get('window').width

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
        <View
          key={i}
         style={{flex:1,padding:10,paddingHorizontal:10,margin:10,marginHorizontal:20,backgroundColor:'white',borderRadius:5}}>
          <View style={{flex:1,borderBottomColor:'#a8a8a8',paddingBottom:15}}>
            <Text style={{color:'#27c475',fontSize:18,fontWeight:'600',textTransform:'capitalize'}}>{opt.name}</Text>
            <Text style={{color:'black',fontSize:18,fontWeight:'200'}}>{opt.age}</Text>
            <Text style={{color:'black',fontSize:18,textTransform:'capitalize',fontWeight:'200'}}>{opt.gender}</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}><Text style={{color:'black',fontSize:18,fontWeight:'200'}}>{opt.email}</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Text style={{color:'black',fontSize:18,fontWeight:'200'}}>{opt.phoneNo}</Text></View>
            </View>
          </View>
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
      <View style={{flex:1,backgroundColor:'#c5c5c5'}}>
        <View style={{padding:20}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black',textAlign:'center'}}>{'Dashboard'}</Text>
        </View>
        <View style={{flex:1}}>
        <ScrollView style={{}} contentContainerStyle={{}}>
          {this.showList()}
        </ScrollView>
        </View>
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
