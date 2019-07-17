import React from 'react';
// import './display.css';

class Buttons extends React.Component {

    render () {
        return(
        <div>
            <button onClick={this.props.seed}>Seed</button>
             <button onClick={this.props.clear}>Clear</button>
            {/* <button onClick={this.props.seed}>Seed</button>
            <button onClick={this.props.seed}>Seed</button>  */}





           


        </div>

       ) 
    }

}

export default Buttons;

