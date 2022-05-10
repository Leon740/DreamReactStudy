import './App.css';
import DreamCar from './DreamCar';

function App() {
  return (
    <div className="App">
      <h1>Going good</h1>
      <DreamCar car={'Lancer Evo'} />
      {/* <DreamCar car={['']} /> */}
    </div>
  );
}

export default App;
