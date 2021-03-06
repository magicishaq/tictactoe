import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import calculateWinner from './calculateWinner'

//function components dont contain states
function Square ({value, onClick}) {
    return (
        <button className="square" 
        onClick={() => onClick()}>
          {value}
        </button>
      );
}
  
  class Board extends React.Component {
      constructor(props){
          super(props); 
          this.state = {
              squares: Array(9).fill(null), 
              isXNext: true
          }
      }
    
      handleClick(i) {
        const squares = this.state.squares.slice(); 
        //creates a copy of the array

        if(calculateWinner(squares) || squares[i]){
            return; 
            //stops the click event by leaving the function
        }
        squares[i] = this.state.isXNext ? 'X' : '0' //sets postion of square as X
        this.setState({squares: squares,
        isXNext: !this.state.isXNext}) //sets the new state
    }



    renderSquare(i) {
      return (<Square value={this.state.squares[i]} 
      onClick = { () => this.handleClick(i)}
      />)
    }
  
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.isXNext ? 'X' : '0') 
        }
    
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  

  /**
   * Helper functions
   */

   

  