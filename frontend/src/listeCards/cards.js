import { formatDate } from "../helpers/formaterDate";
import { useState } from "react";
import Option from "./option";
import Modal from "./modal";
function Cards({transaction}) {
    const dateTransaction=formatDate(transaction.updatedAt);
    const [showOption, setShowOption] = useState(false);
    const [showModal, setShowModal] = useState(false);
  const toggleOption = () => {
    setShowOption(!showOption);
  }; 
  const toggleModal = () => {
    setShowModal(!showModal);
    setShowOption(false);

  };
  return (
    <>
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 height-card relative">
      <div className="content-card">
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm text-white truncate dark:text-white font-bold">
            Date: {dateTransaction}
          </p>
          <p class="text-sm font-medium text-white truncate dark:text-white">
            {transaction.transaction}
          </p>
        </div>
        <div class=" min-w-0 ms-4 details-card">
          <p class="text-sm font-medium text-white truncate dark:text-white">
            {transaction.montant} Dh
          </p>
        </div>
      </div>
      <div className="absolute div-edit">
        <h1 className="font-bold text-white cursor-pointer" onClick={toggleOption}>...</h1>
      </div>
    </div>
    {showOption && <Option toggleModal={toggleModal} transactionId={transaction._id}/>} 
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Modal closeModal={toggleModal} transactionId={transaction._id} montant={transaction.montant} transaction={transaction.transaction} categorie={transaction.categorie}/> {/* Passez la fonction closeModal en prop à Modal */}
        </div>
      )}
    </>
  );
}

export default Cards;
