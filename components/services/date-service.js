export function nowTOHHMM() {
    const d = new Date();
    return `${d.getHours()} : ${d.getMinutes().toString().padStart(2, "0")}`;

}

export function dateToDDMM(date) {
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
}


export const DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
