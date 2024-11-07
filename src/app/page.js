const ArrayProjets = [
    {
        nom : "Poké WG2D",
        description : "Un pokédex réalisé en Flask.py, HTML5 et CSS3 grâce à l'API Tyradex"
    },
    {
        nom : "Le Panthéon",
        description : "Site web en PHP, Laravel, Blade permettant de créer et consulter des histoires dont vous êtes le héros !"
    },
    {
        nom : "FlatCraft",
        description : "Un jeu vidéo 2D réalisé en Java reprenant le style graphique et la manière de jouer de minecraft"
    },
    {
        nom : "J-O 2024",
        description : "Création d'un site web en PHP, Laravel, Blade regroupant les différents évènements et sportifs lors des Jeux Olympique de 2024"
    },
    {
        nom : "Ray-tracing App",
        description : "Application de lanceur de rayon (rendu 3D) réalisé en Java"
    },
    {
        nom : "Fractals Creator",
        description : "Application créée en Java permettant de générer différentes fractales selon les modèles les plus connus  ",
    },
    {
        nom : "Application Météo",
        description : "Réalisation d'une application météo avec Flask.py en utilisant l'API wttr.in",
    },
    {
        nom : "Guide des jeux",
        description : "En cours de création d'un site web permettant de regrouper tous les jeux existants"

    }
];

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
];

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
            { nom: "Flask.py"},
            { nom: "Laravel"},
            { nom: "JavaSpring"},
            { nom: "ReactJS"},
            { nom: "NextJS"}
        ]
    },
    {
        type: "developpement",
        competences: [
            { nom: "Python"},
            { nom: "Java / Kotlin"},
            { nom: "JavaScript"},
            { nom: "C++"},
            { nom: "Shell"},
            { nom: "Groovy"},
            { nom: "SQL"},
            { nom: "MongoDB"}
        ]
    },
    {
        type: "outils",
        competences: [
            { nom: "GitLab"},
            { nom: "GitHub"},
            { nom: "VS Code"},
            { nom: "Docker"},
            { nom: "Suite JetBrains"},
            { nom: "Control-M"},
            { nom: "Jira"},
        ]
    }
]
export default function Home() {
    return (
        <div>
            <link rel="icon" href="../../images/Moi.webp" type="image/x-icon"/>
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
                            <h4>{valeur.nom}</h4>
                        </a>
                    ))}
                </div>
            </div>
            <div className="about-me">
                <div className="text-content">
                    <h3>A propos de <span>moi</span></h3>
                    <p>Je suis actuellement en troisième année de BUT informatique avec le parcours développement d'application à<span>l'université de Lens (62300)</span>.
                        Mes envies de m'orienter vers l'informatique ont commencé en première au <span> lycée André Malraux de Béthune (62400)</span> lorsque j'ai sélectionné
                        l'option Numérique et Sciences de l'informatique (NSI) en plus des options Sciences de l'Ingénieur et Mathématiques dans un Bac général option Euro Anglais.
                    </p>
                    <p>Au fil des années passées à développer et à comprendre des systèmes d'informations complexes, grâce à la qualité des enseignements de mon université,
                        j'ai pu obtenir une alternance au sein de <span>CGI Lille</span>, une société de prestation de service canadienne qui opère dans le monde entier.
                        Dans cette entreprise pour laquelle je suis <span>alternant</span>, j'occupe actuellement le poste de <span>DevOPS</span> et <span>développeur junior</span>, ce qui me permet de maîtriser plus d'outils, de technologies, de langages, et bien plus encore...
                    </p>
                    <p>
                        En dehors de mon travail, j'aime beaucoup le sport et plus particulièrement le volley au club
                        de <span><a href="https://www.facebook.com/groups/volleycuinchy?locale=fr_FR" target="_blank">Cuinchy
                        Volleyball</a></span> pour lequel je suis joueur mais également membre de la direction en tant que
                        responsable de la communication numérique.
                        Je suis également passionné par la musique en tout genre, tout type et toute époque, ayant tout
                        de même une légère préférence pour le Rock et le Metal.
                        J'aime également sortir avec des amis, rencontrer de nouvelles personnes, et profiter lorsque
                        j'ai du temps libre avec des personnes qui me sont chères.
                    </p>
                </div>
                <div className="image-container">
                    <img src="../../images/Moi.webp" alt="Moi"/>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

