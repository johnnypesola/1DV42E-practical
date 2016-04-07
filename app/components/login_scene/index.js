import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
// import { Actions } from "react-native-router-flux";
import Router from '../../router';

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
      name: 'Start',
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
