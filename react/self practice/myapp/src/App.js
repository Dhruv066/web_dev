
import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    
      <div className="App">
        <Navbar title="TextUtil" />
        <div className="container">
          <TextForm heading="Enter your text here" />
        </div>
      </div>
    
  );
}

export default App;
