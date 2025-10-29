import React, { useState, useEffect } from "react";
import { CheckCheck, Lock, Save, TrendingUp } from "lucide-react";
import { useFetchData } from "../../hooks/useFetchData";

import { PageTransition } from "../components/PageTransition";

import { useLanguage } from "../context/LanguageContext";
import useToast from "../hooks/use-toast";
import { useUplaoderImage } from "./libs/importFiles";
import { CLOUDINARY_URL } from "./libs/utils";
import { toast } from "react-toastify";

export default function ProductSubscription() {
  const { t } = useLanguage();
  const { fetch: fetchCreateProduct, loading: isLoading } = useFetchData({
    uri: "infos-user/product-entreprise/create",
  });
  const { fetch: fetchLegalform } = useFetchData({
    uri: "infos-user/legal-form/get",
  });

  const { fetch: fetchEntrepriseLevel } = useFetchData({
    uri: "infos-user/entreprise-level/get",
  });
  const { success: successToast, error: errorToast } = useToast();
  const [entrepriseLevels, setEntrepriseLevels] = useState<any[]>([]);
  const [legalForms, setLegalForms] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await fetchEntrepriseLevel({}, "POST");
      if (data?.data) {
        setEntrepriseLevels(data.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const { data } = await fetchLegalform({}, "POST");

      if (data?.data) {
        setLegalForms(data.data);
      }
    })();
  }, []);
  console.log(entrepriseLevels);
  const [formData, setFormData] = useState({
    name: "",
    rccm: "",
    nif: "",
    email: "",
    siteweb: "",
    legalForm: "",
    requestorFonction: "",
    requestorEmail: "",
    requestorPhone: "",
    description: "",
    entrepriseLevel: "",
  });

  const { handleFileUpload, loadingNif, loadingRccm } =
    useUplaoderImage(CLOUDINARY_URL);

  const uploadRccm = (e: any) => {
    handleFileUpload(e, {
      fieldName: "rccmf",
      setFormData: setFormData,
      successToast: successToast,
      errorToast: errorToast,
    });
  };
  const uploadNif = (e: any) => {
    handleFileUpload(e, {
      fieldName: "niff",
      setFormData: setFormData,
      successToast: successToast,
      errorToast: errorToast,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await fetchCreateProduct(formData, "POST");
    if (error) {
      console.error("Erreur lors de la création de l'entreprise:", error);
      // errorToast("Une erreur est survenue lors de la soumission.");
      toast.error("Erreur lors de la création de l'entreprise");
      return;
    }
    successToast("la creation effectué avec succès");
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      rccm: "",
      nif: "",
      email: "",
      siteweb: "",
      legalForm: "",
      requestorFonction: "",
      requestorEmail: "",
      requestorPhone: "",
      description: "",
      entrepriseLevel: "",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Subscription
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl">
              {t("missions.banner.description")}
            </p>
          </div>
        </section>

        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full ">
                  <h1 className="flex items-center gap-4 font-bold text-4xl">
                    {" "}
                    <Save className="w-4 h-4 md:w-6 md:h-6" />
                    Enregistrer votre demande de prestation
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diffusions Grid */}
        <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Colonne "Parlons-en" */}
            <div className="w-full">
              {/* <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Parlons-en
              </h2> */}
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Propulsez votre activité numérique avec Meeteka !
                Enregistrez-vous dès aujourd'hui pour transformer votre
                expertise en nouvelles opportunités de marché.
              </p>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="p-2 bg-highlight w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCheck className="w-5 h-5 text-gray-100" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    Visibilité Maximale et Crédibilité
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-highlight w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-gray-100" />{" "}
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    Flux Constant d'Opportunités d'Affaires
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-highlight w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-gray-100" />{" "}
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    Gestion Simplifiée et Sécurisée
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="shadow-lg rounded-lg w-full"
              >
                <div className="flex flex-col gap-6 p-4 sm:p-6 bg-white ">
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="name" className="text-sm">
                      Nom de l'entreprise:
                    </label>
                    <input
                      type="text"
                      id="nom"
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Saisir le nom de l'entreprise..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ Entreprise Level */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="entrepriseLevel" className="text-sm">
                      Entreprise Level :
                    </label>
                    <select
                      id="entrepriseLevel"
                      value={formData.entrepriseLevel}
                      onChange={handleChange}
                      name="entrepriseLevel"
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    >
                      <option value="">Selectionnez une entreprise</option>
                      {entrepriseLevels.map((ent) => (
                        <option key={ent.id} value={ent.id}>
                          {ent.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Champ Rccm */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="rccm" className="text-sm">
                      Rccm :
                    </label>
                    <input
                      type="text"
                      id="rccm"
                      name="rccm"
                      value={formData.rccm}
                      onChange={handleChange}
                      placeholder="Saisir le rccm..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ NIF */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="nif" className="text-sm">
                      Numéro d'Identification Fiscale (NIF) :
                    </label>
                    <input
                      type="text"
                      id="nif"
                      value={formData.nif}
                      onChange={handleChange}
                      name="nif"
                      placeholder="saisir le numero d'identification Fiscale..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="niff" className="text-sm">
                      Importer votre fichier RCCM :
                    </label>
                    {loadingRccm ? (
                      <span className="font-semibold text-base">
                        Chargement...
                      </span>
                    ) : (
                      <div className="flex  flex-wrap gap-4 w-full">
                        <label
                          htmlFor="rccmf"
                          className="text-sm flex flex-col gap-3 w-full  px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                        >
                          Cliquez pour Importer un fichier
                        </label>
                        <input
                          type="file"
                          id="rccmf"
                          name="rccmf"
                          accept="application/pdf"
                          // value={formData.rccm}
                          onChange={uploadRccm}
                          disabled={loadingRccm}
                          placeholder="Saisir le rccm..."
                          className="w-full hidden px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="niff" className="text-sm">
                      Importer votre fichier NIF:
                    </label>
                    {loadingNif ? (
                      <span className="font-semibold text-base">
                        Chargement...
                      </span>
                    ) : (
                      <div className="flex flex-col gap-4 w-full">
                        <label
                          htmlFor="niff"
                          className="text-sm flex flex-col gap-3 w-full  px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                        >
                          Cliquez pour Importer un fichier
                        </label>
                        <input
                          type="file"
                          id="niff"
                          name="niff"
                          onChange={uploadNif}
                          disabled={loadingNif}
                          placeholder="saisir le numero d'identification Fiscale..."
                          className="w-full hidden px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Champ Forme juridique */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="legalForm" className="text-sm">
                      Forme juridique :
                    </label>
                    <select
                      name="legalForm"
                      id="legalForm"
                      value={formData.legalForm}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    >
                      <option value="">Selectionnez une forme juridique</option>
                      {legalForms.map((form) => (
                        <option key={form.id} value={form.id}>
                          {form.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Champ Fonction du demandeur */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="requestorFonction" className="text-sm">
                      Fonction du demandeur :
                    </label>
                    <input
                      type="text"
                      id="requestorFonction"
                      name="requestorFonction"
                      value={formData.requestorFonction}
                      onChange={handleChange}
                      placeholder="saisir ta fonction..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ E-mail du demandeur */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="requestorEmail" className="text-sm">
                      E-mail du demandeur :
                    </label>
                    <input
                      type="email"
                      id="requestorEmail"
                      name="requestorEmail"
                      value={formData.requestorEmail}
                      onChange={handleChange}
                      placeholder="saisir E-mail du demandeur..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ Numéro de téléphone du demandeur */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="requestorPhone" className="text-sm">
                      Numéro de téléphone du demandeur :
                    </label>
                    <input
                      type="text"
                      id="requestorPhone"
                      name="requestorPhone"
                      value={formData.requestorPhone}
                      onChange={handleChange}
                      placeholder="saisir le numero du demandeur..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ email (entreprise) */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="email" className="text-sm">
                      email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="saisir ton email..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ Siteweb */}
                  <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="siteweb" className="text-sm">
                      Siteweb :
                    </label>
                    <input
                      type="text"
                      id="siteweb"
                      name="siteweb"
                      value={formData.siteweb}
                      onChange={handleChange}
                      placeholder="saisir ton siteweb..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                  </div>

                  {/* Champ Description (prend 2 colonnes sur grand écran) */}
                  <div className="flex flex-col gap-4 w-full lg:col-span-2">
                    <label htmlFor="description" className="text-sm">
                      Description :
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Description détaillée"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                    />
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-3 bg-highlight text-gray-100 rounded-lg"
                  >
                    {isLoading ? "Envoie en cours..." : " Sauvegarder"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
