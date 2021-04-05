var canvas;
var gameState = 0; 
var database;
var contestantCount,quiz,question,contestant
var allPlayers;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();


}


function draw(){
  background("pink");

  
}


