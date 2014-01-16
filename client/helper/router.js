Meteor.Router.add({
	"/": function (){
		if (Meteor.loggingIn()) {
            return 'loading';
        } else if (Meteor.user()) {
            return 'todos';
        } else {
            return 'userForm';
        }
	},
	"/archive" : "archiveTodos"
});