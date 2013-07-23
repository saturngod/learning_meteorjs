Template.register.events({
    'click #login-btn' : function(e,t) {
        e.preventDefault();
        Session.set('registerForm',null);
      },

      'submit #register-form' : function (e,t) {
      	 e.preventDefault();
      	var email = t.find('#account-email').value
        , password = t.find('#account-password').value;

        // Trim and validate the input

      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // Inform the user that account creation failed
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
      }
});