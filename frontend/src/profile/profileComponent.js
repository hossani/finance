import { useState } from "react";
import api from "../api/api";
import { useEffect } from "react";
import Breadcrumbs from "../breadscrumb/breadscrumb";
import NavbarConnected from "../general-component/navbarConnected";
function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    about: "",
    prenom: "",
    nom: "",
    email: "",
    sexe: "",
    salaire: "",
    bdg_utilitaire: "",
    bdg_education: "",
    bdg_sport: "",
    bdg_santé: "",
    bdg_loisirs: "",
    bdg_transport: "",
    bdg_logement: "",
    bdg_epargne: "",
    bdg_autre: "",
    bdg_alimentation:""
  });

  useEffect(() => {
    // Charger les données du profil lors du montage du composant
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await api.get("/profile");
     
      setProfile(response.data.profile);
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error.message);
      // Gérer l'erreur, par exemple rediriger l'utilisateur vers une page d'erreur
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(() => ({
      ...profile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi des données vers l'API backend
      const response = await api.put("/profile", profile);
      console.log("response:",response)
      // Mise à jour locale après la confirmation de sauvegarde côté serveur
      alert("Profil mis à jour avec succès!");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error.message);
      alert("Erreur lors de la mise à jour du profil. Veuillez réessayer.");
    }
  };

  return (
    <>
    
    <NavbarConnected/>
          <Breadcrumbs />

    <div className="container-form-profile">

      <form onSubmit={handleSubmit}>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div class="mt-2">
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      workcation.com/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={handleChange}
                      value={profile.username}
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="about"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    onChange={handleChange}
                    value={profile.about}
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="prenom"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="prenom"
                    onChange={handleChange}
                    value={profile.prenom}
                    id="prenom"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="nom"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="nom"
                    onChange={handleChange}
                    value={profile.nom}
                    id="nom"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="sexe"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sexe
                </label>
                <div class="mt-2">
                  <select
                    id="sexe"
                    name="sexe"
                    autocomplete="country-name"
                    onChange={handleChange}
                    value={profile.sexe}
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Choose your gender</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme"> Femme</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="salaire"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Salaire
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="salaire"
                    id="salaire"
                    onChange={handleChange}
                    value={profile.salaire}
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Budget Information
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Use your budget that you have to each category.
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  for="utilitaires"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Utilitaires
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_utilitaire"
                    id="utilitaires"
                    onChange={handleChange}
                    value={profile.bdg_utilitaire}
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="alimentation"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Alimentation
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_alimentation"
                    id="alimentation"
                    onChange={handleChange}
                    value={profile.bdg_alimentation}
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="education"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Education
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_education"
                    id="education"
                    onChange={handleChange}
                    value={profile.bdg_education}
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  for="transport"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Transport
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_transport"
                    id="transport"
                    onChange={handleChange}
                    value={profile.bdg_transport}
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="sport"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sport
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_sport"
                    onChange={handleChange}
                    value={profile.bdg_sport}
                    id="sport"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="sante"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Santé
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_santé"
                    id="sante"
                    onChange={handleChange}
                    value={profile.bdg_santé}
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  for="epargne"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Epargne
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_epargne"
                    id="epargne"
                    onChange={handleChange}
                    value={profile.bdg_epargne}
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="Loisirs"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Loisirs
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_loisirs"
                    id="Loisirs"
                    onChange={handleChange}
                    value={profile.bdg_loisirs}
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="autre"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Autre
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="bdg_autre"
                    id="autre"
                    onChange={handleChange}
                    value={profile.bdg_autre}
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>

  );
}

export default Profile;
