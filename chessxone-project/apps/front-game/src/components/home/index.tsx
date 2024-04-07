'use client'

import React from 'react';

import styles from './home.module.css';
import CreateGame from './helpers/create-game';
// import SuggestedPlayer from './helpers/suggested-player';
// import HistoricalGame from './helpers/historical';
// import SearchForPlayer from './helpers/search-for-player';

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <div className={styles.home_container}>
      {/* <SuggestedPlayer />
      <HistoricalGame />
      <SearchForPlayer /> */}
      <CreateGame />
    </div>
  );
};

export default HomeComponent;
