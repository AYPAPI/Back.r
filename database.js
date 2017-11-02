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
module.exports.create = function (name,age,email,isMaker,tablename, client){
  let query = 'INSERT INTO ' + tablename + ' (name,age,email,ismaker) values ($1,$2,$3,$4)';
  client.query(query,[name,age,email,isMaker], function(err,res) {
    if (err) throw err;
    else{
      console.log('inserted ' + email + ' into database')
    }
  })
}
//create the maker and backer profiles
module.exports.createProfile = function (bio,photos,icons,email,tablename, client){
  let query = 'INSERT INTO ' + tablename + ' (bio,photos,icons,email) values ($1,$2,$3,$4)';
  client.query(query,[bio,photos,icons,email], function(err,res) {
    if (err) throw err;
    else{
      console.log('inserted ' + email + ' into Maker/Backer')
    }
  })
}
//get user profile
module.exports.getUser = function (email,tablename,client, callback) {
	let query = 'SELECT * FROM ' + tablename 
  client.query(query, function(err,res) {
    if (err) throw err;
    rows = res.rows;
		for (var i = 0; i < rows.length; i++){
			if (rows[i].email === email){
				var row = rows[i]
				var obj = { "name":row.name,
										"age":row.age,
										"email":row.email,
										"ismaker":row.ismaker
									}

				
			}
		}
        callback(obj);
	})	
}
//get maker/backer profile
module.exports.getProfile = function (email,tablename,client) {
  let query = 'SELECT * FROM ' + tablename
    client.query(query, function(err,res) {
      if (err) throw err;
      rows = res.rows
      for (var i = 0; i < rows.length; i++){
        if (rows[i].email === email){
          var row = rows[i]
          var obj = { "bio":row.bio,
                      "email":row.email,
                      "photos":row.photos,
                      "icons":row.icons
                    }
          return obj
        }
      }
    })	
}



