import React from 'react';

import {
  BLACK,
  Board,
  columnNotation,
  EMPTY,
  rowNotation,
} from '@chessxone-project/core';

import styles from '../dump-board.module.css';

export type DisplayBoardProps = {
  boardState: Board;
};
const DisplayBoard = ({ boardState }: DisplayBoardProps) => {
  return (
    <div className={styles.board_container}>
      <div className={` ${styles.vertical_notation}`}>
        {rowNotation.map((index) => (
          <span key={index}> {index}</span>
        ))}
      </div>
      <div>
        <div className={` ${styles.board}`}>
          {boardState.map((row) => {
            return row.map((square) => (
              <DumpSquare key={`${square.row}-${square.column}`} {...square} />
            ));
          })}
        </div>
        <div className={`${styles.horizontal_notation}`}>
          {columnNotation.map((index) => (
            <span key={index}> {index}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;

type DumpSquareProps = {
  bgColor?: any;
  notation?: any;
  piece?: any;
  player?: any;
};
const DumpSquare = ({ bgColor, notation, piece, player }: DumpSquareProps) => {
  const bgColorStyles = bgColor === BLACK ? styles.black : styles.white;

  return (
    <div
      aria-label={notation}
      className={`${styles.square} 
            ${bgColorStyles}
              `}
    >
      {piece !== EMPTY && <img src={`/pieces/${player}_${piece}.svg`} />}
    </div>
  );
};
