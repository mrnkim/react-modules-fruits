import logo from './logo.svg';
import './App.css';
import { Choice, Remove } from './helpers';
import Foods from './foods'


function App() {
  let fruit = Choice(Foods);
  return (
    <div>
      <p>I'd like one {fruit}, please.</p>
      <p>Here you go: {fruit}</p>
      <p>Delicious! May I have another?</p>
      <p hidden>{Remove(Foods, fruit)}</p>
      <p>I'm sorry, we're all out. We have {Foods.length} left.</p>
    </div>);
}

export default App;
