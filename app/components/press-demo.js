import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [
        'touchTarget',
        'shorter',
        'tan'
    ],

    pressed: false,

    press() {
        this.toggleProperty( 'pressed' );

        console.log( 'I was pressed' );
    },

    pressUp() {
        this.toggleProperty( 'pressed' );

        console.log( 'I was unpressed' );
    }
});
