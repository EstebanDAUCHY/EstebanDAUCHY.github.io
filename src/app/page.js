const ArrayProjets = [
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]

    },
    {
        nom : "Projet 1",
        description : "Décrire le projet",
        technos: ["tec1", "tec2", "tec3"]
    },
];

const ArrayExperiences = [
    {
        poste : "Nom du poste",
        Description : "Quel était mon role",
        Dates : [21-11-24, 22-11-24]
    },
    {
        poste : "Nom du poste",
        Description : "Quel était mon role",
        Dates : [21-11-24, 22-11-24]
    },
    {
        poste : "Nom du poste",
        Description : "Quel était mon role",
        Dates : [21-11-24, 22-11-24]
    },
    {
        poste : "Nom du poste",
        Description : "Quel était mon role",
        Dates : [21-11-24, 22-11-24]
    },
    {
        poste : "Nom du poste",
        Description : "Quel était mon role",
        Dates : [21-11-24, 22-11-24]
    },
]

const ArraySocial = [
    {
        lien : "https://www.instagram.com/die._a_.king/",
        nom : "Instagram"
    },
    {
        lien : "https://www.linkedin.com/in/esteban-dauchy/",
        nom : "LinkedIn"
    },
    {
        lien : "https://github.com/EDauchy",
        nom : "GitHub"
    },
    {
        lien : "mailto:estebandauchy@gmail.com",
        nom : "Email"
    }
]

const ArrayCompetences = [
    {
        type: "web",
        competences: [
            { nom: "HTML5"},
            { nom: "PHP"},
            { nom: "CSS3"},
            { nom: "JavaScript"},
            { nom: "Angular"},
            { nom: "TypeScript"},
            { nom: "Flask.py"}
        ]
    },
    {
        type: "developpement",
        competences: [
            { nom: "Python"},
            { nom: "Java / Kotlin"},
            { nom: "JavaScript"},
            { nom: "C++"},
            { nom: "Shell"}
        ]
    },
    {
        type: "outils",
        competences: [
            { nom: "GitLab"},
            { nom: "GitHub"},
            { nom: "VS Code"},
            { nom: "Docker"},
            { nom: "JetBrains"}
        ]
    }
]
export default function Home() {
    return (
        <div>
            <div className="Intro">
                <div className="text-content">
                    <h3>Bienvenue sur mon portfolio !</h3>
                    <h1>Je suis <span>Esteban DAUCHY</span></h1>
                    <h3>et je suis <span>étudiant alternant en informatique</span></h3>
                    <p>Étudiant en deuxième année d'informatique avec l'option développement d'application, je suis
                        fier de vous faire découvrir mon Portfolio !</p>
                    <p>Réalisé dans le cadre de mes études, je me présente en mettant en œuvre mes compétences en
                        <span> développement FrontEnd</span>, <span>Ecodéveloppement</span> et <span>NextJS</span>.
                    </p>
                </div>
            </div>

            <div className="Contact">
                <h3>Contactez-<span>moi</span> :</h3>
                <div className="box-container">
                    {ArraySocial.map((valeur, index) => (
                        <a key={index} className="boxSocial" href={valeur.lien} target="_blank">
                            <h3>{valeur.nom}</h3>
                        </a>
                    ))}
                </div>
            </div>

            <div className="about-me">
                <div className="text-content">
                    <h3>A propos de <span>moi</span></h3>
                    <p>Je suis actuellement en troisième année de BUT informatique avec le parcours développement
                        d'application
                        à l'université de Lens (62300). Mes envies de m'orienter vers l'informatique ont commencé en
                        première au
                        lycée André Malraux de Béthune (62400) lorsque j'ai sélectionné l'option Numérique et Sciences
                        de l'informatique
                        (NSI) en plus des options Sciences de l'Ingénieur et Mathématiques dans un Bac général option
                        Euro Anglais.
                    </p>
                    <p>Au fil des années passées à développer et à comprendre des systèmes d'informations complexes,
                        grâce à la qualité
                        des enseignements de mon IUT, j'ai pu obtenir une alternance au sein de CGI Lille, société de
                        prestation de
                        service canadienne.
                    </p>
                </div>
                <div className="image-container">
                    <img src="../../images/Moi (1).svg" alt="Moi"/>
                </div>
            </div>

            <div className="Competences">
                <h3>Mes <span>compétences</span></h3>
                <div className="box-container">
                    <div className="column">
                        <h3>Web</h3>
                        {ArrayCompetences.find(categorie => categorie.type === "web").competences.map((competence, index) => (
                            <div key={index} className="competences-item">
                                <p>{competence.nom}</p>
                            </div>
                        ))}
                    </div>

                    <div className="column">
                        <h3>Développement</h3>
                        {ArrayCompetences.find(categorie => categorie.type === "developpement").competences.map((competence, index) => (
                            <div key={index} className="competences-item">
                                <p>{competence.nom}</p>
                            </div>
                        ))}
                    </div>

                    <div className="column">
                        <h3>Outils</h3>
                        {ArrayCompetences.find(categorie => categorie.type === "outils").competences.map((competence, index) => (
                            <div key={index} className="competences-item">
                                <p>{competence.nom}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="Projets">
                <h3>Mes <span>projets</span> :</h3>
                <div className="box-container">
                    {ArrayProjets.map((projet, index) => (
                        <div key={index} className="box">
                            <h1>{projet.nom}</h1>
                            <p>{projet.description}</p>
                            <ul>
                                {projet.technos.map((techno, techIndex) => (
                                    <li key={techIndex}>{techno}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

