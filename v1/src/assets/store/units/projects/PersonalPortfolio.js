import snapshot1 from './../../../images/projects/personal-portfolio/snapshot1.png';
import snapshot2 from './../../../images/projects/personal-portfolio/snapshot2.png';
import snapshot3 from './../../../images/projects/personal-portfolio/snapshot3.png';
import personalPortfolioCover from './../../../images/projects/personal-portfolio/snapshot4.png';
import snapshot5 from './../../../images/projects/personal-portfolio/snapshot5.png';
import snapshot6 from './../../../images/projects/personal-portfolio/snapshot6.png';
import snapshot7 from './../../../images/projects/personal-portfolio/snapshot7.png';
import snapshot8 from './../../../images/projects/personal-portfolio/snapshot8.png';


const PersonalPortfolio = {
    projectCover: personalPortfolioCover,
    projectSnapshots: [
        snapshot1,
        snapshot2,
        snapshot3,
        personalPortfolioCover,
        snapshot5,
        snapshot6,
        snapshot7,
        snapshot8
    ],
    projectTitle: 'Personal Portfolio',
    projectDescription: 'Personal portfolio showcasing projects, skills, experiences and other relevant information to quickly get to know me better.',
    projectDetails: {
        projectDemoUrl: 'http://nsp.surge.sh/',
        projectCodeUrl: 'https://github.com/npranto/personal-portfolio',
        projectWhat: 'Personal portfolio showcasing projects, skills, experiences and other relevant information to quickly get to know me better.',
        projectWhy: 'A personal portfolio nowadays became an automatic expectation from developers for recruiters and project managers to get to know candidates better before reaching out to them and probably hiring them. It\'s a great way to quickly take a glance and explore candidate projects and skills to determine their experience and capability',
        projectContributions: [
            'Prototyped with responsive design in mind for anyone to access on nearly any browser running device',
            'Implemented with HTML/CSS, React, React Router and Materialize.css',
            'Optimized run time performance by applying Webpack for module bundling and code splitting'
        ]
    }
}

export default PersonalPortfolio;