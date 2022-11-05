import * as React from 'react';


class Mybutton extends React.Component {
    render() {
        const {disable, text} = this.props;
        return <button disabled= {disable}>{text}</button>
    }
}

export default Mybutton;