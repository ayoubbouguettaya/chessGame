'use client';
import React from 'react';

import styles from './home.module.css';
import SuggestedPlayer from './helpers/suggested-player';
import HistoricalGame from './helpers/historical';
import SearchForPlayer from './helpers/search';

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <div className={styles.home_container}>
      <SuggestedPlayer />
      <section className={styles.waiting_section}>
        <HistoricalGame/>
        <SearchForPlayer />
      </section>
    </div>
  );
};

export default HomeComponent;
