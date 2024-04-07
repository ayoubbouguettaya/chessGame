import React from 'react';

import styles from './layout.module.css';
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div
        className={`flex justify-end max-w-[1400px] m-auto`}
      >
        <p>Hello</p>
      </div>
    </footer>
  );
};

export default Footer;
