export const API = "http://localhost:1338"

export function parseName(name: any) {
    return encodeURI(`${name?.trim()?.replaceAll(" ", "-")?.toLowerCase()}`);
}