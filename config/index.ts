// export const API =  "https://api.meeteka.com"
// export const API = "http://localhost:1338"
export const API = "https://miteka-api-238i.onrender.com"
// export const API = "https://miteka-api-dev.onrender.com";

export const emailTo =
  "mailto:contact@meeteka.com;mingandajeereq@gmail.com;sajombiku@gmail.com";
export function parseName(name: any) {
  return encodeURI(`${name?.trim()?.replaceAll(" ", "-")?.toLowerCase()}`);
}
export const LIEN_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.mbikutekango.miteka&pcampaignid=web_share";
export const LIEN_APP_STORE =
  "https://apps.apple.com/cd/app/meeteka/id6746073880?l=fr-FR";

export const formatPrice = (price: number): any => {
  return new Intl.NumberFormat("fr-CD", {
    style: "currency",
    currency: "CDF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price * 2500);
};
export const LEVELS: any[] = [
  { value: "beginner", label: "Débutant" },
  { value: "intermediate", label: "Intermediaire" },
  { value: "advanced", label: "Avancé" },
];
export const TYPES: any[] = [
  { value: "blog", label: "Blog" },
  { value: "broadcast", label: "Diffusions" },
];
export const getAppDeepLink = (
  type:
    | "blog"
    | "entreprise"
    | "event"
    | "profile"
    | "diffusion"
    | "mission"
    | "callForTender"
    | "financing",
  id: any
) => {
  if (type === "blog") {
    return `meet-eka://diffusion_details/${id}`;
  } else if (type === "diffusion") {
    return `meet-eka://diffusion_details/${id}`;
  } else if (type === "mission") {
    return `meet-eka://mission_details/${id}`;
  } else if (type === "callForTender") {
    return `meet-eka://offre_details/${id}`;
  } else if (type === "financing") {
    return `meet-eka://fund_details/${id}`;
  } else if (type === "event") {
    return `meet-eka://event_details/${id}`;
  } else if (type === "profile") {
    return `meet-eka://profile_details/${id}`;
  } else if (type === "entreprise") {
    return `meet-eka://enterprise_details/${id}`;
  } else return "";
};
export const getWebLink = (
  type:
    | "blog"
    | "entreprise"
    | "diffusion"
    | "profile"
    | "event"
    | "mission"
    | "callForTender"
    | "financing",
  id: any
) => {
  if (type === "blog") {
    return `/blogs/${id}`;
  } else if (type === "diffusion") {
    return `/diffusions/${id}`;
  } else if (type === "mission") {
    return `/missions/${id}`;
  } else if (type === "callForTender") {
    return `/missions/${id}`;
  } else if (type === "financing") {
    return `/missions/${id}`;
  } else if (type === "event") {
    return `/events/${id}`;
  } else if (type === "profile") {
    return `/profile/${id}`;
  } else if (type === "entreprise") {
    return `/entreprises/${id}`;
  } else return "";
};
