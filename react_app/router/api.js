import React from 'react';
const url = "https://backr.herokuapp.com/"

//Called when user signing up. Creates default values for user and adds user to
//Database.
exports.createUser = async (name, email) => {

  var body = {
    name: name,
    age: 343829,
    email: email,
    isMaker: false,
    shortBio: "",
    profiles: {
      maker: {
        longBio: "",
        photos: [],
        icons: [false, false, false, false, false],
        swipedright: [],
        matches: [],
        swipedon: []
      },
      backer: {
        longBio: "",
        photos: [],
        icons: [false, false, false, false, false],
        swipedright: [],
        matches: [],
        swipedon: []
      }
    },
  }

  await fetch( url + 'user', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(body)
    }).then(function(response) {
      console.log("inside api");
      return response;
    })
    .catch((error) => {
        console.error(error);
    });
}


//Retrieves user via email.
exports.getUser = async (email) => {
  console.log("GET user request");
  //Sarah
  var urlParams = "user?email=" + email;
  const response = await fetch(url + urlParams, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
      });
  const json = await response.json();
  console.log(json);     // <-- (5) [Object, Object, Object, Object, Object]
  return json;
}

//Get the maker profile of a specified user.
exports.getMaker = async (email) => {
  console.log("GET user request");
  var urlParams = "user/maker?email=" + email;
    const response = await fetch(url + urlParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    const json = await response.json();
    console.log(json);     // <-- (5) [Object, Object, Object, Object, Object]
    return json;
}

//Get the backer profile of a specified user.
exports.getBacker = async (email) => {
  console.log("GET user request");
  var urlParams = "user/backer?email=" + email;

  const response = await fetch(url + urlParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
  const json = await response.json();
  console.log(json);     // <-- (5) [Object, Object, Object, Object, Object]
  return json;
}

//Retrieve a user's settings. (really only their blockedUsers lol)
exports.getSettings = async (email) => {
  var urlParams = "user/settings?email=" + email;

  const response = await fetch(url + urlParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
  const json = await response.json();
  console.log("113" + JSON.stringify(json));     // <-- (5) [Object, Object, Object, Object, Object]
  return json;
}

//Add to the swipe array for swiped right and swiped on.
exports.postSwipe = (email, swipedEmail, isMaker, swipedRight) => {
  //Eric
  console.log("posting swipe");
  fetch( url + 'user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      swipedEmail: swipedEmail,
      isMaker: false,
      swipedRight: swipedRight
      })
  }).then(function(response) {
    console.log("inside postSwipe api util callback");
    return response.json();
  })
    .catch((error) => {
      console.error(error);
    });
}

//ONLY CALL ONCE on initial signup of user. All other edit settings call updateSettings
exports.createSettings = (email) => {
  //eric
  console.log("post create settings");
  fetch( url + 'user/settings/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      blockedUsers: [],
      isVisible: false
    })
  }).then(function(response) {
    console.log("inside create settings api util callback");
    return response;
  })
    .catch((error) => {
      console.error(error);
    });
}

//Updates the user's isMaker in our database.
exports.updateIsMaker = (newIsMaker, email) => {
  fetch( url + 'user/isMaker', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      isMaker: newIsMaker
    })
  }).then(function(response) {
    return response.json();
  })
    .catch((error) => {
      console.error(error);
    });
}

//Function called in EditScreen. Update's user profile - really only shortbio.
exports.updateProfile = (email, shortbio) => {

  console.log("post create settings");
  fetch( url + 'user', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      shortbio: shortbio
    })
  }).then(function(response) {
    return response.json();
  })
    .catch((error) => {
      console.error(error);
  });
}

//Updates user's maker profile. Updates longbio, photos, and icons.
exports.updateMakerProfile = (longbio, photos, icons, email) => {
  console.log("post update maker profile");
  console.log("inside updateBackerProfile " + photos)

  fetch( url + 'user/maker', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      longBio: longbio,
      email: email,
      photos: photos,
      icons: icons
    })
  }).then(function(response) {
    console.log("inside UPDATE MAKER PROFILE api util callback");
    return response;
  })
    .catch((error) => {
      console.error(error);
    });
}

//Updates user's backer profile. Updates longbio, photos, and icons.
exports.updateBackerProfile =  (longbio, photos, icons, email) => {
  console.log("post update maker profile");
  fetch( url + 'user/backer', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      longBio: longbio,
      email: email,
      photos: photos,
      icons: icons
    })
  }).then(function(response) {
    console.log("inside UPDATE BACKER PROFILE api util callback");
    return response;
  })
    .catch((error) => {
      console.error(error);
    });
}

//TODO

exports.updateSettings = (email, blockedUsers, isVisible) => {
 //Eric
  if(blockedUsers == null) {
    blockedUsers = [];
  }
  console.log("post update settings");
 fetch( url + 'user/settings', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      blockedUsers: blockedUsers,
      isVisible: isVisible
    })
  }).then(function(response) {
    console.log("inside update settings api util callback");
    return response;
  })
    .catch((error) => {
      console.error(error);
    });
}
