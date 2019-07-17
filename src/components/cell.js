import React from 'react';
import './cell.css';



class Cell extends React.Component {
    cellSelection = () => {
        this.props.cellSelection(this.props.rows, this.props.columns)
    }

    render() {
        return (
            <div 
            className={this.props.cellClass} 
            id={this.props.id} 
            onClick={this.cellSelection}
             />
        )
    }    
}

export default Cell; 