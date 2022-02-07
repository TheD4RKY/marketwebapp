import React from 'react'
import Image from 'next/image';
import Indexmenu from './Component/indexmenu';
import NavBar from './Component/classicnav';
import Footer from './Component/footer';
import Indexlogo from './Component/indexheader';

export default function index(){


  return (
    <div>
    <Indexlogo/>
    <Indexmenu/>
    <Footer />
    </div>
  );
};

