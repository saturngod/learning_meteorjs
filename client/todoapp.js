if (Meteor.isClient) {
  
  Meteor.subscribe('all-Todos');

  Template.todos.todoList = function () {
    return Todos.find();
  };

  Template.todoItem.itemID = function () {
    return this._id;
  };

  Template.todos.events({
    'click input#btnAdd' : function(){
     insertNew();
    },
    'keypress input#todoText': function (evt) {
      if (evt.which === 13) {
        insertNew();
      }
    }
  });
  Template.todoItem.events({
    'click input.done' : function(){
      Todos.remove(this._id);
    }
  });

 function insertNew() 
 {
     Meteor.call('addTodo',{name:$("#todoText").val()});
     $("#todoText").val("");
 }
}
