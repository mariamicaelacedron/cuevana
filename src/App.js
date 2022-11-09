import './App.css';
import HomePage from "./views/Home/HomePage";
import Footer from "./views/footer/Footer";
import  Navbar  from "./components/navbar/Navbar";
import CardComponent from "./components/Card/CardComponent"
import Users from "./views/Home/Users/Users";
import UsersCard from "./components/Card/UsersCard/UsersCard";



function App() {
  return (
    <div className="App">
     <HomePage/>
      <UsersCard/>
    </div>
  );
}

export default App;
