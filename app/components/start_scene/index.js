import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
//import { Actions } from "react-native-router-flux";
import Router from '../../router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class StartScene extends React.Component {

  redirectToLogin() {

    // `navigator` is passed into your scene component when you have
    // implemented getSceneClass in your route
    this.props.navigator.push( Router.getLoginRoute() );
  }

  render() {
    return (
      <View style={ [styles.container, this.props.style] }>
        <Button onPress={ this.redirectToLogin() }>
          Till Login
        </Button>
      </View>
    );
  }
}

export default StartScene;
