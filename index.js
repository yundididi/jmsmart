// const express = require('./config/express');
// const {logger} = require('./config/winston');

// const port = 5000;
// express().listen(port);
// logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);


const MobileDetect = require('mobile-detect');

// node_modules의 express 패키지를 가져온다.
var express = require('./config/express')
var expressForStatic = require("express");

//app이라는 변수에 express 함수의 변환 값을 저장한다.
var app = express()

//환경변수에서 port를 가져온다. 환경변수가 없을시 8000포트를 지정한다.
var port = app.listen(process.env.PORT || 8000);

app.listen(port, function() {
    console.log('start! express server');
})