import React, { View, Text, StyleSheet } from "react-native";
//import Button from "react-native-button";
import { Card, Button } from 'react-native-material-design';
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
        <Card>
          <Card.Body>
            <Text>Detta är login.</Text>
          </Card.Body>
          <Card.Actions position='right'>
            <Button text='Logga in'
              onPress={ () => alert( 'Jag loggar nu in.' ) }
            />
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

export default LoginScene;
