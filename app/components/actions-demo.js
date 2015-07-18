import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        demoTapAction() {
            alert( 'demoTapAction' );
        },

        demoPressAction() {
            alert( 'demoPressAction' );
        }
    }

});
