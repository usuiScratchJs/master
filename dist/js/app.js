(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var i = document.querySelectorAll('.button');
var r = document.querySelectorAll('.tabInner');
var o = document.querySelectorAll('.cont');
var oNum = o.length;
//for(var num = 0, length = i.length; num < length; num++){
//    (function(art){
//        i[num].addEventListener("click",function(){
//            r.classList.add('none');
//            //document.querySelectorAll('.tabInner > p')[art].classList.add('block');
//        }, false);
//    })(num);
//}

for (var num = 0, length = i.length; num < length; num++) {
    o[num].classList.add('none');
    (function (art) {
        i[num].addEventListener("click", function () {
            //r.classList.add('none');
            o[art].classList.remove('none');
            console.log(oNum);
        }, false);
    })(num);
}

},{}]},{},[1]);
