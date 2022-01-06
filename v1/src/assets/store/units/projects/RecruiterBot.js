import recruiterBotCover from './../../../images/projects/recruiter-bot/snapshot1.png';
import snapshot2 from './../../../images/projects/recruiter-bot/snapshot2.png';
import snapshot3 from './../../../images/projects/recruiter-bot/snapshot3.png';
import snapshot4 from './../../../images/projects/recruiter-bot/snapshot4.png';


const RecruiterBot = {
    projectCover: recruiterBotCover,
    projectSnapshots: [
        recruiterBotCover,
        snapshot2,
        snapshot3,
        snapshot4
    ],
    projectTitle: 'RecruiterBot',
    projectDescription: 'A customized slack bot integration and an application that connects recruiters and candidates to fill technical positions through the slack app.',
    projectDetails: {
    	projectDemoUrl: 'http://recruiter-bot.herokuapp.com/#/',
    	projectCodeUrl: 'https://github.com/RecruiterBot',
    	projectWhat: 'A customized slack bot integration and an application that connects recruiters and candidates to fill technical positions through the slack application.',
    	projectWhy: 'The purpose of RecruiterBot is to simplify searching candiates for technical positions for recruiters. It also creates a platform for new developers to get in touch with tech industry easliy.',
    	projectContributions: [
    		'Built nearly the entire front end user interface for the recruiterBot application individually using AngularJS framework',
    		'Applied Bootstrap web framework to tabbed components and views for customization, styling, and responsiveness'
    	]
    }
}

export default RecruiterBot;