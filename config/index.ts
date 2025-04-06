// export const API =  "https://api.meeteka.com"
// export const API = "http://localhost:1338"
export const API = "https://miteka-api-238i.onrender.com"
export function parseName(name: any) {
    return encodeURI(`${name?.trim()?.replaceAll(" ", "-")?.toLowerCase()}`);
}
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CD', {
        style: 'currency',
        currency: 'CDF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price * 2500);
};
export const LEVELS = [
    { value: "beginner", label: "Débutant" },
    { value: "intermediate", label: "Intermediaire" },
    { value: "advanced", label: "Avancé" }
]
export const TYPES = [
    { value: "blog", label: "Blog" },
    { value: "broadcast", label: "Diffusions" }
]