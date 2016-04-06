import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

// import Welcome from 'app/components/start_screen/welcome-text';

import LoginScene from 'login_scene/index';
import StartScene from 'start_scene/index';

class BookingSystemApp extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='login'
            component={ LoginScene }
            title='Logga in'
          />
          <Scene key='start'
            component={ StartScene }
          />
        </Scene>
      </Router>
    );
  }
}

export default BookingSystemApp;
