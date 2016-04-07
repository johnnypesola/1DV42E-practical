import React from 'react-native';
import LoginScene from './components/login_scene/index';
import StartScene from './components/start_scene/index';

const Router = {

  getLoginRoute() {
    return {
      // Return a React component class for the scene. It receives a prop
      // called `navigator` that you can use to push on more routes.
      getSceneClass() {
        return LoginScene;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus( event ) {
        console.log( 'Login Scene received focus.' );
      },

      // Return a string to display in the title section of the navigation bar.
      // This route's title is displayed next to the back button when you push
      // a new route on top of this one.
      getTitle() {
        return 'Logga in';
      }
    };
  },

  getStartRoute() {
    return {
      // Return a React component class for the scene. It receives a prop
      // called `navigator` that you can use to push on more routes.
      getSceneClass() {
        return StartScene;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus( event ) {
        console.log( 'Start Scene received focus.' );
      },

      // Return a string to display in the title section of the navigation bar.
      // This route's title is displayed next to the back button when you push
      // a new route on top of this one.
      getTitle() {
        return 'Start';
      }
    };
  }
/*
  getProfileRoute( profile ) {
    return {
      // You can also render a scene yourself when you need more control over
      // the props of the scene component
      renderScene( navigator ) {
        let ProfileScene = require( './profileScene' );
        return <ProfileScene navigator={ navigator } profile={ profile } />;
      },

      // There are onWillBlur and onDidBlur events when the scene loses focus.
      // These events occur when another scene will focus or did focus,
      // respectively. The difference between "will" and "did" is the start and
      // end of the scene transition.
      onDidBlur( event ) {
        console.log( `Profile Scene for ${profile} lost focus.` );
      },

      // You can render arbitrary views for the title component. Note that you
      // also need to implement getTitle if you want the title of this route to
      // show up in the back button to it.
      renderTitle() {
        return (
          <View style={ styles.container }>
            <Image source={ { uri: profile.photoUrl } } style={ styles.titlePhoto } />
            <Text style={ styles.titleName }>{ profile.name }</Text>
          </View>
        );
      },

      getTitle() {
        return profile.name;
      },

      // Render the view to display on the right side of the navigation bar. It
      // is typically a button but doesn't have to be.
      renderRightButton() {
        return (
          <Button onPress={ () => { console.log( 'Tapped right button' ); } }>
            Log
          </Button>
        );
      }
    };
  }
*/
};

export default Router;
