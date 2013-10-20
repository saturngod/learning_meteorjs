Meteor.publish('all-Todos',function(){

    return Todos.find({},{sort:{'when':1}});
});

Meteor.methods({
    addTodo: function(doc) {
        doc.when = new Date;
        doc.done = 0;
        return Todos.insert(doc);
    },
    archive: function(done_id) {

    	var id;
    	id = new ObjectID(done_id);

    	Todos.update({_id:id},{
    		 $set: {
        		done : 1
      		}
    	});
    }

});