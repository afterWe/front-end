import React, { FC } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
