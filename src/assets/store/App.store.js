import portfolioAuthorPortrait from './../images/portrait_placeholder.png';

import {SOCIALS} from './aisles/Socials.aisle.js';
import {NAVIGATION_ROUTES} from './aisles/NavigationRoutes.aisle.js';
import {TYPEWRITER_POSITIONS} from './aisles/TypewriterPositions.aisle.js';
import {EXPERIENCES} from './aisles/Experiences.aisle.js';
import {ABOUT} from './aisles/About.aisle.js';
import {ABOUT_SLIDESHOW} from './aisles/AboutSlideshow.aisle.js';
import {FRONT_END_TECHS} from './aisles/FrontEndTechs.aisle.js';
import {BACK_END_TECHS} from './aisles/BackEndTechs.aisle.js';
import {BUILD_TOOLS_AND_DEPEN_MNG} from './aisles/BuildToolsAndDepenMng.aisle.js';
import {COURSES} from './aisles/Courses.aisle.js';
import {INSTITUTIONS} from './aisles/Institutions.aisle.js';
import {PROJECTS} from './aisles/Projects.aisle.js';

const AppStore = {
    portfolioAuthorName: 'Nazmuz Shakib Pranto',
    portfolioAuthorPortrait: portfolioAuthorPortrait,
    socials: SOCIALS,
    navigationRoutes: NAVIGATION_ROUTES,
    typewriterPositions: TYPEWRITER_POSITIONS,
    experiences: EXPERIENCES,
    about: ABOUT,
    aboutSlideshow: ABOUT_SLIDESHOW,
    frontEndTechs: FRONT_END_TECHS,
    backEndTechs: BACK_END_TECHS,
    buildToolsAndDepenMng: BUILD_TOOLS_AND_DEPEN_MNG,
    courses: COURSES,
    institutions: INSTITUTIONS,
    projects: PROJECTS
}

export default AppStore;
