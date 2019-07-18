import React from 'react';
import Cell from './cell';


class Grid extends React.Component {
    render() {
        const width = this.props.columns * 14;
        const rowsArray = [];

        for (let i = 0; i < this.props.rows; i++) {
            for (let x = 0; x < this.props.columns; x++) 
            {
                let cellId = i + "_" + x;
                //[i][j] - specific spot in the grid
                let cellClass = this.props.initialGrid[i][x] ? "cell on" : "cell off";
                rowsArray.push(
                    <Cell
                    cellClass={cellClass}
                    key={cellId}
                    cellId={cellId}
                    rows={i}
                    columns={x}
                    cellSelection={this.props.cellSelection}
                    />
                )


            }
        }

        return (
            <div className="grid" style={{width:width}}>
            {rowsArray}
            </div>
        )       

    }

    

}

export default Grid;