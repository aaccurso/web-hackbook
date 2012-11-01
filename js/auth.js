//////////////////////////
//
// Authentication
// See "Logging the user in" on https://developers.facebook.com/mobile
//
//////////////////////////

var user = [];

var permissions = ['user_status', 'publish_checkins', 'user_likes'];

//Detect when Facebook tells us that the user's session has been returned
function authUser() {
  FB.Event.subscribe('auth.statusChange', handleStatusChange);
}

// Handle status changes
function handleStatusChange(session) {
    console.log('Got the user\'s session: ', session);
    
    if (session.authResponse) {
        document.body.className = 'connected';
        
        //Fetch user's id, name, and picture
        FB.api('/me', {
          fields: 'name, picture'
        },
        function(response) {
          if (!response.error) {
            user = response;
            
            console.log('Got the user\'s name and picture: ', response);
            
            //Update display of user name and picture
            if (document.getElementById('user-name')) {
              document.getElementById('user-name').innerHTML = user.name;
            }
            if (document.getElementById('user-picture')) {
              document.getElementById('user-picture').src = user.picture.data.url;
            }
          }
          
          clearAction();
        });
    }
    else  {
      document.body.className = 'not_connected';
    
      clearAction();
    }
}

//Check the current permissions to set the page elements.
//Pass back a flag to check for a speicif permission, to
//handle the cancel detection flow.
function checkUserPermissions(permissionToCheck) {
  var permissionsFQLQuery = permissions.join();
  FB.api({method: 'fql.query', query: 'SELECT ' + permissionsFQLQuery + ' FROM permissions WHERE uid = me()'}, 
      function(response) {
        if (document.body.className != 'not_connected') {
            for (var i = 0; i < permissions.length; i++) {
              var perm = permissions[i];
              var enabledElementName = document.getElementById('enabled_perm_' + perm);
              var disabledElementName = document.getElementById('disabled_perm_' + perm);
              if (response[0][perm] == 1) {
                enabledElementName.style.display = 'block';
                disabledElementName.style.display = 'none';
              } else {
                enabledElementName.style.display = 'none';
                disabledElementName.style.display = 'block';
              }
            }
            if (permissionToCheck) {
              if (response[0][permissionToCheck] == 1) {
                setAction("The '" + permissionToCheck + "' permission has been granted.", false);
                setTimeout('clearAction();', 2000);
              } else {
                setAction('You need to grant the ' + permissionToCheck + ' permission before using this functionality.', false);
                setTimeout('clearAction();', 2000);
              }
            }
            return (response[0][permissionToCheck] == 1);
        }
  });
}

//Prompt the user to login and ask for the 'email' permission
function promptLogin() {
  FB.login(null, {scope: 'email'});
}

//This will prompt the user to grant you acess to a given permission
function promptPermission(permission) {
  FB.login(function(response) {
    if (response.authResponse) {
      checkUserPermissions(permission)
    }
  }, {scope: permission});
}

//See https://developers.facebook.com/docs/reference/api/user/#permissions
function uninstallApp() {
  FB.api('/me/permissions', 'DELETE',
    function(response) {
      window.location.reload();
      // For may instead call logout to clear
      // cache data, ex: using in a PhoneGap app
      //logout();
  });
}

//See https://developers.facebook.com/docs/reference/javascript/FB.logout/
function logout() {
  FB.logout(function(response) {
    window.location.reload();
  });
}