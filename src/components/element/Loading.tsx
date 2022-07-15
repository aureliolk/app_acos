import { Spinner } from "phosphor-react"

interface LoadingProps{
    size?:number
}

export const Loading=({size}:LoadingProps)=>{
    return <Spinner className="animate-spin" size={size}></Spinner>
}