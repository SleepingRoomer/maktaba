/* ============================================================================
   CATALOGUE ETTES3INAT (التسعينات)
   ----------------------------------------------------------------------------
   Champs disponibles pour la base de données :
     titre       : le titre de l'archive (obligatoire)
     auteur      : artiste, créateur ou figure historique
     type        : "Cassette", "Magazine", "Photographie", "VHS"...
     domaine     : "Pop culture", "Politics", "Socio-economics"...
     pays        : "Algérie", "Égypte", "Liban", "Maroc"...
     sujets      : liste de mots-clés, ex : ["raï", "musique"]
     annee       : année exacte (ex: 1994)
     description : contexte historique ou anecdote
     couverture  : URL d'une image
     lien        : lien vers l'archive complète (YouTube, PDF, etc.)
     statut      : "Validé" (seules ces lignes s'affichent)
   ============================================================================ */

const CONFIG = {
  // Nom affiché en haut de la page et dans l'onglet du navigateur.
  titre: "Ettes3inat | التسعينات",

  // (1) BASE DE DONNÉES via Google Sheets (édition simple, comme un tableur).
  //     Collez ici le lien CSV publié de votre feuille.
  //     Laissez "" pour utiliser à la place les ressources locales ci-dessous.
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
    description:
      "Une cassette emblématique du raï sentimental des années 90, reflétant l'esthétique et l'émotion de l'époque.",
    couverture: "",
    lien: "",
    statut: "Validé"
  },
  {
    titre: "Coup d'état cover",
    auteur: "Anonyme",
    type: "Photographie",
    domaine: "Politics",
    pays: "Égypte",
    sujets: ["histoire", "politique"],
    annee: 1994,
    description:
      "Image marquante capturant les tensions politiques du milieu de la décennie.",
    couverture: "",
    lien: "",
    statut: "Validé"
  },
  {
    titre: "Revue Al-Moustakbal",
    auteur: "Collectif",
    type: "Magazine",
    domaine: "Socio-economics",
    pays: "Liban",
    sujets: ["presse", "société"],
    annee: 1996,
    description:
      "Numéro analysant les changements économiques après-guerre.",
    couverture: "",
    lien: "",
    statut: "Validé"
  }
];

/* Ne pas modifier ci-dessous — rend les données accessibles à la page. */
if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
  window.CONFIG = CONFIG;
}
