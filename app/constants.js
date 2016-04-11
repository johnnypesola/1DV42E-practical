const CONSTANTS = {};

CONSTANTS.API_URL = 'http://www.pesola.se:8080/BookingSystem/api/';

CONSTANTS.REGEX = {
  TEXT_FIELD: '^[0-9a-zA-ZåäöÅÄÖé\-_&\.,~\^@\(\)\/%\s\!]*$'
};

export default Object.freeze( CONSTANTS );
