/* ============================================================================
   CATALOGUE — c'est le SEUL fichier à modifier pour ajouter des ressources.
   ----------------------------------------------------------------------------
   Pour ajouter un ouvrage : copiez un bloc { ... } ci-dessous, collez-le,
   et modifiez les valeurs. Gardez la virgule après chaque bloc.

   Champs disponibles (tous optionnels sauf "titre") :
     titre       : le titre de la ressource                      (obligatoire)
     auteur      : auteur·rice(s)
     type        : "Livre", "Article", "Revue", "BD", "Thèse", "Vidéo"...
     domaine     : grand champ — "Littérature", "Philosophie", "Sciences"...
     genre       : "Roman", "Essai", "Poésie", "Manuel"...
     sujets      : liste de mots-clés, ex : ["écologie", "économie"]
     annee       : année de publication (nombre)
     description : résumé / note personnelle
     couverture  : adresse d'une image. Soit une URL (https://...),
                   soit un fichier local placé dans un dossier "couvertures/"
                   du dépôt, ex : "couvertures/mon-livre.jpg".
                   Laissez "" pour afficher une couverture générée.
     pretable    : true si la ressource peut être prêtée, sinon false
     contact     : moyen de contact. Une adresse e-mail ("nom@exemple.fr")
                   OU un lien ("https://...") OU un texte libre.
     lien        : (optionnel) lien pour consulter la ressource en ligne
                   (PDF, archive, fiche, etc.)
   ============================================================================ */

/* ----------------------------------------------------------------------------
   RÉGLAGES — à ajuster une fois.
   ---------------------------------------------------------------------------- */
const CONFIG = {
  // Nom affiché en haut de la page et dans l'onglet du navigateur.
  titre: "Maktaba",

  // Adresse qui recevra les propositions de dépôt envoyées via le formulaire.
  // REMPLACEZ par votre vraie adresse.
  emailDepot: "brahimiarsalan@gmail.com",

  // false  -> le formulaire ouvre le logiciel de messagerie du visiteur,
  //           pré-rempli (aucun service tiers, rien à installer).
  // true   -> les dépôts arrivent directement dans votre boîte via FormSubmit
  //           (gratuit ; une seule confirmation à valider au premier envoi).
  envoiAuto: false
};

const RESOURCES = [
  {
    titre: "Une histoire de tout, ou presque",
    auteur: "Bill Bryson",
    type: "Livre",
    domaine: "Sciences",
    genre: "Vulgarisation",
    sujets: ["physique", "biologie", "histoire des sciences"],
    annee: 2003,
    description:
      "Un panorama accessible et plein d'humour des grandes questions scientifiques : des origines de l'univers à l'apparition de la vie.",
    couverture: "",
    pretable: true,
    contact: "biblio@exemple.fr",
    lien: ""
  },
  {
    titre: "Le Mythe de Sisyphe",
    auteur: "Albert Camus",
    type: "Livre",
    domaine: "Philosophie",
    genre: "Essai",
    sujets: ["absurde", "existence", "liberté"],
    annee: 1942,
    description:
      "Essai fondateur sur l'absurde et le sens de la vie. « Il faut imaginer Sisyphe heureux. »",
    couverture: "",
    pretable: true,
    contact: "biblio@exemple.fr",
    lien: ""
  },
  {
    titre: "La Horde du Contrevent",
    auteur: "Alain Damasio",
    type: "Livre",
    domaine: "Littérature",
    genre: "Science-fiction",
    sujets: ["aventure", "langage", "vent"],
    annee: 2004,
    description:
      "Une quête vers l'origine du vent, portée par une écriture inventive et polyphonique. Un objet littéraire à part.",
    couverture: "",
    pretable: false,
    contact: "biblio@exemple.fr",
    lien: ""
  },
  {
    titre: "Comment la non-violence protège l'État",
    auteur: "Peter Gelderloos",
    type: "Livre",
    domaine: "Sciences politiques",
    genre: "Essai",
    sujets: ["militantisme", "stratégie", "histoire sociale"],
    annee: 2007,
    description:
      "Critique des stratégies militantes contemporaines. Un texte de débat, à lire de façon critique.",
    couverture: "",
    pretable: true,
    contact: "https://exemple.fr/contact",
    lien: ""
  },
  {
    titre: "L'Effondrement des sociétés complexes",
    auteur: "Joseph Tainter",
    type: "Livre",
    domaine: "Histoire",
    genre: "Essai",
    sujets: ["effondrement", "complexité", "anthropologie"],
    annee: 1988,
    description:
      "Analyse des dynamiques qui mènent à la chute des civilisations, à travers le prisme du coût croissant de la complexité.",
    couverture: "",
    pretable: false,
    contact: "biblio@exemple.fr",
    lien: ""
  },
  {
    titre: "Manifeste pour une écologie de la différence",
    auteur: "Collectif",
    type: "Revue",
    domaine: "Écologie",
    genre: "Article",
    sujets: ["biodiversité", "politique", "pensée critique"],
    annee: 2019,
    description:
      "Recueil d'articles disponibles en ligne, accessibles librement.",
    couverture: "",
    pretable: false,
    contact: "",
    lien: "https://exemple.fr/revue"
  }
];

/* Ne pas modifier ci-dessous — rend les données accessibles à la page. */
if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
  window.CONFIG = CONFIG;
}
