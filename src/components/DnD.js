import { OpenCvProvider } from 'opencv-react'
import React from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { OpenCV } from './OpenCV'
export const DnD = () => {

  const onUpload = (file) => {
    const vid = URL.createObjectURL(file)
    console.log(vid)
  }

  return (
    <div>
      <OpenCvProvider>
        <OpenCV />
      </OpenCvProvider>
      <h1>Drag-n-Drop a video</h1>
      <FileUploader 
        name='video'
        types={['MP4']}
        handleChange={onUpload}
      />
    </div>
  )
}
