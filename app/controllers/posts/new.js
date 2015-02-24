import Ember from 'ember';


export default Ember.Controller.extend({
actions: {
    createNew: function() {
      var photo = this.get("newPhoto");
      var name = this.get("newName");
      var description = this.get("newDescription");
      var post = this.store.createRecord('post', {photo: photo, name: name, description: description});
      post.save();
      this.set("newPhoto", " ");
      this.set("newName", " ");
      this.set("newDescription", " ");
      this.set("message", "Successfully created a note!");
    }
  }
});
