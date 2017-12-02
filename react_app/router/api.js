import React from 'react';
const url = "https://backr.herokuapp.com/"

exports.createUser = (name, email) => {
  console.log("hi");
  fetch( url + 'user', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        name: name,
        age: 343829,
        email: email,
        isMaker: false,
        shortBio: "",
        //THIS DOESNT WORK YET
        profiles: {
          maker: {
            makerLongBio: "",
            makerPhotos: [],
            makerIcon: [false, false, false, false, false],
            makerSwipedRight: [],
            makerMatches: [],
            makerSwipedOn: []
          },

          backer: {
            backerLongBio: "",
            backerPhotos: [],
            backerIcon: [false, false, false, false, false],
            backerSwipedRight: [],
            backerMatchers: [],
            backerSwipedOn: []
          }
        },

      })
    }).then(function(response) {
      console.log("inside api");
      return response.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

exports.getUser = (email) => {
  console.log("GET user request");
  //Sarah

}

exports.getMaker = (email) => {
  //Eric
}

exports.getBacker = (email) => {
  //Me
}

exports.getSettings = (email) => {
  //eric
}

exports.postSwipe = (email, swipedEmail, isMaker, swipedRight) => {
  //Eric
}

//ONLY CALL ONCE on initial signup of user. All other edit settings call updateSettings
exports.createSettings = () => {
  //eric
}

//TODO
//Function called in EditScreen.
exports.updateProfile = () => {
  //Sarah

  //Fetch user first
  /* Order for icon booleans:
  money
  materials
  knowledge
  manpower
  collaborators
  */
}

//TODO
exports.updateSettings = (email) => {
 //Eric
}


exports.getSettings = (email) => {
  //Sarah
}
