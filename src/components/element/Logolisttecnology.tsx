import { useState } from "react"
import { React } from "../../../public/tecLogo/react"
import { useGetSkillIdLazyQuery, useGetSkillQuery } from "../../graphql/generated"
import Image from "next/image";
import { Spinner } from "phosphor-react"
import { BarProgress } from "./BarProgress"
import { Loading } from "./Loading"


export const LogoListTecnology = () => {
    const [color, setColor] = useState("")
    const [bg, setBg] = useState("")
    const [width, setWidth] = useState<number>(0)
    const [skill, setSkill] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [getSkillGraph] = useGetSkillIdLazyQuery()
    const {data}= useGetSkillQuery()

    const getSkill = (id: string) => {
        setIsLoading(true)
        getSkillGraph({
            variables: {
                id
            }
        }).then(res => {
            if (res.data?.skill?.level) {
                if (res.data.skill.technology) {
                    setSkill(res.data.skill.technology)
                }
                if (res.data.skill.level < 49) {
                    setColor("border-red-300 shadow-red-300")
                    setBg("#ef4444")
                } else if (res.data.skill.level > 49 && res.data.skill.level < 74) {
                    setColor("border-yellow-300 shadow-yellow-300")
                    setBg("#eab308")
                } else if (res.data.skill.level > 74 && res.data.skill.level <= 100) {
                    setColor("border-green-300 shadow-green-300")
                    setBg("#22c55e")
                }
                var i = 0
                const delay =  setInterval(()=>{
                    i++
                    setWidth(i)
                    if(i >= Number(res.data?.skill?.level)){
                        clearInterval(delay)
                    }
                },0)
            }
            setIsLoading(false)
        })

    }
    return (
        <>
            {!data && <div className="flex-1 w-full flex justify-center"><Loading size={40}/></div>}
            <div className="grid text-2xl gap-x-2 gap-y-5 grid-cols-4 w-full">
                {data?.skills.map(skill =>{
                    return(
                        <div key={skill.id} className="logolist" onMouseEnter={() => { getSkill(skill.id) }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}>
                            <div className="w-16 h-2w-16 lg:w-16 lg:h-16 p-2 flex justify-center items-center">
                                {skill.img?.url && <Image  src={skill.img.url} width={130} height={130} objectFit="contain" alt="Imagem da ligaguem de programação" />}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full h-full flex justify-center items-center rounded bg-gradient-to-b from-transparent to-gray-900 p-4">
                {isLoading ? <Spinner size={30} className="animate-spin" /> : (
                    <div className="flex flex-col gap-y-2 lg:gap-8 w-full">
                        <div className="flex-1 h-32 lg:h-36 ">
                            <strong className="text-center text-3xl">score</strong>
                            <br/>
                            <div className="h-8 flex items-center uppercase text-orange-500"><strong>{skill}</strong></div>
                        </div>
                        <div className=" flex-1 flex justify-center ">
                            <strong className=" text-[160px] leading-none tracking-normal">{width}<span className="text-[75px] tracking-normal">%</span></strong>
                        </div>
                        <BarProgress
                            loading={` shadow-lg ${color}`}
                            width={width}
                            bgSpan={bg}
                        />
                    </div>
                )}
            </div>
        </>
    )
}