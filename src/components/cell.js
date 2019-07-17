import React from 'react';
import './cell.css';



class Cell extends React.Component {


    render() {
        return (
            <div 
            className={this.props.cellClass} 
            id={this.props.id} 
            // onClick={this.selectBox}
             
            />
        )
    }    
}

export default Cell; 