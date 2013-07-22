Todos = new Meteor.Collection("todo");

if (Meteor.isClient) {
  
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
     Todos.insert({name:$("#todoText").val()});
     $("#todoText").val("");
 }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Todos.find().count() === 0) {
      var names = ["Eat",
                   "Sleep",
                   "Wakeup"];
      for (var i = 0; i < names.length; i++)
        Todos.insert({name: names[i]});
    }
  })
}