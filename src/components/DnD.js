import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { ScreenShot } from './ScreenShot';

export const DnD = () => {

  const onUpload = (file) => {
    const vid = URL.createObjectURL(file)
    let video = document.getElementById('video')
    let source = document.getElementById('source')

    source.setAttribute('src', vid)
    video.load()
  }


  return (
    <div>
      <h1>Drag-n-Drop a video</h1>
      <div className='flex-row flex-center'>
        <FileUploader 
          name='video'
          types={['MP4']}
          handleChange={onUpload}
        />
      </div>

      <div>
        <video id='video' controls>
          <source id='source' type='video/mp4' />
        </video>
      </div> 

    </div>
  )
}
