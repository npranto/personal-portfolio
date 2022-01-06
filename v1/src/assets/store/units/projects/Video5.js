import video5Cover from './../../../images/projects/video5/snapshot3.png';
import snapshot1 from './../../../images/projects/video5/snapshot1.png';
import snapshot2 from './../../../images/projects/video5/snapshot2.png';
import snapshot4 from './../../../images/projects/video5/snapshot4.png';


const Video5 = {
    projectCover: video5Cover,
    projectSnapshots: [
        video5Cover,
        snapshot1,
        snapshot2,
        snapshot4
    ],
    projectTitle: 'Video5',
    projectDescription: 'A very simple clone of Youtube - lets people search for YouTube videos quickly and efficiently',
    projectDetails: {
    	projectDemoUrl: 'http://video5.surge.sh/',
    	projectCodeUrl: 'https://github.com/npranto/video5',
    	projectWhat: 'A very simple clone of Youtube - lets people search for YouTube videos quickly and efficiently.',
    	projectWhy: 'Video5 is mini alternative to YouTube that lets people search for their favorite videos and get them instantly',
    	projectContributions: [
    		'Implements a single page video player application with React library to extend knowledge and tools of the new framework',
    		'Connects with the Youtube API to search for the intended videos quickly and efficiently'
    	]
    }
}

export default Video5;