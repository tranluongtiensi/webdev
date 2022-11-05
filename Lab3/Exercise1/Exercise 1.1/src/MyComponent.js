import React from 'react';

class MyComponent extends React.Component{
    state = {
        heading: "React Awesomesause (Busy)",
        content: "Loading..."
    };


    constructor() {
        super();

        setTimeout(() => {
            this.state({

                heading: "React Awesomesauce",
                content: "Done!"
            })
        }, 3000)
    }

    render() {
        const {heading, content} = this.state;
        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
    }
}

export default MyComponent;
