import React, { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "react-native-button";
import LoginScene from '../login_scene/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class StartScene extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      someText: "something"
    };
  }

  _navigate( name ) {

    this.props.navigator.push({
      component: LoginScene,
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
        <Text>{ this.state.someText }</Text>
        <TextInput
          onChangeText={ ( someText ) => this.setState({ someText }) }
          value={ this.state.someText }
        />
      </View>
    );
  }
}

export default StartScene;
