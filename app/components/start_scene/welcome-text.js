import React, { View, Text, StyleSheet } from 'react-native';
// import { Actions } from 'react-native-router-flux';

class Welcome extends React.Component {

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });

    return (
      <View style={ styles.container }>
        <Text>Välkommen till bokningssystemet.</Text>
      </View>
    );
  }
}

export default Welcome;
