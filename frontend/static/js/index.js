import { routes } from './routes.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {

    // check which route got matched
    const routesObject = routes.map((route) => {
        return {
            route: route,
            isMatched: location.pathname === route.path
        }
    });

    let matchedRoute = routesObject.find((route) => route.isMatched);

    if (!matchedRoute) {
        matchedRoute = {
            route: routes[0],
            isMatched: true
        }
    }
    const view = new matchedRoute.route.view();
    document.querySelector("#app").innerHTML = await view.render();
}

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})