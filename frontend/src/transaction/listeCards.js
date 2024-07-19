import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getMonthName from "../helpers/month";
import api from "../api/api";
import { calculateCategoryTotals } from "../helpers/montantCategorie";
function ListeCards({categorieTotal,setCategorieTotal}) {
  const [month, setMonth] = useState("");
  const [salaire, setSalaire] = useState(0);
  const [budget, setBudget] = useState({
    bdg_utilitaire: "",
    bdg_education: "",
    bdg_sport: "",
    bdg_santé: "",
    bdg_loisirs: "",
    bdg_alimentation:"",
    bdg_transport: "",
    bdg_logement: "",
    bdg_epargne: "",
    bdg_autre: ""
  });
 
  useEffect(() => {
    const currentMonth = getMonthName(new Date());
    setMonth(currentMonth);
    api
      .get("/profile")
      .then((response) => {
        setSalaire(response.data.profile.salaire);
        setBudget(response.data.profile);
      })
      .catch((error) => {
        console.error("error dans useEffect pour listCards", error);
      });
      api.get('/transaction').then(
        (response)=>{
            const categoryTotals=calculateCategoryTotals(response.data);
            setCategorieTotal(categoryTotals);
        }
      )
  }, []);

  return (
    <div className="container-listeCards">
      <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 listeCards">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {month}
          </h5>
          <div class="text-sm font-medium text-red-600 hover:underline dark:red-blue-500">
            {salaire} Dh
          </div>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Utilitaires" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_utilitaire}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Utilitaires
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.utilitaire} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Alimentation" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_alimentation}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Alimentation
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.alimentation} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Education" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_education}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Education
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.education} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Transport" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_transport}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Transport
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.transport} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Santé" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_santé}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Santé
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.santé} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Epargne" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_epargne}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Epargne
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.epargne} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Loisirs" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_loisirs}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Loisirs
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.loisirs} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Sport" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_sport}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Sport
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.sport} Dh
                </div>
              </Link>
            </li>

            <li class="py-3 sm:py-4">
              <Link to="/transaction/cards/Autres" class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Budget: {budget.bdg_autre}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Autres
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {categorieTotal.autre} Dh
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListeCards;
