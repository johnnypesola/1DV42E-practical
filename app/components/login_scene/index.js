import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
import StartScene from '../start_scene/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class LoginScene extends React.Component {

  _navigate( name ) {

    this.props.navigator.push({
      component: StartScene,
      passProps: {
        name: name
      }
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Detta är Login</Text>
        <Button onPress={ () => this._navigate( 'A name from Login' ) }>
          Till Start
        </Button>
      </View>
    );
  }
}

export default LoginScene;
