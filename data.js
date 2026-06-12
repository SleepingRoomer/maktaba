/* ============================================================================
   CATALOGUE ETTES3INAT (التسعينات)
   ----------------------------------------------------------------------------
   Champs reconnus (basés sur votre base Notion) :
     Name        : le titre de l'archive (obligatoire)
     Auteur.ice  : artiste, créateur ou figure historique
     Format      : "Cassette", "Magazine", "Photographie", "Livre"...
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
  // Collez ici le lien CSV publié de votre Google Sheet une fois votre Notion exporté
  sheetCsvUrl: ""
};

const RESOURCES = [
  {
    Name: "1994",
    "Auteur.ice": "Adlène Meddi | عدلان مدي",
    Format: "Roman | Novel | رواية",
    Domaine: "Littérature",
    Pays: "Algérie",
    Sujets: "Français, années de plomb, fiction",
    Date: 2017, // Année de parution du livre
    Description: "Dans ce roman puissant, quatre jeunes lycéens d'El-Harrach forment un groupe clandestin de lutte antiterroriste alors que le pays est à feu et à sang.",
    Image: "https://m.media-amazon.com/images/I/81U2fN2RkDL._AC_UF1000,1000_QL80_.jpg", // Couverture officielle du livre
    Lien: "http://www.editions-barzakh.com/catalogue/1994",
    Statut: "Validé"
  },
  {
    Name: "Passion d'Algérie - Chroniques de tourments et d'obsessions",
    "Auteur.ice": "Badra Moutassem-Mimouni | بدرة معتصم ميموني",
    Format: "Témoignage | Testimony | شهادة",
    Domaine: "Société",
    Pays: "Algérie",
    Sujets: "Français, témoignage, décennie noire",
    Date: 2006,
    Description: "Chroniques et témoignages sur les bouleversements psychologiques et sociaux en Algérie.",
    Image: "https://m.media-amazon.com/images/I/41-q9tq4AUL.jpg", // Couverture du livre (Éditions Karthala)
    Lien: "",
    Statut: "Validé"
  },
  {
    Name: "An Inquiry into the Massacres",
    "Auteur.ice": "Youcef Bedjaoui, Abbas Aroua, Méziane Aït-Larbi & co | يوسف بجاوي، عباس عروة، مزيان آيت العربي",
    Format: "Académique | Academic | بحث أكاديمي",
    Domaine: "Histoire",
    Pays: "Algérie",
    Sujets: "English, recherche, massacres",
    Date: 1999,
    Description: "Recherche académique approfondie sur les massacres perpétrés durant la décennie noire.",
    Image: "", // Laissé vide intentionnellement : le code affichera un beau carré noir et blanc de remplacement avec le titre.
    Lien: "https://hoggar.org/wp-content/uploads/1999/08/hog-inquiry-book.pdf",
    Statut: "Validé"
  },
  {
    Name: "Guerre sans images - Algérie, je sais que tu sais",
    "Auteur.ice": "Mohammed Soudani, Michael Von Graffenried",
    Format: "Documentaire | Documentary | فيلم وثائقي",
    Domaine: "Documentaire",
    Pays: "Algérie",
    Sujets: "Français, العربية, Derja, photographie",
    Date: 2002,
    Description: "Film documentaire de Mohammed Soudani et Michael Von Graffenried. Audio en derja (dialecte algérien).",
    Image: "https://img.youtube.com/vi/4Vhu0BJ1T7s/hqdefault.jpg", // Miniature générée automatiquement via l'ID de la vidéo YouTube !
    Lien: "https://www.youtube.com/watch?v=4Vhu0BJ1T7s",
    Statut: "Validé"
  }
];

/* Ne pas modifier ci-dessous — rend les données accessibles à la page. */
if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
  window.CONFIG = CONFIG;
}
