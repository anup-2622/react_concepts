
import './App.css';
import { Parent } from './components/child_parent_comp.jsx/Parent';
import Inlinecss from './udmey/Inlinecss';
import name, {profession, degrees} from "./udmey/ImportExport";
function App() {
  return (
  // <Parent/>
  <>
  
  <Inlinecss/>
  <div className="">hello {name} {profession} </div>
  </>

  );
}

export default App;
