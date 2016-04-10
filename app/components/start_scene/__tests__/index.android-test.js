jest.unmock( '../index.android.js' ); // unmock to use the actual implementation


describe( 'BookingSystemApp', () => {
  it( 'render method should not be empty', () => {

    const BookingSystemApp = require( '../index.android.js' );
    console.log( BookingSystemApp )

    // expect( 1 ).toBe( 1 );

  });
});
