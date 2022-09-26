import React, { useRef, useState, useMemo } from 'react'
import Banner from "../components/Banner";
import Space from "../components/Canvas";

export default function testpage() {
 
  return (
    <div className="h-[100vh]">
        <div className="absolute z-10 w-full h-[100vh] grid place-content-center">
          <Banner/>
        </div>
        <Space/>
    </div>
    
  )
}