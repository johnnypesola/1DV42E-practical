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

  redirectToStart() {

    // `navigator` is passed into your scene component when you have
    // implemented getSceneClass in your route
    this.props.navigator.push( Router.getStartRoute() );
  }

  render() {
    return (
      <View style={ [styles.container, this.props.style] }>
        <Text>Login page: { this.props.data }</Text>
        <Button onPress={ this.redirectToStart() }>
          Till Start
        </Button>
        <Button>Change title</Button>
        <Button>Back</Button>
      </View>
    );
  }
}

export default LoginScene;
