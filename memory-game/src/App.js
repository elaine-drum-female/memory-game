import React , {Component } from 'react';
import NavTabs from "./components/NavTabs";
import Hero from "./components/Hero/index";
import RandomCards from "./components/RandomCards/index";
import randomcards from "./randomcards.json"
import './App.css';

class App extends Component {
  state = {
    randomcards,
    score:0,
    topScore:0,
    displayMessage: "Click on an image to begin!",
    correctGuess: true
  };

//when game starts you have a random selection of images that display on page

//when image is clicked
  //HOW Do you know what image? SAVE in variable
  //HOW do you know which image was clicked? FILTER through the ID
  //WAS it set to click in the first place? true or false
  
    //if it was NOT set,
      //State that the first index of that variable was NOT clicked
      //Now set the variable index to true
      //run the function for correctGuess
      
     //Make images go random
       //create a function that will return random images
    
     //CorrectGuess Handler
     //return setState correctGuess:
  
    //NOW that the image is correct 
      //check if the score increased by 1 more than the topScore
       //set newState for topScore to be topScore + 1
      
       //ELSE 
       //update the state of:
       //score: this.state.score + 1,
       //update the displayMessage to "you guessed correctly!"
     
     //IncorrectGuess Handler

     //setState of displayMessage to say: "Incorrect!"
     //update correctGuess: false

     //RESET GAME passing in the id

     //again create variable
     //make a for loop to loop over all of the images length
     //then have all those image iterations clicked be set to false

     //set its score back to 0
  

render() {
  return (
    <div className="App">
    <NavTabs 
    score={this.state.score}
    topScore={this.state.topScore}
    displayMessage={this.state.displayMessage}
    />
    <Hero backgroundImage="https://www.toptal.com/designers/subtlepatterns/patterns/interlaced.png"></Hero>
    {this.state.randomcards.map(random => (
    <RandomCards
        image={random.image}
        key={random.id}
        name={random.name}
        // Click handler 
      />
      
      ))}
    </div>
  );
}
}
  


export default App;
