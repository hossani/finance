import { useState } from "react";
import api from "../api/api";
import { setTransactions } from "../redux/transaction";
import { useSelector, useDispatch } from "react-redux";

function Modal({ closeModal,montant,transaction,categorie,transactionId }) {
    const [data,setData]=useState({
        montant,transaction
    })
  const transactions=useSelector(state=>state.transaction.transactions);
  const dispatch=useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.put(`/transaction/${transactionId}`, data);
          const newTransaction= transactions.map((item)=> item._id==transactionId?response:item);
          dispatch(setTransactions(newTransaction));
          closeModal();
        } catch (error) {
          console.error("Failed to update transaction", error);
        }
      };
   
    return (
      <div className="container-form-transaction">
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="flex justify-center items-center fixed inset-0 z-50 bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md w-full">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Modal
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="transaction"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Transaction
                  </label>
                  <input
                    type="text"
                    name="transaction"
                    id="transaction"
                    value={data.transaction}
                    onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="montant"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Montant
                  </label>
                  <input
                    type="text"
                    name="montant"
                    id="montant"
                    value={data.montant}
                    onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="categorie"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Categorie
                  </label>
                  <input
                    type="text"
                    name=" categorie"
                    id="categorie"
                    value={categorie}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    readOnly
                  />
            
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  