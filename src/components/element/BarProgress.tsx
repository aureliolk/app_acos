import { useEffect, useState } from "react"

interface ProgressBarProps{
    width:number
    loading: string
    bgSpan: string
}

export const BarProgress = ({width,loading,bgSpan}:ProgressBarProps) => {
    
    const [lastSpan, setLastSpan] = useState<number>(0)
    
    useEffect(()=>{
        const bar = document.querySelector(".loading-bar.progress")
        const allSpan = document.querySelectorAll(".loading-bar.progress span")
        
        if(allSpan.length > 0){
            setLastSpan(width)
            for (let index = 0; index < allSpan.length; index++) {
                if(allSpan[index].className != "last"){
                    allSpan[index].remove()
                }
            }
        }
        if(width > 10 && width < 99){
            setLastSpan(Number(width.toFixed()[1]))   
            for (let index = 0; index < Number(width.toFixed()[0]); index++) {
                bar?.insertAdjacentHTML("afterbegin",`<span style="background-color:${bgSpan}">`)                
            }
        }else{
            setLastSpan(Number(width.toFixed()[2]))   
            for (let index = 0; index < Number(width.toFixed()[0]+width.toFixed()[1]) ; index++) {
                bar?.insertAdjacentHTML("afterbegin",`<span style="background-color:${bgSpan}">`)                
            }
            
        }
        
    },[width])  


    return (
        <div className=" w-80 gap-5 flex flex-col text-gray-900">
            <div className="loading-bar">
                <div className={`loading-bar progress ${loading}`}>
                    <span className="last" style={{ width: `${lastSpan}%`, backgroundColor:`${bgSpan}`}}></span>
                </div>
            </div>
        </div>
    )
}


