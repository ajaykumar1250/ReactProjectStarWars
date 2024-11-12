import './App.css';
import React from 'react';
// import Item from './MyItem';

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      home: null,
      image: null
    }
  }
  getnewcharacter() {
    const randomCharacter = Math.round(Math.random() * 88)
    const url="https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/" 
    fetch(url+randomCharacter+'.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          home: data.homeworld,
          image: data.image,
          loadedCharacter: true,
        })
      })
  }
  
  render() {
     return (
    <div>
      {
      this.state.loadedCharacter &&
      <div>
      <h1>{this.state.name}</h1>
      <p>{this.state.height} cm</p>
      <p>{this.state.home}</p>
      <img src={this.state.image} alt="abc.jpg"></img>
      </div>
  }
  <button className='btn' type="button"
  onClick={() => this.getnewcharacter()}>Get new Character</button>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StarWars />
      </header>
    </div>
  );
}

export default App;
