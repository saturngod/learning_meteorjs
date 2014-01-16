if (Meteor.isClient) {
  
  Meteor.subscribe('all-Todos');

  Template.todos.todoList = function () {
    return Todos.find({userid:Meteor.user()._id,done:0});
  };

  Template.todoItem.itemID = function () {
    return this._id;
  };

   Template.todos.username = function () {
    return Meteor.user() ? Meteor.user().emails[0].address : '';
  };

  Template.todos.events({
    'click input#btnAdd' : function(){
     insertNew();
    },
    'keypress input#todoText': function (evt) {
      if (evt.which === 13) {
        insertNew();
      }
    },
    'click #logout' : function (e,t) {
      e.preventDefault();
      Meteor.logout();
    }
  });
  Template.todoItem.events({
    'click input.done' : function(){
      archiveByID(this._id);
    }
  });

 function insertNew() 
 {
     Meteor.call('addTodo',{userid:Meteor.user()._id,name:$("#todoText").val()});
     $("#todoText").val("");
 }

 function archiveByID(done_id)
 {
    Meteor.call('archiveItem',done_id);
 }
}
