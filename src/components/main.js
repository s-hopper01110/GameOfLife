import React from 'react';
import Grid from './grid';
import Buttons from './butons';
import './cell.css';





class Main extends React.Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 35;
        this.columns = 35;

        this.state = {
            generation: 0,
            //array for rows an cols -- sets as off
            initialGrid: Array(this.rows).fill().map(() => Array(this.columns).fill(false))
        }//this.state end

    }//constructor end

    //Selection of cells and 
    cellSelection = (row, col) => {
        let gridCopy = clone(this.state.initialGrid);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            initialGrid: gridCopy
        })
    }


    clear = () => {
        const gridClear = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
        this.setState({
            initialGrid: gridClear,
            generation: 0
        })
    }

    //features:

    seed = () => {
        let gridCopy = clone(this.state.initialGrid);
        for (let i = 0; i < this.rows; i++) {
            for (let x = 0; x < this.columns; x++) {
                if(Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][x] = true;
                }
        }
    }
        this.setState({
            initialGrid: gridCopy
        });
}

    componentDidMount() {
        this.seed();
    }

render() {
    return (
        <div>
            <h1> Conway's Game of Life</h1>
            <Buttons
            seed={this.seed}
            clear={this.clear}/>
            

            <Grid 
            initialGrid={this.state.initialGrid} 
            rows={this.rows} 
            columns={this.columns} 
            cellSelection={this.cellSelection}/>
            <h2>Generation: {this.state.generation}</h2>
        </div>
    )

        
    
    }


}//end

function clone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

export default Main;