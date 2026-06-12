/* ============================================================================
   CATALOGUE ETTES3INAT
   ----------------------------------------------------------------------------
   Champs disponibles :
     titre       : le titre de l'archive (obligatoire)
     auteur      : artiste, créateur ou figure historique
     type        : "Cassette", "Magazine", "Photographie", "VHS"...
     domaine     : "Pop culture", "Politics", "Socio-economics", "Underground"...
     pays        : "Algérie", "Égypte", "Liban", "Maroc"...
     sujets      : liste de mots-clés, ex : ["raï", "révolution"]
     annee       : année exacte (ex: 1994)
     description : contexte historique ou anecdote
     couverture  : URL d'une image
     lien        : lien vers l'archive complète (YouTube, PDF, etc.)
   ============================================================================ */

const CONFIG = {
  titre: "Ettes3inat | التسعينات",
  // Collez ici le lien CSV publié de votre Google Sheet
  sheetCsvUrl: ""
};

const RESOURCES = [
  {
    titre: "Cheb Hasni - Lover's Mix",
    auteur: "Cheb Hasni",
    type: "Cassette",
    domaine: "Pop culture",
    pays: "Algérie",
    sujets: ["raï", "musique"],
    annee: 1992,
    description: "Une des cassettes les plus populaires du roi du Raï sentimental, marquant l'esthétique musicale des années 90 en Algérie.",
    couverture: "",
    lien: "https://youtube.com/"
  },
  {
    titre: "Al-Ahram - Numéro Spécial",
    auteur: "Al-Ahram",
    type: "Magazine",
    domaine: "Politics",
    pays: "Égypte",
    sujets: ["presse", "politique"],
    annee: 1995,
    description: "Une édition spéciale couvrant les grands bouleversements socio-économiques du milieu de la décennie.",
    couverture: "",
    lien: ""
  },
  {
    titre: "Beyrouth Underground Postcard",
    auteur: "Anonyme",
    type: "Photographie",
    domaine: "Underground",
    pays: "Liban",
    sujets: ["nuit", "reconstruction"],
    annee: 1998,
    description: "Photographie capturant la scène nocturne émergente de Beyrouth à la fin des années 90.",
    couverture: "",
    lien: ""
  }
];

if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
  window.CONFIG = CONFIG;
}
