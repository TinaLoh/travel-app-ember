import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
     deletePost: function(){
       var model = this.get('model');
       model.destroyRecord();
     }
  }
});
