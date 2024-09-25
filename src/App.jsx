import React, { useState } from 'react'
import { ProductData } from './const/utils/app'
const App = () => {
   const [BgImg , setBgImg] =useState(ProductData[0].bgImage)
   const [bgColor , setBgColor] = useState(ProductData[0].bgColor)
   const [juice , setJuice] = useState(ProductData[0].name)
   const [textColor , setTextColor] = useState(ProductData[0].textColor)
  const DisplayImg= (id)=>{
            const findImg = ProductData.find((item)=>{
              return item.id == id
            })

            setBgImg(findImg.bgImage)
            setBgColor(findImg.bgColor)
            setJuice(findImg.name)
            setTextColor(findImg.textColor)
            
  }
  return (
  <>
   
   <div className={`flex justify-around h-[600px] ${bgColor} mt-20`}>

    <div className={`flex flex-col justify-end `}>
      <img src={BgImg}  alt="" className='w-96 h-[500px]'/>
    </div>

    <div className='flex flex-col justify-start items-center gap-28'>
      <div>
        <img src="./assets/images/Content.png" className='w-80' alt="" />
      </div>
      <div className='flex'>
        {
          ProductData.map((item)=>{
            return(
              <>
              <div onClick={()=>DisplayImg(item.id)} key={item.id }>
                <img  src={item.smImage} className="w-40 h-40" alt="" />
                
              </div>
              </>
            )
          })
        }
      </div>
        <h1 className={`text-7xl font-bold ${textColor} `}>{juice}</h1>

    </div>

   </div>

  </>
  
  )
}

export default App