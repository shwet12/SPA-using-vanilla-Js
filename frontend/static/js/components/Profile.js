import Base from './base.js';

export default class extends Base {
    constructor() {
        super();
        this.setTitle('Profile');
    }

    async render() {
        return `
            <h1>Hello guys Shwet here!!</h1>
            <p>
                I am a software engineer with keen interest in Javascript. Lets connect on twitter.
                            </p>
            
        `;
    }
}

