import { useOpenCv } from 'opencv-react'
import React, { useEffect } from 'react'

export const OpenCV = () => {

  const data = useOpenCv()
  console.log(data)

  return (
    <div>OpenCV</div>
  )
}
