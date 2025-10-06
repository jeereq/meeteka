export function getCookie(cname: string): any {
    if (typeof window !== "undefined") {
        const name: string = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    }
    return "";
}

export function isOnlyDigits(chaine) {
    // Le symbole '^' marque le début de la chaîne.
    // Le symbole '$' marque la fin de la chaîne.
    // '[0-9]+' correspond à un ou plusieurs chiffres (de 0 à 9).
    // La méthode 'test()' retourne true si le motif est trouvé.
    return /^[0-9]+$/.test(chaine);
  }
export function deleteAllCookies() {
    if (typeof window !== "undefined") {
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
}
export function setCookie(cname: string, cvalue: any, exdays: number = 1) {
    if (typeof window !== "undefined") {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}