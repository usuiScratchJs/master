(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var tabSwitch = function tabSwitch(active_num) {
    var $trigger = document.querySelectorAll('.button'),
        $target = document.querySelectorAll('.cont'),
        $active,
        length = $trigger.length;
    for (var num = 0; num < length; num++) {
        $target[num].classList.add('none');
        $target[active_num].classList.remove('none');
        $target[active_num].classList.add('active');
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

//var tabswitch = function(active_num){
//    var $trigger = $('[data-tab-trigger]'),
//        $target = $('[data-tab-target]'),
//        $active;
//    $target.addClass('none');
//    $target.eq(active_num).addClass('active').removeClass('none');
//    $trigger.on('click',function(){
//        var num = $(this).index(),
//            $active = $('.active');
//        $active.addClass('none').removeClass('active');
//        $target.eq(num).removeClass('none').addClass('active');
//    })
//};

var hoge = function hoge() {
    var index = 0,
        $trigger = $('[data-hoge-trigger=hoge]');
    $trigger.on('click', function () {
        index = index + 10;
        console.log(index);
    });
};

tabSwitch(0);
$(function () {
    hoge();
    //tabswitch(0);
});

},{}]},{},[1]);
