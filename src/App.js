
import './App.css';
import { Parent } from './components/child_parent_comp.jsx/Parent';
import Inlinecss from './udmey/Inlinecss';
import name, {profession, degrees} from "./udmey/ImportExport";
import Propsconcept from './udmey/Propsconcept';
function App() {
  return (
  // <Parent/>
  <div className=' w-screen bg-black '>
  
  <Inlinecss/>
  <div className="border">hello {name} {profession} </div>
  <Propsconcept/>
  </div>

  );
}

export default App;
