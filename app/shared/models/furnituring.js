import t from 'tcomb-form-native';
import C from '../../constants';

const nameMaxLength = 50;
const nameMinLength = 1;

// Custom validation for Name attribute
const NameValidator = t.refinement( t.String, ( name ) => {

  return (
    !name.match( C.REGEX.TEXT_FIELD ) ||
    name.length > nameMaxLength ||
    name.length < nameMinLength
  );
});

// Error message for Name attribute
NameValidator.getValidationErrorMessage = ( value, path ) => {

  return 'Ogiltigt namn på möblering';
};

// Domain model with validation
const Furnituring = t.struct({
  name: NameValidator, // a required string
  id: t.maybe( t.Number ) // an optional number
});

export default Furnituring;
