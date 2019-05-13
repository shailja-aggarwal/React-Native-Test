import { createStackNavigator,createAppContainer ,createBottomTabNavigator} from 'react-navigation';

import Login from '../login/components/Login';
import Dashboard from '../dashboard/components/Dashboard';



const stackNavigator=createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },
  Dashboard:{
    screen:Dashboard,
    navigationOptions:{
      header:null
    }
  },


})



export default createAppContainer(stackNavigator);
