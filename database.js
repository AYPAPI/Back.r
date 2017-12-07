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
module.exports.createUser = function (name,age,email,isMaker,shortbio,tablename,client){
  let check = 'SELECT email FROM ' + tablename + ' WHERE email = \'' + email + '\''
  client.query(check, function(err,res) {
    rows = res.rows
    if (rows.length > 0){
      console.log('user already in database')
      return
    }
    let query = 'INSERT INTO ' + tablename + ' (name,age,email,ismaker,shortbio) values ($1,$2,$3,$4,$5)';
    client.query(query,[name,age,email,isMaker,shortbio], function(err,res) {
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
  let check = 'SELECT email FROM ' + tablename + ' WHERE email = \'' + email + '\''
  client.query(check, function(err,res) {
    rows = res.rows
    if (rows.length > 0){
      console.log('user already in database')
      return
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
	let query = 'SELECT * FROM ' + tablename + ' WHERE email = \'' + email + '\''
  client.query(query, function(err,res) {
    if (err) throw err;
    rows = res.rows;
    if (rows.length === 0){
      console.log('user does not exist')
      return
    }
    var obj = {
      "name":rows[0].name,
		  "age":rows[0].age,
			"email":rows[0].email,
			"ismaker":rows[0].ismaker,
      "shortbio":rows[0].shortbio
    }
    callback(obj);
	})
}
//update isMaker in user profile
module.exports.updateisMaker = function(email,client,isMaker,callback) {
  let query = 'UPDATE users SET isMaker = $1 WHERE EMAIL = $2'
  client.query(query, [isMaker, email], function(err,res) {
    if (err) throw err;
    console.log('Updated isMaker')
    callback("Updated isMaker");
  })
}
//update user profile
module.exports.updateUser = function(email,shortbio,client,callback){
  let query = 'UPDATE users SET shortbio = $1 WHERE email = $2'
  client.query(query, [shortbio,email], function(err,res) {
    if (err) throw err;
    console.log('Updated user profile')
    callback("Updated user profile");
  })
}
//update maker and backer profile
module.exports.updateProfile = function(email,longbio,photos,icons,client,tablename,callback){
  let query = 'UPDATE ' + tablename + ' SET longbio = $1, photos = $2, icons = $3 WHERE email = $4'
  client.query(query, [longbio,photos,icons,email], function(err,res) {
    if (err) throw err;
    console.log('Updated ' + tablename + ' profile');
    callback("Updated " + tablename + ' profile');
  })
}

//get maker/backer profile
module.exports.readUserProfile = function (email,tablename,client, callback) {
  let query = 'SELECT * FROM ' + tablename + ' WHERE email = \'' + email + '\''
    client.query(query, function(err,res) {
      if (err) throw err;
      rows = res.rows
      if (rows.length === 0){
        console.log('user does not exist')
        return
      }
			var obj = {
				"longbio":rows[0].longbio,
        "email":rows[0].email,
        "photos":rows[0].photos,
        "icons":rows[0].icons,
        "swipedright":rows[0].swipedright,
        "matches":rows[0].matches,
        "swipedon":rows[0].swipedon
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
  var matches;
  var swipedEmailMatches;
  var query = 'SELECT * FROM ' + tablename + ' WHERE email = \'' + email + '\''
    client.query(query, function(err, res) {
      if (err) throw err;
      rows = res.rows
      if (rows.length === 0){
        console.log('user does not exist')
        return
      }
        swipedright = rows[0].swipedright;
        swipedon = rows[0].swipedon;
        matches = rows[0].matches;
        if(swipedRight === true) {
          if (!swipedright.includes(swipedEmail)){
            swipedright.push(swipedEmail)
          }
        }
        if (!swipedon.includes(swipedEmail)){
          swipedon.push(swipedEmail)
        }
        let query2 = 'UPDATE ' + tablename + ' SET swipedright = $1, swipedon = $2 WHERE email = $3'
        client.query(query2,[swipedright, swipedon, email], function(err, res) {
          if (err) throw err;
          callback("Updated swipe")
          query = 'SELECT * FROM ' + tablename + ' WHERE email = \'' + swipedEmail + '\''
          client.query(query,function(err, res){
            rows = res.rows
            if (rows.length === 0){
              console.log('swipedEmail does not exist')
              return
            }
            swipedright = rows[0].swipedright
            swipedEmailMatches = rows[0].matches
            if (swipedright.includes(email)){
              if (!matches.includes(swipedEmail)){
                matches.push(swipedEmail)
              }
              if (!swipedEmailMatches.includes(email)){
                swipedEmailMatches.push(email)
              }
              client.query('UPDATE ' + tablename + ' SET matches = $1 WHERE email = $2',[matches,email],function(err,res){
                if (err) throw err;
              });
              client.query('UPDATE ' + tablename + ' SET matches = $1 WHERE email = $2',[swipedEmailMatches,swipedEmail],function(err,res){
                if (err) throw err;
              });
            }
          })
        })
  })
}
module.exports.createSettings = function(isVisible, blockedUsers, email, client) {
  var tablename = 'settings'

  let query = 'INSERT INTO ' + tablename + ' (email,isvisible, blockedusers) values ($1,$2,$3)';
    console.log(query)
    console.log("called1")
    client.query(query,[email,isVisible, blockedUsers], function(err,res) {
        if (err) throw err;
        else{
          console.log('created settings for user' + email)
        }
      })
}

module.exports.updateSettings = function(isVisible, blockedUsers, email, client, callback) {
  var tablename = 'settings'
  let query = 'UPDATE ' + tablename + ' SET isvisible = $1, blockedusers = $2 WHERE email = $3'
    client.query(query, [isVisible, blockedUsers, email], function(err,res) {
      if (err) throw err;
      callback("Updated settings");
    })
}

module.exports.readSettings = function (client, email, callback) {
    var tablename = 'settings'
  let query = 'SELECT * FROM ' + tablename + ' WHERE email = \'' + email + '\''
  client.query(query, function(err,res) {
    if (err) throw err;
    rows = res.rows;
<<<<<<< HEAD
		for (var i = 0; i < rows.length; i++){
			if (rows[i].email === email){
				var row = rows[i]
				var obj = {
          "isVisible" : row.isvisible,
          "blockedUsers":row.blockedusers,
				}
			}
		}
=======
    if (rows.length === 0){
      console.log('user does not exist')
      return
    }
    var obj = {
      "latitude":rows[0].latitude,
      "longitude":rows[0].longitude,
      "isVisible" : rows[0].isvisible,
      "blockedUsers":rows[0].blockedusers,
    }
>>>>>>> 3b2c78c79763f79b3270ca284fac5fe59e90b3ba
    callback(obj);
	})
}
