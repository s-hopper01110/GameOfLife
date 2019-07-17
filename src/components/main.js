import React from 'react';
import Grid from './grid';
import './cell.css';





class Main extends React.Component {
    constructor() {
        super();

        this.rows = 35;
        this.columns = 35;

        this.state = {
            generation: 0,
            //array for rows an cols
            initialGrid: Array(this.rows).fill().map(() => Array(this.columns).fill(false))
        }//this.state end

    }//constructor end

render() {
    return (
        <div>
            <h1> Conway's Game of Life</h1>
            <button>Start</button>
            <button>Stop</button>
            <button>Clear</button>
            <Grid initialGrid={this.state.initialGrid} rows={this.rows} columns={this.columns}/>
            <h2>Generation: {this.state.generation}</h2>
        </div>
    )

        
    
    }


}//end

export default Main;