import React from 'react';
import Counter  from './Counter';

const Player = props => {
  return (
    <div className="player">
      <div className="player-name"  onClick={()=> props.selectPlayer(props.index)}>
        <a className="remove-player" onClick={()=>props.removePlayer(props.index)}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter 
        index={props.index}
        updatePlayerScore={props.updatePlayerScore}
        score={props.score} />
      </div>
    </div>
  );
}

export default Player;
// Player.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   score: React.PropTypes.number.isRequired,
//   onRemove: React.PropTypes.func.isRequired,
//   onScoreChange: React.PropTypes.func.isRequired,
// };