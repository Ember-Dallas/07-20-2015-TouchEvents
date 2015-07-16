import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [
        'touchTarget',
        'shorter',
        'blue'
    ],

    tapped: false,

    tap() {
        this.toggleProperty( 'tapped' );

        Ember.run.later( () => {
            this.toggleProperty( 'tapped' );
        }, 1000 );
    }

});
