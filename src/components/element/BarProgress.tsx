import React, { useContext, useState } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'
import { SkillContexts } from '../contexts/SkillContexts'




export const ProgressBarx = () => {
    const {width,color} = useContext(SkillContexts)
    

    return (
        <div className="item">
            <ProgressBar
                radius={100}
                progress={width}
                strokeWidth={18}
                strokeColor={color}
                strokeLinecap="round"
                trackStrokeWidth={18}
                counterClockwise
            >
                <div className="indicator">
                    <div>{width}%</div>
                </div>
            </ProgressBar>
        </div>
    )
}