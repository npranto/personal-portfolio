import deedCover from './../../../images/projects/deed/snapshot1.png';
import snapshot2 from './../../../images/projects/deed/snapshot2.png';
import snapshot3 from './../../../images/projects/deed/snapshot3.png';

const Deed = {
    projectCover: deedCover,
    projectSnapshots: [
        deedCover,
        snapshot2,
        snapshot3
    ],
    projectTitle: 'Deed',
    projectDescription: 'A mini social networking app that anyone can use to share their good deeds throughout the day. Users will be able to post, share and be inspired by other\'s deeds on their home feed. Deed is anuser generated content based app that aims to break a single circle of friends and their stories, rather opens new perspectives from new individuals everyday to create a positive outlook for theworld around us.',
    projectDetails: {
    	projectDemoUrl: null,
    	projectCodeUrl: 'https://github.com/npranto/deed',
    	projectWhat: 'Deed is a mini social networking web application that anyone can use to share their good deeds throughout the day. Users will be able to post, share and be inspired by other\'s deeds on their home feed.',
    	projectWhy: 'Deed is an user generated content based social platform that aims to help people move away from the single circle of friends and their stories trend and rather open a new ground for people to share new perspectives with new individuals everyday to inspire people and to create a positive outlook for the world around us.',
    	projectContributions: [
    		'Built full application from the front to the back end in three weeks',
    		'Implemented with HTML/CSS, AngularJS and Bootstrap for the client side',
    		'Used Express, Node.JS on the server side and MongoDB for database setup'
    	]
    }
}

export default Deed;