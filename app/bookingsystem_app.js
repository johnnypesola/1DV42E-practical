import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native';
// import { Actions, Scene, Router } from 'react-native-router-flux';

import ExNavigator from '@exponent/react-native-navigator';
import Router from './router';
import LoginScene from './components/login_scene/index';
import StartScene from './components/start_scene/index';

class BookingSystemApp extends Component {

  render() {
    return (
      <ExNavigator
        initialRoute={ Router.getLoginRoute() }
        style={ { flex: 1 } }
        sceneStyle={ { paddingTop: 64 } }
      />
    );
  }

    /*
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='login'
            component={ LoginScene }
            title='Logga in'
          />
          <Scene
            key='start'
            component={ StartScene }
            title='Start'
          />
        </Scene>
      </Router>
    );
    */
}

export default BookingSystemApp;
