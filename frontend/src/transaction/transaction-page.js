import ListeCards from "./listeCards";
import FormTransaction from "./form";
import { useState } from "react";
import { determinerCategorie } from "../helpers/determinerCategorie";
import Breadcrumbs from "../breadscrumb/breadscrumb";
import NavbarConnected from "../general-component/navbarConnected";

function Transaction(){
    const [categorieTotal,setCategorieTotal]=useState({
        utilitaire: 0,
        alimentation: 0,
        education: 0,
        transport: 0,
        santé: 0,
        epargne: 0,
        loisirs: 0,
        sport: 0,
        autre: 0
      })
    
      const handleTransactionSubmit = (categorie,montant) => {
       const myCategorie= determinerCategorie(categorie); // Cette fonction permet de convertir value categorie vers le nom d un propriete de objet categorieTotal
        const newCategorieTotal = { ...categorieTotal };
        const myMontant = Number(montant);
        newCategorieTotal[myCategorie] += myMontant;
        setCategorieTotal(newCategorieTotal);
      };

    return(
        <>
        <NavbarConnected/>
        <Breadcrumbs/>
        <div className="container-transaction">
         <ListeCards categorieTotal={categorieTotal} setCategorieTotal={setCategorieTotal} />
         <FormTransaction onTransactionSubmit ={handleTransactionSubmit}/>
        </div>
        </>
    )
}

export default Transaction;