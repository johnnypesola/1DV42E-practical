import React, { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

class StartScene extends React.Component {
  render() {
    return (
      <View style={ [styles.container, this.props.style] }>
        <Text>Start page: { this.props.data }</Text>
        <Button onPress={ () => Actions.refresh({ title: "Changed title" }) }>Change title</Button>
        <Button onPress={ Actions.pop }>Back</Button>
      </View>
    );
  }
}

export default StartScene;
