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
module.exports.create = function (name,age,email,isMaker,tablename){
  let query = 'INSERT INTO ' + tablename + ' (Name,Age,Email,isMaker) ($1,$2,$3,$4)';
  client.query(query,[name,age,email,isMaker], function(err,res) {
    if (err) throw err;
    else{
      console.log('inserted ' + email + ' into database')
    }
  })
}
//create the maker and backer profiles
module.exports.createProfile = function (bio,photos,icon,email,tablename){
  let query = 'INSERT INTO ' + tablename + ' (Bio,Photos,Icon,Email) ($1,$2,$3,$4)';
  client.query(query,[bio,photos,icon,email], function(err,res) {
    if (err) throw err;
    else{
      console.log('inserted ' + email + ' into Maker/Backer')
    }
  })
}

