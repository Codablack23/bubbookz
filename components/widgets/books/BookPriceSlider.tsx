import { Slider } from "antd";
import { useState } from "react";

type Range = [number,number]
export default function BookPriceSlider({rangeObj}){
   const [range,setRange] = useState<Range>([0,100])
   const {range:rangeState,setRange:setRangeState} = rangeObj

   function handleChange(pos:number){
    return (e)=>{
      setRange((prev)=>{
        const newRange:Range = [...prev]
        newRange[pos] = e.target.value/500
        return newRange
      })
    }
   }
   function applyRange(){
    const newRange = [
      range[0] * 500, 
      range[1] * 500
    ]
    setRangeState(newRange)
   }

   const onChange=(value:[number,number])=> setRange(value)
    return(
        <div className="w-100 card book-price-slider min-vh-30">
        <header className="flex align-items-center justify-content-space-between">
        <p className="small-20 fw-red">Price (N)</p>
        <p className="text-theme small-16" onClick={applyRange}>Apply</p>
        </header><br />
          <Slider range onChange={onChange} value={range} defaultValue={[0,100]}/>
          <div className="flex align-items-center mxw-100">
              <div className="price-range">
                <input 
                type="number" 
                min={0}
                max={50000}
                value={range[0] * 500} 
                id="" onChange ={handleChange(0)} />
              </div>
              <p><i className="bi bi-dash-lg"></i></p>
              <div className="price-range">
                <input 
                type="number"
                min={0}
                max={50000}
                value={range[1] * 500} 
                id="" onChange ={handleChange(1)} />
              </div>

          </div>
        </div>
    )
}