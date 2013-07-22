Meteor.publish('all-Todos',function(){

    return Todos.find({},{sort:{'when':1}});
});

Meteor.methods({
    addTodo: function(doc) {
        doc.when = new Date;
        return Todos.insert(doc);
    }
});