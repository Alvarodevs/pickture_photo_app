import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import CardsGrid from "./components/cards_grid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAsync } from "./features/search/searchSlice";


function App() {
  const dispatch = useDispatch();

  //Trigger for random cards at app loading
  // useEffect(() => {
  //   dispatch(searchAsync())
  // }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<CardsGrid/>}></Route>
          <Route exact path="/my_photos" element={<CardsGrid />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
