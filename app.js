var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies');