import React from 'react'
import Image from 'next/image';
import Indexmenu from './ComponentIndex/indexmenu';
import Footer from './ComponentIndex/footer';
import Indexlogo from './ComponentIndex/indexheader';

export default function index(){


  return (
    <div>
    <Indexlogo/>
    <Indexmenu/>
    <Footer />
    </div>
  );
};

