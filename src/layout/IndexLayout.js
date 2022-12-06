import React from 'react'
import { Header } from './header/Header';

export const IndexLayout = (props) => {
  return (
    <>
      <Header />
      <main className="p-[20px] w-auto min-h-screen pt-[100px] bg-slate-100">
        {props.children}
      </main>
    </>
  );
};
