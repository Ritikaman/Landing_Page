import React from 'react'
import "./Achievement.css"
function Achievement() {
    return (
    <>
    <div className="image-gallery" style={{alignItems:"center"}}>
      <div className="image-wrapper"style={{borderRadius:"2rem"}}>
        <img style={{width:"400px",height:"300px",borderRadius:"2rem"}} src="https://www.iitbracing.org/assets/a1-A-pHDCYh.jpeg" alt="Image 1" />
        <h3 style={{display:"flex",justifyContent:"center"}}>2008:FS Michigan</h3>
      </div>
      <div className="image-wrapper" style={{borderRadius:"2rem"}}>
        <img style={{width:"400px",height:"300px",borderRadius:"2rem"}} src="https://www.iitbracing.org/assets/a4-BmzZ_Tp7.jpeg" alt="Image 1" />
        <h3 style={{display:"flex",justifyContent:"center"}}>2011:Bajaj SAE</h3>
      </div>
      <div className="image-wrapper" style={{borderRadius:"2rem"}}>
         <img style={{width:"400px",height:"300px",borderRadius:"2rem"}} src="https://www.iitbracing.org/assets/a16-C4n-jaMY.jpeg" alt="Image 1" />
        <h3 style={{display:"flex",justifyContent:"center"}}>2024:FS Bharat</h3>
      </div>
    </div>
    </>
    )
}

export default Achievement;
