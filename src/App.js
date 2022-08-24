import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Categories from "./Component/Categories/Categories";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Categories />
    </div>
  );
}

export default App;
