import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
//import { Actions } from "react-native-router-flux";
// import Router from '../../router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class StartScene extends React.Component {

  _navigate( name ) {

    this.props.navigator.push({
      name: 'Login',
      passProps: {
        name: name
      }
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Detta är Start</Text>
        <Button onPress={ () => this._navigate( 'A name from Start' ) }>
          Till Login
        </Button>
      </View>
    );
  }
}

export default StartScene;
