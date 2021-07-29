import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Conversation from './js/self-simulator.js';


$('.container').one("click", function() {
  $('#text1').show();
});

$('#text1').on("click", function() {
  $('#text1').hide();
  $('#text2').show();
})

$('#text2').on("click", function() {
  $('#text2').hide();
  $('#text3').show();
})

$('#text3').on("click", function() {
  $('#text3').hide();
  $('#yes').show();
})


$('#yes').on( "click", function() {
  $('#yes').show();

} );