"use strict"

//const usuarios = require('../models/js/login');
//const vConsts = require('../consts');
//const cReadPDF = require('../models/js/readPDF');
//const { async } = require('validate.js');
//const { json } = require('express');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('index')
  }); 

  app.get('/sobre', (req, res) => {
    res.render('sobre')
  }); 

  app.get('/politica_privacidade', (req, res) => {
    res.render('politica_privacidade')
  }); 
  

  /*
  app.get('/posts', (req, res) => {
    res.render('posts_views')   
  }); 
  */

  

  app.get('/post_1', (req, res) => {
    res.render('posts_estaticos/posts_1/posts_views')
   }); 

   app.get('/post_2', (req, res) => {
    res.render('posts_estaticos/posts_2/posts_views')
   }); 

   
   app.get('/post_3', (req, res) => {
    res.render('posts_estaticos/posts_3/posts_views')
   }); 


  app.get('/post_4', (req, res) => {
    res.render('posts_estaticos/posts_4/posts_views') 
   }); 

   
   app.get('/post_5', (req, res) => {
    res.render('posts_estaticos/posts_5/posts_views')
   }); 

   app.get('/post_6', (req, res) => {
    res.render('posts_estaticos/posts_6/posts_views')
   }); 

   app.get('/post_7', (req, res) => {
    res.render('posts_estaticos/posts_7/posts_views')
   }); 

   app.get('/post_8', (req, res) => {
    res.render('posts_estaticos/posts_8/posts_views')
   }); 

   app.get('/post_9', (req, res) => {
    res.render('posts_estaticos/posts_9/posts_views')
   }); 

   app.get('/post_10', (req, res) => {
    res.render('posts_estaticos/posts_10/posts_views')
   }); 

};


