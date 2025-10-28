import axios from "axios";
import React, { useState } from "react";

type FieldName = "rccmf" | "niff";

type ImageProps = {
  fieldName: FieldName;

  setFormData: (value: any | ((prev: any) => any)) => void;
  successToast: (message: string) => void;
  errorToast: (message: string) => void;
};
export const useUplaoderImage = (CLOUDINARY_URL: any) => {
  const [loadingRccm, setLoadingRccm] = useState(false);
  const [loadingNif, setLoadingNif] = useState(false);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    { fieldName, setFormData, successToast, errorToast }: ImageProps
  ) => {
    const { files }: any = e.target;
    if (files.legnth == 0) return;

    const setLoading = fieldName === "rccmf" ? setLoadingRccm : setLoadingNif;
    const resourceType = fieldName === "rccmf" ? "auto" : "auto";
    try {
      setLoading(true);
      const formDataUpload = new FormData();
      formDataUpload.append("file", files[0]);
      formDataUpload.append("upload_preset", "poztion");
      formDataUpload.append("resource_type", resourceType);

      const response = await axios.post(CLOUDINARY_URL, formDataUpload);
      const secureUrl = response.data.secureUrl;

      setFormData((prev: any) => ({ ...prev, [fieldName]: secureUrl }));

      successToast(`Fichier ${fieldName.toUpperCase()} téléchargé avec succès`);
    } catch (error) {
      console.error(
        `Erreur lors du téléchargement du fichier ${fieldName} :`,
        error
      );
      errorToast(
        `Échec du téléchargement du fichier ${fieldName.toUpperCase()}`
      );
    } finally {
      setLoading(false);
    }
  };
  return {
    handleFileUpload,
    loadingRccm,
    loadingNif,
  };
};
