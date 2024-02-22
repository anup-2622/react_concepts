
import './App.css';
import { Parent } from './components/child_parent_comp.jsx/Parent';
import Inlinecss from './udmey/Inlinecss';
import name, {profession, degrees} from "./udmey/ImportExport";
import Propsconcept from './udmey/Propsconcept';
import Emoji from './udmey/emoji/Emoji';
import Login from './Login/Login';


const isAuthenticated = false;

function App() {
  return (
  // <Parent/>
  <div className='flex items-center justify-center w-screen h-screen bg-blue-200 '>
  
  <Login isRegistered={isAuthenticated} />
  {/* <Inlinecss/>
  <div className="border">hello {name} {profession} </div>
  <Propsconcept/>
  <Emoji/> */}
  </div>

  );
}

export default App;
