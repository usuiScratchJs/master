(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var tabSwitch = function tabSwitch() {
    var $trigger = document.querySelectorAll('.button');
    var $target = document.querySelectorAll('.cont');
    var $active;
    for (var num = 0, length = $trigger.length; num < length; num++) {
        $target[num].classList.add('none');
        $target[0].classList.remove('none');
        $target[0].classList.add('active');
        (function (index) {
            $trigger[num].addEventListener("click", function () {
                $active = document.querySelector('.active');
                $active.classList.add('none');
                $active.classList.remove('active');
                $target[index].classList.add('active');
                $target[index].classList.remove('none');
            });
        })(num);
    }
};

tabSwitch();

},{}]},{},[1]);
