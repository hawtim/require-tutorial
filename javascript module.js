// tradition style

function m1() {
   console.log('module1')
}

function m2() {
	console.log('module2')
}

// Object style

var module1 = new Object({
	_count: 0,
	m1:function () {
		console.log('module1')
	},
	m2:function () {
		console.log('module2')
	}
})

// IIFE style


var module1 = (function() {
	var _count = 0;
	var m1 = function () {
		console.log('IIFE1')
	}
	var m2 = function () {
		console.log('IIFE1')
	}
	return {
		m1: m1,
		m2: m2
	}
})();


// augmentation style

var module1 = (function (mod) {
	mod.m3 = function () {
		console.log('augmentation')
	};
	return mod;
})(module1);


// loose augmentation   the IIFE function arguments  can be null object

var module1 = ( function (mod) {
	// ...
	return mod;
})(window.module1 || {})


// the feature of module is standalone   
// inside the module is better not to directly reaction with other part


var module1 = (function ($, YAHOO) {
	// ...
})(jQuery, YAHOO)


// AMD standard  
// now there is two javascript module standard CommonJS and AMD


var math = require ('math')
// user should wait the process of loading math module 
// and then to execute the math.add(2,3)
math.add(2, 3)

// so there is an Asynchronous Module Definition(AMD) standard
// any sentence require the module is defined in a callback function and after the module is loading there will be ran

require([module], callback);
 //  it is the same as follow

require(['math'], function (math) {
	math.add(2, 3)
})

// <script src="./require.js" defer async="true"></script>
// async property means that the file need asynchronous load


require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC) {
	// ...
})

// example
require(['jquery', 'underscore', 'backbone'],function ($, _, Backbone) {
	// some code here
})


// require.config method can define the module loading behavior 
// require config declare at the head of main.js, and the arguments is an Object
require.config({
	baseUrl: 'js/lib',
	paths: {
		'jquery': 'jquery.min',
		'underscore': 'underscore.min',
		'backbone': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2'
	}
});

// AMD module
// first define a math module
define(function (){
	var add = function(x, y) {
		return x + y;
	}
	return {
		add: add
	}
})

// then require 
require(['math'], function (math) {
	alert(math.add(1, 1))
})

// if this module is based on other module then the first argument in the define function must be a array
// to show the dependencies of the module
// while the require function loading the module it will first loading myLib.js


define(['myLib'], function(myLib) {
	function foo() {
		myLib.doSomething();
	}
	return {
		foo: foo
	}
}) 

require.config({
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			export: 'Backbone'
		},
		'jquery.scroll': {
			deps: ['jquery'],
			exports: 'jQuery.fn.scroll'
		}
	}
})

// exports means the output variaty to show the name when the module is required
// deps array means the dependencies of the module


// requirejs also provide some plugins to release some feature

// domready can run the callback function after the DOM is completely loaded

require(['domready!'], function (doc) {
	// called once the DOM is ready
});


// 'text' and 'image' plugins，allow require.js to load text and image
　　define([
　　　　'text!review.txt',
　　　　'image!cat.jpg'
　　　　],

　　　　function(review,cat){
　　　　　　console.log(review);
　　　　　　document.body.appendChild(cat);
　　　　}
　　);
// also there is 'json' and 'mdown',to loading json file and markdown file





