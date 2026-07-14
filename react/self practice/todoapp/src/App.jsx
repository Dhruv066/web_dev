import "./App.css";
import Todoitem from "./components/Todoitem";
import Todoname from "./components/Todoname";
function App() {
  return (
    <>
    
    <h1>To-Do App</h1>
    <Todoname></Todoname>
    <Todoitem name="dance" date="01/02/2026"/>
    <Todoitem/>
    
    </>
  )
    
      
}

export default App;
