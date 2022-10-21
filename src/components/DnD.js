import React from 'react'
import { FileUploader } from 'react-drag-drop-files'

export const DnD = () => {

  const onUpload = (file) => {
    console.log(file)
  }

  return (
    <div>
      <h1>Drag-n-Drop a video</h1>
      <FileUploader 
        name='video'
        types={['MP4']}
        handleChange={onUpload}
      />
    </div>
  )
}
