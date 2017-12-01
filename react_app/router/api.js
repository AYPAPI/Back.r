import React from 'react';

exports.createUser = (name, email) => {
  const url = "https://backr.herokuapp.com/"
  const getUser = function(email) {
    return fetch( url + 'user', {
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
        location: null,
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
      return response.json();
    })
    .catch((error) => {
        console.error(error);
    });
  }
}

exports.getUser = (email) => {

}

exports.getMaker(email) {

}

exports.getBacker = (email) => {

}

exports.getSettings = (email) => {

}

exports.postSwipe = (email, swipedEmail, isMaker, swipedRight) => {

}

//ONLY CALL ONCE on initial signup of user. All other edit settings call updateSettings
exports.createSettings = () => {

}

//TODO
//Function called in EditScreen.
exports.updateProfile = () => {


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
export const updateSettings(email) {

}


export const getSettings(email) {

}
