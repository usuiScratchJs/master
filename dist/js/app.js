(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*ここからjs 下記は例なので削除*/

'use strict';

console.log('aaaa');

},{}]},{},[1]);

$(function() {
    $(".tabBlock li").click(function() {
        var num = $(".tabBlock li").index(this);
        $(".tabInner p").addClass('hide');
        $(".tabInner p").eq(num).removeClass('hide');
        $(".tabBlock li").removeClass('here');
        $(this).addClass('here')
    });
})

$(function() {
	var hoge = (".hoge"),
    var index = 0;

    $(.hoge).click(function(){
        index = index+10
    })
	console.log(index);
})



