const Router = {

  navigate( navigator, sceneComponent, name = '', type = 'Normal' ) {

    navigator.push({
      component: sceneComponent,
      passProps: {
        name: name
      },
      type: type
    });
  }
};

export default Router;
