import weatherArtCover from './../../../images/projects/weather-art/snapshot1.png';
import snapshot2 from './../../../images/projects/weather-art/snapshot2.png';

const WeatherArt = {
    projectCover: weatherArtCover,
    projectSnapshots: [
        weatherArtCover,
        snapshot2
    ],
    projectTitle: 'WeatherArt',
    projectDescription: 'Get a quick glimpse of the weather for your favorite U.S. cities',
    projectDetails: {
    	projectDemoUrl: 'http://weatherart.surge.sh/',
    	projectCodeUrl: 'https://github.com/npranto/weather-art',
    	projectWhat: 'Get a quick glimpse of the weather for your favorite U.S. cities.',
    	projectWhy: 'Video5 is mini alternative to YouTube that lets people search for their favorite videos and get them instantly',
    	projectContributions: [
    		'A farely simple, yet useful application to get a quick overview of the weather of your favorite cities or destinations.',
    		'Going to Seattle anytime soon, get a glimpse of of the average temperature, pressure and humidity for the upcoming week.',
    		'Provides a visual graph to show incremental and decremental factors in the weather for the next few days',
    		'Implements Redux with React to provide to practice and provide a better data management for application',
    		'Uses Google Maps API to provide a visual layout for city searches'
    	]
    }
}

export default WeatherArt;