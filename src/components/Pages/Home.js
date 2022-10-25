import React from 'react'
import { AnalyzeButton } from '../AnalyzeButton'
import { DnD } from '../DnD'
import { ScreenShot } from '../ScreenShot'

export const Home = () => {

  const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
  // const LandmarkGrid = window.LandmarkGrid;
  // const grid = new LandmarkGrid(landmarkContainer)
  // console.log( grid)


  return (
    <div>
      <DnD />
      
      <div className='flex-row justify-around' >
        <ScreenShot />
        <ScreenShot />
        <ScreenShot />
      </div>

      <AnalyzeButton />

      <div className="landmark-grid-container"></div>
    </div>
  )
}
