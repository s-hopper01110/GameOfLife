import React from 'react';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';

// import './display.css';

class Buttons extends React.Component {
    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }
 
    render () {
        return(
        <div className = "button-center">
            <ButtonToolbar>
            <button onClick={this.props.seed}>Seed</button>
             <button onClick={this.props.clear}>Clear</button>
            <button onClick={this.props.startButton}>Start</button>
            <button onClick={this.props.stopButton}>Stop</button> 
            <DropdownButton 
                title = "Grid Size"
                id="size-menu"
                onSelect={this.handleSelect}
            >
                <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
            </DropdownButton>
            </ButtonToolbar>
        </div>

       ) 
    }

}

export default Buttons;

