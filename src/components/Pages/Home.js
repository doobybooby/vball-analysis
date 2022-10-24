import React from 'react'
import { AnalyzeButton } from '../AnalyzeButton'
import { DnD } from '../DnD'
import { ScreenShot } from '../ScreenShot'

export const Home = () => {
  return (
    <div>
      <DnD />
      
      <div className='flex-row justify-around' >
        <ScreenShot />
        <ScreenShot />
        <ScreenShot />
      </div>

      <AnalyzeButton />

    </div>
  )
}
