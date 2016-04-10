import StartScene from './components/start_scene/index';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

const firstSceneToBeDisplayed = StartScene;
const appTitleText = "Bokningssystemet";

class BookingSystemApp extends Component {

  configureScene( route ) { // Unused arguments: routeStack

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

  getNavigationBarRouteMapper() {

    const styles = StyleSheet.create(
      {
        navButtonText: {
          fontSize: 18,
          marginLeft: 13,
          marginTop: 14,
          backgroundColor: '#ffefef'
        },
        title: {
          marginTop: 14,
          marginLeft: 20,
          fontSize: 16,
          backgroundColor: '#ffefff'
        }
      }
    );

    return {

      LeftButton( route, navigator, index ) { // Unused arguments: navState

        if ( index > 0 ) {

          return (
            <TouchableHighlight
              underlayColor='transparent'
              onPress={ () => navigator.pop() }
            >
              <Text style={ styles.navButtonText }>
                Tillbaka
              </Text>
            </TouchableHighlight>

          );
        }

        return null;
      },

      Title() { // Unused arguments: route, navigator, index, navState
        return (
          <Text style={ styles.title }>{ appTitleText }</Text>
        );
      },

      RightButton( route ) { // Unused arguments: navigator, index, navState

        if ( route.onRightTextPress ) {

          return (
            <TouchableHighlight
              underlayColor='transparent'
              onPress={ () => route.onRightTextPress() }
            >
              <Text style={ styles.navButtonText }>
                { route.rightText }
              </Text>
            </TouchableHighlight>
          );
        }

        return null;
      }
    };
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

    const styles = StyleSheet.create(
      {
        navBar: {
          height: 60,
          backgroundColor: '#efefef'
        },
        mainContainer: {

        }
      }
    );

    return (
      <Navigator
        style={ { flex: 1 } }
        initialRoute={ { name: 'Start', component: firstSceneToBeDisplayed } }
        configureScene={ this.configureScene }
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.navBar }
            routeMapper={ this.getNavigationBarRouteMapper() }
          />
        }
      />
    );
  }
}

export default BookingSystemApp;
