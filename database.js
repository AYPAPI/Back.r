// This file contains databse functions.
// All functions will be in the form of: module.exports.[function_name]
// so they can be accessed from outside the file.

// Connect to the remote database
module.exports.connect = function() {
  const pg = require('pg');
  const express = require('express');
  var app = express();
  var username = 'backr@backr'
  var password = 'cse110$$$'
  var tablename = 'groupmembers'

  const config = {
      host: 'backr.postgres.database.azure.com',
      user: username,
      password: password,
      database: 'postgres',
      port: 5432,
      ssl: true
  };
  const client = new pg.Client(config);

  client.connect(err => {
      if (err) throw err;
      else{
        console.log('connected to database');
      }
  });
  return client;
}

// Create a user in the database
module.exports.addUser = function (username,client,tablename){
  let query = 'INSERT INTO ' + tablename + ' (Name) values ($1)';
  client.query(query,[username], function(err,res) {
    if (err) throw err;
    else{
      console.log('inserted ' + username + ' into database')
    }
  })
}

//create user profile
module.exports.createUser = function (name,age,email,isMaker,shortbio,tablename,location,client){
  let check = 'SELECT email FROM ' + tablename
  client.query(check, function(err,res) {
    rows = res.rows
    for (var i = 0; i < rows.length; i++){
      if (rows[i]['email'] === email){
        console.log('user already in database')
        return
      }
    }
    let query = 'INSERT INTO ' + tablename + ' (name,age,email,ismaker,shortbio,location) values ($1,$2,$3,$4,$5,$6)';
    client.query(query,[name,age,email,isMaker,shortbio,location], function(err,res) {
      if (err) throw err;
      else{
        console.log('inserted ' + email + ' into database')
      }
    })
  })
}

//create the maker and backer profiles
module.exports.createUserProfile = function (longbio,photos,icons,email,tablename, 
                                             swipedRight,matches,swipedOn,client){
  let check = 'SELECT email FROM ' + tablename
  client.query(check, function(err,res) {
    rows = res.rows
    for (var i = 0; i < rows.length; i++){
      if (rows[i]['email'] === email){
        console.log('user already in database')
        return
      }
    }
    let query = 'INSERT INTO ' + tablename + ' (longbio,photos,icons,email,swipedright,matches,swipedon) values ($1,$2,$3,$4,$5,$6,$7)';
    client.query(query,[longbio,photos,icons,email,swipedRight,matches,swipedOn], function(err,res) {
      if (err) throw err;
      else{
        console.log('inserted ' + email + ' into Maker/Backer')
      }
    })
  })
}

//get user profile
module.exports.readUser = function (email,tablename,client, callback) {
	let query = 'SELECT * FROM ' + tablename
  client.query(query, function(err,res) {
    if (err) throw err;
    rows = res.rows;
		for (var i = 0; i < rows.length; i++){
			if (rows[i].email === email){
				var row = rows[i]
				var obj = {
          "name":row.name,
					"age":row.age,
					"email":row.email,
					"ismaker":row.ismaker,
          "shortbio":row.shortbio
				}
			}
		}
    callback(obj);
	})
}

//get maker/backer profile
module.exports.readUserProfile = function (email,tablename,client, callback) {
  let query = 'SELECT * FROM ' + tablename
    client.query(query, function(err,res) {
      if (err) throw err;
      rows = res.rows
      for (var i = 0; i < rows.length; i++){
        if (rows[i].email === email){
          var row = rows[i]
          var obj = { 
            "longbio":row.longbio,
            "email":row.email,
            "photos":row.photos,
            "icons":row.icons,
            "swipedright":rows.swipedright,
            "matches":rows.matches,
            "swipedon":rows.swipedon
          }
        }
      }
      callback(obj);
    })
}

//db.addSwipedOn(email, isMaker, swipedEmail);
module.exports.addSwipe = function (email, isMaker, swipedEmail, swipedRight, client, callback) {
  var tablename;
  if (isMaker == true) {
    tablename = 'maker';
  } else {
    tablename = 'backer';
  }
  var swipedright;
  var swipedon;
  var query = 'SELECT * FROM ' + tablename
    client.query(query, function(err, res) {
      if (err) throw err;
      rows = res.rows
    for(var i = 0; i <rows.length; i++) {
      if(rows[i].email === email) {
        console.log("found")
        var row = rows[i]
        swipedright = row.swipedright;
        swipedon = row.swipedon;
        if(swipedRight == true) {
          swipedright.push(swipedEmail)
        }
        swipedon.push(swipedEmail)
        let query2 = 'UPDATE ' + tablename + ' SET swipedright = $1, swipedon = $2 WHERE email = $3'
        client.query(query2,[swipedright, swipedon, email], function(err, res) {
          if (err) throw err;
          callback("Updated swipe")
        })
        break;
      }
    }
  })

}
module.exports.createSettings = function(location, isVisible, blockedUsers, email, client) {
  var tablename = 'settings'

  let query = 'INSERT INTO ' + tablename + ' (email, latitude, longitude, isvisible, blockedusers) values ($1,$2,$3,$4, $5)';
    console.log(query)
    console.log("called1")
    client.query(query,[email, location.lat, location.long, isVisible, blockedUsers], function(err,res) {
        if (err) throw err;
        else{
          console.log('created settings for user' + email)
        }
      })
}

module.exports.updateSettings = function(location, isVisible, blockedUsers, email, client, callback) {
  var tablename = 'settings'
  let query = 'UPDATE ' + tablename + ' SET latitude = $1, longitude = $2, isvisible = $3, blockedusers = $4 WHERE email = $5'
    client.query(query, [location.lat, location.long, isVisible, blockedUsers, email], function(err,res) {
      if (err) throw err;
      callback("Updated settings");
    })
}

module.exports.readSettings = function (client, email, callback) {
    var tablename = 'settings'
	let query = 'SELECT * FROM ' + tablename
  client.query(query, function(err,res) {
    if (err) throw err;
    rows = res.rows;
		for (var i = 0; i < rows.length; i++){
			if (rows[i].email === email){
				var row = rows[i]
				var obj = {
          "latitude":row.latitude,
          "longitude":row.longitude,
          "isVisible" : row.isvisible,
          "blockedUsers":row.blockedusers,
				}
			}
		}
    callback(obj);
	})
}
