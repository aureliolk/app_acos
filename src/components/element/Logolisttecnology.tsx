import { useState } from "react"
import { Apollo } from "../../../public/tecLogo/apollo"
import { Css } from "../../../public/tecLogo/css"
import { GraphCms } from "../../../public/tecLogo/graphcms"
import { GraphQl } from "../../../public/tecLogo/graphql"
import { Html5 } from "../../../public/tecLogo/html"
import { JavaScript } from "../../../public/tecLogo/javascript"
import { Next } from "../../../public/tecLogo/next-js"
import { React } from "../../../public/tecLogo/react"
import { Sass } from "../../../public/tecLogo/sass"
import { Shopify } from "../../../public/tecLogo/shopify"
import { TailWindCss } from "../../../public/tecLogo/tailwindcss"
import { TypeScript } from "../../../public/tecLogo/typescript"
import { WooCommerce } from "../../../public/tecLogo/woocommerce"
import { WordPress } from "../../../public/tecLogo/wordpress"
import { useGetSkillIdLazyQuery, useGetSkillQuery } from "../../graphql/generated"
import Image from "next/image";
import { Spinner } from "phosphor-react"
import { BarProgress } from "./BarProgress"


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

    console.log(data)
    return (
        <>
            {/* <div className="grid text-2xl gap-x-2 gap-y-5 grid-cols-4 w-full">
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cquiba1ema0blp1o881a4j") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Html5 /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cquu1v1qng0bknw94ca4ad") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Css /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cqtxl31qip0bknemjr4ape") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><JavaScript /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehbowu6ntk0bknluicts0i") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Sass /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6w9xp38t60blp8mh48bpt") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><TailWindCss /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehcpoz6nuo0bkna8tbotvj") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><React /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cwzwh82ews0bkndjh690pe") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><TypeScript /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6osou385o0blpd15oqoik") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Next /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6ocya3khe0bknykdhhuvm") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Apollo /></div></div>
                <div className="logolist3" onMouseEnter={() => { getSkill("cl5d6nzdp3kf70bknzdpbugid") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14  lg:w-12 lg:h-14 p-2 flex justify-center items-center"><GraphCms /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6nnn038130blpdto6t27i") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><GraphQl /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehdto26nxl0bknwryrni73") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Shopify /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehedw86nzn0bknhank2xba") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><WooCommerce /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5dzuthr5cv10bknlb395xw1") }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><WordPress /></div></div>
            </div> */}
            <div className="grid text-2xl gap-x-2 gap-y-5 grid-cols-4 w-full">
                {data?.skills.map(skill =>{
                    return(
                        <div key={skill.id} className="logolist" onMouseEnter={() => { getSkill(skill.id) }} onMouseLeave={() => { setWidth(0), setSkill(""), setColor(""), setBg("") }}>
                            <div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center">
                                {skill.img?.url && <Image  src={skill.img.url} width={64} height={64} objectFit="contain" />}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full h-full flex justify-center items-center rounded bg-gradient-to-b from-transparent to-gray-900 p-4">
                {isLoading ? <Spinner size={30} className="animate-spin" /> : (
                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex-1 h-36">
                            <strong className="text-center text-3xl">score</strong>
                            <br/>
                            <div className="h-8 flex items-center uppercase text-orange-500"><strong>{skill}</strong></div>
                        </div>
                        <div className=" flex-1 flex justify-center">
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