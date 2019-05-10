import { createStackNavigator,createAppContainer ,createBottomTabNavigator} from 'react-navigation';

import Login from '../login/components/Login';
import Dashboard from '../dashboard/components/Dashboard';



const stackNavigator=createStackNavigator({
  Dashboard:{
    screen:Dashboard,
    navigationOptions:{
      header:null
    }
  },
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },

})



export default createAppContainer(stackNavigator);
