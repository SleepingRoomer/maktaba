/* ============================================================================
   CATALOGUE ETTES3INAT (التسعينات)
   ----------------------------------------------------------------------------
   Champs reconnus (basés sur votre base Notion) :
     Name        : le titre de l'archive (obligatoire)
     Auteur.ice  : artiste, créateur ou figure historique
     Format      : "Cassette", "Magazine", "Photographie"...
     Domaine     : "Pop culture", "Politics", "Underground"...
     Pays        : "Algérie", "Égypte", "Liban"...
     Sujets      : liste de mots-clés (ex: "raï, musique")
     Date        : année exacte (ex: 1994)
     Description : contexte historique ou anecdote
     Image       : URL d'une image ou fichier
     Lien        : lien vers l'archive complète (YouTube, PDF, etc.)
     Statut      : "Validé" (seules ces lignes s'affichent)
   ============================================================================ */

const CONFIG = {
  titre: "Ettes3inat | التسعينات",
  // Collez ici le lien CSV publié de votre Google Sheet
  sheetCsvUrl: ""
};

const RESOURCES = [
  {
    Name: "Al-Ahram - Numéro Spécial",
    "Auteur.ice": "Al-Ahram",
    Format: "Magazine",
    Domaine: "Politics",
    Pays: "Égypte",
    Sujets: "presse, politique",
    Date: 1995,
    Description: "Une édition spéciale couvrant les grands bouleversements socio-économiques du milieu de la décennie.",
    Image: "",
    Lien: "",
    Statut: "Validé"
  },
  {
    Name: "Beyrouth Underground Postcard",
    "Auteur.ice": "Anonyme",
    Format: "Photographie",
    Domaine: "Underground",
    Pays: "Liban",
    Sujets: "nuit, reconstruction",
    Date: 1998,
    Description: "Photographie capturant la scène nocturne émergente de Beyrouth à la fin des années 90.",
    Image: "",
    Lien: "",
    Statut: "Validé"
  },
  {
    Name: "Cheb Hasni - Lover's Mix",
    "Auteur.ice": "Cheb Hasni",
    Format: "Cassette",
    Domaine: "Pop culture",
    Pays: "Algérie",
    Sujets: "raï, musique",
    Date: 1992,
    Description: "Une des cassettes les plus populaires du roi du Raï sentimental, marquant l'esthétique musicale des années 90 en Algérie.",
    Image: "",
    Lien: "https://youtube.com/",
    Statut: "Validé"
  }
];

if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
  window.CONFIG = CONFIG;
}
