import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [
        'touchTarget',
        'wider',
        'shorter',
        'green'
    ],

    eventIsHappening: false,

    message: null,

    panStart() {
        this.toggleProperty( 'eventIsHappening' );

        console.log( 'PANNING start' );
    },

    pan() {
        Ember.run.debounce(
            this,
            function(){
                this.set( 'message', 'Panning' );
            },
            350
        );

        console.log( 'PANNING ongoing' );
    },

    panEnd() {
        this.toggleProperty( 'eventIsHappening' );
        this.set( 'message' );

        console.log( 'PANNING end' );
    }
});
