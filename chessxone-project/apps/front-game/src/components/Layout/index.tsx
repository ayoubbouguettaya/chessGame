import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const LayoutComponent = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-180px)]">
      {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutComponent;
