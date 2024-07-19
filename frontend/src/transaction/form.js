import { useState, useEffect } from "react";
import api from "../api/api";
function FormTransaction({onTransactionSubmit}) {
  const [transaction, setTransaction] = useState("");
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10); // Format YYYY-MM-DD
    setDate(currentDate);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/transaction", {
        transaction,
        montant,
        categorie,
      });
      onTransactionSubmit(categorie,montant);
            setTransaction("");
      setMontant("");
      setCategorie("");
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l envoie requette');
    }
  };
  return (
    <div className="container-form-transaction">
      <div
        id="authentication-modal"
        aria-hidden="true"
        class="  justify-center items-center w-2/3 md:inset-0 h-[calc(50%-1rem)] max-h-full "
      >
        <div class=" p-4   max-h-full">
          <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Formulaire d'ajout
              </h3>
            </div>
            <div class="p-4 md:p-5">
              <form class="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="transaction"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Transaction
                  </label>
                  <input
                    type="text"
                    name="transaction"
                    id="transaction"
                    value={transaction}
                    onChange={(e) => setTransaction(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="montant"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Montant
                  </label>
                  <input
                    type="text"
                    name="montant"
                    id="montant"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="dateTransaction"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date de transaction
                  </label>
                  <input
                    type="text"
                    name="dateTransaction"
                    id="dateTransaction"
                    value={date}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label
                    for="categorie"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Categorie
                  </label>
                  <select
                    name="categorie"
                    id="categorie"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-red-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  >
                    <option value="">Choose a categorie</option>
                    <option value="Utilitaires">Utilitaires</option>
                    <option value="Sport"> Sport</option>
                    <option value="Education">Education</option>
                    <option value="Alimentation">Alimentation</option>
                    <option value="Loisirs"> Loisirs</option>
                    <option value="Santé">Santé</option>
                    <option value="Epargne">Epargne</option>
                    <option value="Transport">Transport</option>
                    <option value="Autres"> Autres</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormTransaction;
