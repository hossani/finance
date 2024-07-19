import Cards from "./cards";
import { useParams } from "react-router-dom";
import {  useEffect } from "react";
import api from "../api/api";
import { setTransactions } from "../redux/transaction";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumbs from "../breadscrumb/breadscrumb";
import NavbarConnected from "../general-component/navbarConnected";
function GridsCards() {
  const { categorie } = useParams();
  const transactions = useSelector((state) => state.transaction.transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get(`/transaction`)
      .then((response) => {
        const filteredTransactions = response.data.filter(
          (transaction) => transaction.categorie === categorie
        );
        dispatch(setTransactions(filteredTransactions));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des transactions", error);
      });
  }, [categorie,transactions]);
  return (
    <>
    <NavbarConnected/>
    <Breadcrumbs/>
      <div className="grid grid-cols-2 height-grid">
        {transactions.map((transaction, index) => (
          <div key={index} className="div-card">
            <Cards transaction={transaction} />
          </div>
        ))}
      </div>
    </>
  );
}

export default GridsCards;
