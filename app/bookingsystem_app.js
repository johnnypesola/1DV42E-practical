import React, { AppRegistry, Component, StyleSheet, Text, View, Navigator } from 'react-native';

import Router from './router';
import LoginScene from './components/login_scene/index';
import StartScene from './components/start_scene/index';

class BookingSystemApp extends Component {

  renderScene( route, navigator ) {

    let sceneToReturn;

    if ( route.name === 'Start' ) {
      sceneToReturn = (
        <StartScene
          navigator={ navigator }
          { ...route.passProps }
        />
      );
    }

    if ( route.name === 'Login' ) {
      sceneToReturn = (
        <LoginScene
          navigator={ navigator }
          { ...route.passProps }
        />
      );
    }

    return sceneToReturn;
  }

  render() {
    return (
      <Navigator
        style={ { flex: 1 } }
        initialRoute={ { name: 'Start' } }
        renderScene={ this.renderScene }
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
