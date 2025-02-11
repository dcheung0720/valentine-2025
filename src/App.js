import './App.css';
import Selection from './components/Selection';
import { useState } from 'react';
import Entrance from './components/Entrance';
import Exit from './components/Exist';

function App() {

  const foodOptions = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos", "Steak", "IceCream", "Booba", "IndianFood", "Korean"];
  const dateOptions = ['Movie', 'LoL', 'BoardGames', 'Fun'];

  const [carousel, setCarousel] = useState(0);

  return (
    <div className="App">
        {
          carousel === 0? 
          <Entrance setCarousel={setCarousel}></Entrance>:
          carousel === 1?
          <Selection title = {'❤️Awh I Knew You Would Say Yes!! Pick Food Please❤️'} options = {foodOptions} setCarousel={setCarousel}></Selection>:
          carousel === 2?
          <Selection title = {'❤️ Pick Whatever You Want To Do 😉'} options = {dateOptions} setCarousel = {setCarousel}></Selection>:
          <Exit></Exit>
        }
    </div>
  );
}

export default App;
