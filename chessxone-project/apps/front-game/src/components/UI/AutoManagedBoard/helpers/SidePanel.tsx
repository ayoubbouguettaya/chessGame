import React from 'react';

import styles from '../automanaged-board.module.css';

export type SidePanelProp = {
  blackPlayer: any;
  context: any;
  whitePlayer: any;
  comments: any;
  movesWithNotation: any;
  offsetMove: any;
  showComment: any;
  toggleComment: any;
  handleNext: any;
  initiaseBoard: any;
};

const SidePanel = ({
  blackPlayer,
  context,
  whitePlayer,
  comments,
  movesWithNotation,
  offsetMove,
  showComment,
  toggleComment,
  handleNext,
  initiaseBoard,
}: SidePanelProp) => {
  return (
    <div className={styles.side_panel_container}>
      <div className={styles.header}>
        <p className={styles.player}>{whitePlayer} </p>
        <p>{context.slice(0, 40)}</p>
        <p className={styles.player}>{blackPlayer}</p>
      </div>
      <div>
        <div className={styles.indicator_container}>
          <button onClick={handleNext}>
            <img width="20" height="20" src="/icon/chevrons-right.svg" />
          </button>
          <button onClick={initiaseBoard}>
            <img width="20" height="20" src="/icon/rotate.svg" />
          </button>
        </div>
        <div className={styles.comment_container}>
          {showComment ? (
            <CommentSection toggleComment={toggleComment} comments={comments} />
          ) : (
            <MoveDisplay
              movesWithNotation={movesWithNotation}
              offsetMove={offsetMove}
            />
          )}
          <div style={{ marginLeft: 'auto' }}>
            <button onClick={toggleComment}>
              <img width="20" height="20" src="/icon/message-square.svg" />
            </button>
            <button>
              <img width="20" height="20" src="/icon/heart.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

type CommentProps = {
  comments: string[];
  toggleComment: () => void;
};

const CommentSection = ({ comments, toggleComment }: CommentProps) => {
  return (
    <div className={styles.comments}>
      <button onClick={toggleComment}>
        <img width="20" height="20" src="/icon/arrow-left.svg" />
      </button>
      <div>
        {comments.map((comment) => (
          <p key={comment}>{comment}</p>
        ))}
      </div>
      <input placeholder="sorry you can't comment" />
    </div>
  );
};

type MoveDisplayProps = {
  movesWithNotation: string[];
  offsetMove: number;
};

const MoveDisplay = ({ movesWithNotation, offsetMove }: MoveDisplayProps) => (
  <p className={styles.moves_display}>
    {movesWithNotation.map((move, index) => (
      <span key={`${index}-${move}`} style={{ fontSize: '12px' }}>
        {index % 2 === 0 && (
          <span style={{ color: '#87CEFA', paddingLeft: '10px' }}>
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
