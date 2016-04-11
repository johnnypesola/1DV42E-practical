import RestApiBase from './rest_api_base';

class FurnituringService extends RestApiBase {

  constructor() {
    super( 'Furnituring' );
  }

  get( id ) {

    return new Promise( ( resolve, reject ) => {

      fetch( this.apiUrl + '/' + id, {
        method: 'GET',
        headers: this.baseHeaders
      })
        .then( ( response ) => {

          return response.json();

        })
        .then( ( responseJson ) => {

          resolve( responseJson );

        })
        .catch( () => {

          reject( 'Kunde inte hämta möblering.' );

        });
    });
  }

  getAll() {

    return new Promise( ( resolve, reject ) => {

      fetch( this.apiUrl, {
        method: 'GET',
        headers: this.baseHeaders
      })
        .then( ( response ) => {

          return response.json();

        })
        .then( ( responseJson ) => {

          resolve( responseJson );

        })
        .catch( () => {

          reject( 'Kunde inte hämta möbleringar.' );

        });
    });
  }
}

export default FurnituringService;
