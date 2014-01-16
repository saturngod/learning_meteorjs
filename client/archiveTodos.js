if (Meteor.isClient) {
  
  Meteor.subscribe('all-Todos');

  Template.archiveTodos.todoList = function () {
  	if(Meteor.user()) {
    	return Todos.find({userid:Meteor.user()._id,done:1});
    }
    else {
    	return null;
    }
  };

  Template.archiveTodos.itemID = function () {
    return this._id;
  };

  Template.todoItemArchive.events({
    'click .restore' : function(){
      restoreTask(this._id);
    },
    'click .delete' : function () {
      deleteTask(this._id);
    }
  });

  function restoreTask(done_id)
{
  Meteor.call('restoreItem',done_id);
}

function deleteTask(done_id)
{
  Meteor.call('deleteItem',done_id);
}
}


