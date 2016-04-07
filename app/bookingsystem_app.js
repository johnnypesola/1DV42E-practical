import React, { AppRegistry, Component, StyleSheet, Text, View, Navigator } from 'react-native';

import Router from './router';
import LoginScene from './components/login_scene/index';
import StartScene from './components/start_scene/index';

const firstSceneToBeDisplayed = StartScene;

class BookingSystemApp extends Component {

  renderScene( route, navigator ) {

    const RouteComponent = route.component;

    return (
      <RouteComponent navigator={ navigator }
        { ...route.passProps }
      />
    );
  }

  render() {
    return (
      <Navigator
        style={ { flex: 1 } }
        initialRoute={ { name: 'Start', component: firstSceneToBeDisplayed } }
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
