import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Headlines from "./Components/Headlines/Headlines";
import NewsContainer from "./Components/NewsContainer/NewsContainer";
import Footer from "./Components/Footer/Footer";
import { useState, createContext } from "react";

const contextCategory = createContext();

function App() {
  const [category, setCategory] = useState("all");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
  
  return (
    <>
      <contextCategory.Provider value={{ category, setCategory }}>
        <Navbar />
        <Headlines />
        <NewsContainer />
        <Footer />
      </contextCategory.Provider>
    </>
  );
}

export default App;
export { contextCategory };
