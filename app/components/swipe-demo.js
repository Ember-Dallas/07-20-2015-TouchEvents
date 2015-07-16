import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [
        'touchTarget',
        'wider',
        'taller',
        'red'
    ],

    direction: null,

    swipeRight() {
        this.set( 'direction', 'right' );
    },

    swipeLeft() {
        this.set( 'direction', 'left' );
    },

    swipeUp() {
        this.set( 'direction', 'up' );
    },

    swipeDown() {
        this.set( 'direction', 'down' );
    },

    swipe() {
        console.log( 'SWIPED' );
    }

});
