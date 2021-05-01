import Base from './base.js';

export default class extends Base {
    constructor() {
        super();
        this.setTitle('Blogs');
    }

    async render() {
        return `
            <h1>Please check out my Blogs</h1>
            <p>
            This is a demo for SPA usinng vanilla Javascript.
            </p>
            
        `;
    }
}

