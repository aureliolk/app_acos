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
import { useGetSkillIdLazyQuery } from "../../graphql/generated"
import ProgressBar from 'react-customizable-progressbar'
import { Spinner } from "phosphor-react"


export const LogoListTecnology = () => {
    const [color, setColor] = useState("")
    const [width, setWidth] = useState<number>(0)
    const [skill, setSkill] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [getSkillGraph, { data, refetch }] = useGetSkillIdLazyQuery()

    const getSkill = (id: string) => {
        setIsLoading(true)
        getSkillGraph({
            variables: {
                id
            }
        }).then(res => {
            console.log(res.data)
            if (res.data?.skill?.level) {
                setWidth(res.data.skill.level)
                if(res.data.skill.technology){
                    setSkill(res.data.skill.technology)
                }
                if (res.data.skill.level < 49) {
                    setColor("rgb(220 38 38 / var(--tw-bg-opacity))")
                } else if (res.data.skill.level > 49 && res.data.skill.level < 74) {
                    setColor("rgb(202 138 4 / var(--tw-bg-opacity))")
                } else if (res.data.skill.level > 74 && res.data.skill.level <= 100) {
                    setColor("rgb(22 163 74 / var(--tw-bg-opacity))")
                }
            }
            setIsLoading(false)
        })

    }

    return (
        <>
            <div className="grid text-2xl gap-x-2 gap-y-5 grid-cols-4 w-full">
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cquiba1ema0blp1o881a4j") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Html5 /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cquu1v1qng0bknw94ca4ad") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Css /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cqtxl31qip0bknemjr4ape") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><JavaScript /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehbowu6ntk0bknluicts0i") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Sass /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6w9xp38t60blp8mh48bpt") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><TailWindCss /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehcpoz6nuo0bkna8tbotvj") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><React /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5cwzwh82ews0bkndjh690pe") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><TypeScript /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6osou385o0blpd15oqoik") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Next /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6ocya3khe0bknykdhhuvm") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Apollo /></div></div>
                <div className="logolist3" onMouseEnter={() => { getSkill("cl5d6nzdp3kf70bknzdpbugid") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14  lg:w-12 lg:h-14 p-2 flex justify-center items-center"><GraphCms /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5d6nnn038130blpdto6t27i") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><GraphQl /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehdto26nxl0bknwryrni73") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><Shopify /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5ehedw86nzn0bknhank2xba") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><WooCommerce /></div></div>
                <div className="logolist" onMouseEnter={() => { getSkill("cl5dzuthr5cv10bknlb395xw1") }} onMouseLeave={() => { setWidth(0),setSkill("") }}><div className="w-14 h-14 lg:w-16 lg:h-16 p-2 flex justify-center items-center"><WordPress /></div></div>
            </div>
            <div className="w-full h-full flex justify-center items-center rounded bg-slate-900/40 p-4">
                {isLoading ? <Spinner size={30} className="animate-spin" /> : (
                    <ProgressBar
                        radius={75}
                        progress={width}
                        strokeWidth={10}
                        strokeColor={color}
                        strokeLinecap="round"
                        trackStrokeWidth={10}
                        counterClockwise={true}
                        // className="border w-full"
                        cut={20}
                        // fillColor="#ccc"
                        // initialAnimation={rue}
                        // initialAnimationDelay={1000}
                        pointerFillColor={color}
                        pointerRadius={1}
                        pointerStrokeColor="#fff"
                        // pointerStrokeWidth={10}
                        // rotate={360}
                        // inverse={false}
                        // trackStrokeColor="#233b75"
                        // steps={10}
                        // trackStrokeLinecap="round"
                        // trackTransition="#000"
                    >
                        
                        <div className="indicator flex justify-between">
                            {skill}
                            <div>{width}%</div>
                        </div>
                    </ProgressBar>
                )}
            </div>
        </>
    )
}