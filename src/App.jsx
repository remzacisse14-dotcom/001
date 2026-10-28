import InfoPerso from "./composants/infoPerso";
import Experiences from "./composants/Experiences";
import Competences from "./composants/competences";
import "./App.css";

function App(){
  return(
    <div className="cv">
     <InfoPerso />
     <Experiences />
     <Competences />
    </div>
  )
}
export default App;
// *les etapes de la creation du projet 
// etape 1 : on ouvre d abord le terminal , ensuite on le projet react nommee 001 avec vite on utilise la commande qui est "npm create vite@latest 001 -- --template react"
// etape 2 : on entre dans le projet "cd 001"
// etape 3 : on installe les dependances nécessaire au projet "npm install"
// etape 4 : on demarre le serveur du developpement "npm run dev"
// etape 5 : on ouvre l adresse locale affichee dans le terminal generalement http://localhost:5173/,pour visualiser l application dans le navigateur
   
//    Le projet contient plusieurs dossiers et fichiers importants :

// * node_modules/ : contient les bibliothèques et dépendances nécessaires au fonctionnement du projet.
// * public/ : contient les fichiers statiques accessibles directement, comme certaines images.
// * src/ : contient le code source de l’application React.
// * src/main.jsx : permet de démarrer l’application React et d’afficher le composant principal.
// * src/App.jsx : contient le composant principal de l’application.
// * src/App.css : contient les styles CSS de l’application.
// * index.html : contient la page HTML de départ.
// * package.json : contient les informations du projet, les dépendances et les commandes disponibles.
// * package-lock.json : conserve les versions précises des dépendances installées.

// III. Réalisation du CV

// Le CV est organisé en trois composants React :

// 1. InfoPerso : présente les informations personnelles.
// 2. Experiences : présente les expériences et les projets réalisés.
// 3. Competences : présente les compétences techniques.

// Ces composants sont importés dans App.jsx pour être affichés sur une seule page.
