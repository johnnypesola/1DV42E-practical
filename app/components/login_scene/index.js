import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
import StartScene from '../start_scene/index';
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

  render() {

    return (
      <View style={ styles.container }>
        <Text>Detta är Login</Text>
        <Button onPress={ () => this.props.navigator.pop() }>
          Till Start
        </Button>
      </View>
    );
  }
}

export default LoginScene;
