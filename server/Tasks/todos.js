Meteor.publish('all-Todos',function(){

    return Todos.find({},{sort:{'when':1}});
});

Meteor.methods({
    addTodo: function(doc) {
        doc.when = new Date;
        doc.done = 0;
        return Todos.insert(doc);
    },
    archiveItem: function(done_id) {

    	return Todos.update({_id:done_id},{
    		 $set: {
        		done : 1
      		}
    	});
    },
    restoreItem: function(done_id) {
        return Todos.update({_id:done_id},{
             $set: {
                done : 0
            }
        });
    },
    deleteItem: function(done_id) {
        return Todos.remove(done_id);
    }


});