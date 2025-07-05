import React from 'react'

import { dataCounter } from '@/src/common/services/utils';
import CountUp from 'react-countup';

function ExperienceTrayectory() {
  return (
    <div className=" grid justify-between max-w-3xl grid-cols-2 gap-3 my-8 md:grid-cols-4 md-gap-6 pb-3">
            {dataCounter.map(({id, endCounter, text, lineRight, lineRightMobile, isFinally}) => (
                <div key={id} className={`${lineRight &&  'ltr'}`}>
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100' } ${isFinally && 'px-4'}`}>
                    <p className="flex mb-2 text-2xl font-extrabold md:text-4xl">
                        +<CountUp end={endCounter} start={0} duration={5}></CountUp>
                    </p>
                    <p className=" text-xs uppercase max-w-[100px]">{text}</p>
                </div>
                </div> 
            ))}
        </div>
  )
}

export default ExperienceTrayectory