import React, { useState } from 'react'

export const ScreenShot = () => {

  const [screenShot, setScreenShot] = useState(false);
  const [screenShotImg, setScreenShotImg ] = useState('')

  const takeScreenShot = () => {
    var canvas = document.createElement('canvas');
    let video = document.getElementById('video')

    canvas.width = 640
    canvas.height = 640

    var ctx = canvas.getContext('2d')
    ctx.drawImage( video, 0, 0, canvas.width, canvas.height)
    const img = canvas.toDataURL('image/jpeg')
    
    setScreenShot(true)
    setScreenShotImg(img)
  }

  return (
    <div className='flex-col' style={{paddin:'1rem'}}>
      <button onClick={takeScreenShot}>Screenshot</button>
      {
        screenShot ? <img  src={screenShotImg} width='300px'/>
        : <p>no screen shot</p>
      }
    </div>
  )
}
