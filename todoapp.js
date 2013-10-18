Todos = new Meteor.Collection("todo");

if (Meteor.isServer) {

  Meteor.startup(function () {
    if (Todos.find().count() === 0) {
      var names = ["Eat",
                   "Sleep",
                   "Wakeup"];
      // for (var i = 0; i < names.length; i++)
      //   Meteor.call('addTodo',{name:$("#todoText").val()});
    }
  })
}