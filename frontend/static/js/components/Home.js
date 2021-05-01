import Base from './base.js';

export default class extends Base {
    constructor() {
        super();
        this.setTitle('Home');
    }

    async render() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/blogs" data-link>View Blogs</a>.
            </p>
        `;
    }
}

