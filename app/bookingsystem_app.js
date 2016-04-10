import React, { AppRegistry, Component, StyleSheet, Text, View, Navigator } from 'react-native';
import ObjectAssign from 'object-assign';

import Router from './router';
import LoginScene from './components/login_scene/index';
import StartScene from './components/start_scene/index';

const firstSceneToBeDisplayed = StartScene;

class BookingSystemApp extends Component {

  configureScene( route, routeStack ) {

    // Configure Scene transition

    let sceneTransition = Navigator.SceneConfigs.HorizontalSwipeJump;

    /*
    Possible transition values in Navigator.SceneConfigs:
     PushFromRight
     FloatFromRight
     FloatFromLeft
     FloatFromBottom
     FloatFromBottomAndroid
     FadeAndroid
     HorizontalSwipeJump
     HorizontalSwipeJumpFromRight
     VerticalUpSwipeJump
     VerticalDownSwipeJump
     */

    // If the new scene is a Modal
    if ( route.type === 'Modal' )
      sceneTransition = Navigator.SceneConfigs.FloatFromBottom;

    return sceneTransition;
  }

  renderScene( route, navigator ) {

    // Get passed scene component to render
    const RouteComponent = route.component;

    return (
      <RouteComponent
        navigator={ navigator }
        { ...route.passProps }
      />
    );
  }

  render() {

    return (
      <Navigator
        style={ { flex: 1 } }
        initialRoute={ { name: 'Start', component: firstSceneToBeDisplayed } }
        configureScene={ this.configureScene }
        renderScene={ this.renderScene }
      />
    );
  }
}

export default BookingSystemApp;
