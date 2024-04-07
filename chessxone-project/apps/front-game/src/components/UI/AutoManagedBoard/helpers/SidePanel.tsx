import React from 'react';

import styles from '../side-board.module.css';
import { Button } from '@chessxone-project/ui';

export type SidePanelProp = {
  blackPlayer: any;
  context: any;
  whitePlayer: any;
  movesWithNotation: any;
  offsetMove: any;
  handleNext: any;
  initiaseBoard: any;
};

const SidePanel = ({
  blackPlayer,
  context,
  whitePlayer,
  movesWithNotation,
  offsetMove,
  handleNext,
  initiaseBoard,
}: SidePanelProp) => {
  return (
    <div className={styles.side_panel_container}>
      <h3>Historical Games: <span> {whitePlayer} x {blackPlayer} | {context.slice(0, 40)}</span></h3>
      <div className={styles.header}>
        <div className={`${styles.player} flex`}>
          {whitePlayer}
          <img width={28} src='/pieces/WHITE_KING.svg' />
          {offsetMove % 2 === 0 ? <span>*</span> : ''}
        </div>
        <div className={`${styles.player} flex`}>
          {offsetMove % 2 === 1 ? <span>*</span> : ''}
          <img width={28} src='/pieces/BLACK_KING.svg' />
          {blackPlayer}
        </div>
      </div>
      <div>
        <MoveDisplay
          movesWithNotation={movesWithNotation}
          offsetMove={offsetMove}
        />
        <div className={styles.indicator_container}>
          <Button onClick={handleNext}>
            <img width="20" height="20" src="/icon/chevrons-right.svg" />
          </Button>
          <Button onClick={initiaseBoard}>
            <img width="20" height="20" src="/icon/rotate.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

type MoveDisplayProps = {
  movesWithNotation: string[];
  offsetMove: number;
};

const MoveDisplay = ({ movesWithNotation, offsetMove }: MoveDisplayProps) => (
  <p className={styles.moves_display}>
    {movesWithNotation.map((move, index) => (
      <span key={`${index}-${move}`} style={{ fontSize: '16px' }}>
        {index % 2 === 0 && (
          <span style={{ color: '#333', paddingLeft: '10px' }}>
            {Math.floor((index + 2) / 2)}.
          </span>
        )}
        <span className={index === offsetMove ? styles.active : ''}>
          {move}
        </span>
      </span>
    ))}
  </p>
);
