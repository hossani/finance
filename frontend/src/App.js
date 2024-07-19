import "./App.css";
import Sign from "./sign/formulaireSign";
import Log from "./log/formulaireLog";
import Transaction from "./transaction/transaction-page";
import GridsCards from "./listeCards/gridsCards";
import Profile from "./profile/profileComponent";
import Chartt from "./chart/chart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./general-component/footer";
import Hero from "./landing-page/hero-component";
import PrivateRoute from "./privateRoute/private";

function App() {
  const authenticated = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/login" element={<Log />} />

          <Route
            path="/transaction/cards/:categorie"
            element={
              <PrivateRoute authenticated={authenticated}>
                <GridsCards />
              </PrivateRoute>
            }
          />

          <Route
            path="/transaction"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Transaction />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/chart"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Chartt />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
