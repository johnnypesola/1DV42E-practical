import CONSTANTS from '../../constants';

class RestApiBase {

  constructor( resourcePath ) {

    this.apiUrl = CONSTANTS.API_URL + resourcePath;

    this.baseHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
}

export default RestApiBase;
