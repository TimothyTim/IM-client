var jquery = require('jquery');
var unique = require('uniq');
var React = require('react');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

React.render(
	<h1>Hello, world!</h1>,
	document.getElementById('example')
);

(function($){

	$('button').click(function(){
	    $('span').css({"color":"red"});
	});

})(jquery);

