import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Blogs from './components/Blogs.js';

export const routes = [
    { path: '/', view: Home },
    { path: '/profile', view: Profile },
    { path: '/blogs', view: Blogs },

];