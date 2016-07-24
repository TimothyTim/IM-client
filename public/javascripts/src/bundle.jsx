var jquery = require('jquery');
var unique = require('uniq');
var React = require('react');
var socket = require('socket.io-client')();

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

// jQuery
(function($){

    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });

    // React
    React.render(
        <strong>First message!</strong>,
            document.getElementById('example')
        );
})(jquery);
