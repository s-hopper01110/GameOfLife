import React from 'react';
import Grid from './grid';
import Buttons from './buttons';
import './cell.css';
// import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
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
		}; //this.state end
	} //constructor end

	//Selection of cells and
	cellSelection = (row, col) => {
		let gridCopy = clone(this.state.initialGrid);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			initialGrid: gridCopy
		});
	};

	//features:

	seed = () => {
		let gridCopy = clone(this.state.initialGrid);
		for (let i = 0; i < this.rows; i++) {
			for (let x = 0; x < this.columns; x++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][x] = true;
				}
			}
		}
		this.setState({
			initialGrid: gridCopy
		});
	};

	startButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.start, this.speed);
	};

	stopButton = () => {
		clearInterval(this.intervalId);
	};

	slow = () => {
		this.speed = 1000;
		this.startButton();
	};

	fast = () => {
		this.speed = 100;
		this.startButton();
	};

	clear = () => {
		const gridClear = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
		this.setState({
			initialGrid: gridClear,
			generation: 0
		});
    };
    
    gridSize = (size) => {
        switch (size) {
         case "1":
             this.columns = 20;
             this.rows = 10;
         break;
         case "2":
             this.columns = 50;
             this.rows = 30;
         break;
         default:
             this.columns = 70;
             this.rows = 50;
        }
        this.clear();

        
    }


	start = () => {
		let grid1 = this.state.initialGrid;
		//sets state using clone
		let grid2 = clone(this.state.initialGrid);
		// go thru every element in the grid:
		for (let i = 0; i < this.rows; i++) {
			for (let x = 0; x < this.rows; x++) {
				// rules:
				//count = how many neighbors exist
				let count = 0;
				if (i > 0) if (grid1[i - 1][x]) count++;
				if (i > 0 && x > 0) if (grid1[i - 1][x - 1]) count++;
				if (i > 0 && x < this.columns - 1) if (grid1[i - 1][x + 1]) count++;
				if (x < this.columns - 1) if (grid1[i][x + 1]) count++;
				if (x > 0) if (grid1[i][x - 1]) count++;
				if (i < this.rows - 1) if (grid1[i + 1][x]) count++;
				if (i < this.rows - 1 && x > 0) if (grid1[i + 1][x - 1]) count++;
				if (i < this.rows - 1 && x < this.columns - 1) if (grid1[i + 1][x + 1]) count++;
				//<2 || > 3 dies
				if (grid1[i][x] && (count < 2 || count > 3)) grid2[i][x] = false;
				if (!grid1[i][x] && count === 3) grid2[i][x] = true;
			}
		}
		this.setState({
			initialGrid: grid2,
			generation: this.state.generation + 1
		});
	};

	componentDidMount() {
		this.seed();
		this.startButton();
	}

	render() {
		return (
            
			<div>
				<h1> Conway's Game of Life</h1>
                <div className="div1">
                
                <ul>
                <h3>Rules:</h3>
                    <li>Any live cell with fewer than two live neighbors dies.</li>
                   <li>Any live cell with two or three live neighbors lives on to the next generation</li>
                   <li>Any live cell with more than three live neighbors dies</li>
                   <li>Any dead cell with three live neighbors becomes a live cell</li>
                </ul>   
                </div>
				<Buttons
					seed={this.seed}
					clear={this.clear}
					startButton={this.startButton}
					stopButton={this.stopButton}
					slow={this.slow}
					fast={this.fast}
					gridSize={this.gridSize}
				/>

				<Grid
					initialGrid={this.state.initialGrid}
					rows={this.rows}
					columns={this.columns}
					cellSelection={this.cellSelection}
				/>
				<h2>Generation: {this.state.generation}</h2>


                
			</div>
		);
    }
} //end

function clone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default Main;
