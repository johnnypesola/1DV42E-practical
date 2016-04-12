import Button from "react-native-button";
import LoginScene from '../login_scene/index';
import Router from '../../router';

import React, {
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class FurnituringScene extends React.Component {

  constructor( props ) {
    super( props );

    /* this.state = {
      someText: "something"
    };

    */
  }

  componentDidMount() {
    this.getFurnituring();
  }

  getFurnituring() {

    const furnituring = new FurnituringService();

    furnituring.getAll()
      .then( ( response ) => {

        this.setState({
          furnituring: response
        });
      });
  }

  render() {

    return (
      <View style={ styles.container }>
        <Text>Detta är Start</Text>
        <Button onPress={ () => Router.navigate( this.props.navigator, LoginScene, 'A name from Start' ) }>
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
