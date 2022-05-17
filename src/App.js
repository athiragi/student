import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstudent from './component/Addstudent';
import Search from './component/Search';


function App() {
  return (
    <div>
      <Addstudent />
      <Search />
    </div>
  );
}

export default App;
