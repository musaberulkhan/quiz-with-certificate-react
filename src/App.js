import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Quizzes from './Components/Quizzes/Quizzes';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Quizzes></Quizzes>
    </div>
  );
}

export default App;
