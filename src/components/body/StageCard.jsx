import React from 'react'

const StageCard = ({ header, content, timeline }) => {
  return (
    <div className="flex space-x-8">
        <div className="flex flex-col items-center">
            <div className="bg-gray-200 h-[6rem] w-[6rem] items-center justify-center flex rounded-full">
                <img src="/assets/nft_one.jpg" alt="idea" className="h-[5.2rem] w-[5.2rem] rounded-full" />
            </div>
            <div className="h-[5vh] border-l-2 border-gray-200"></div>
        </div>
        <div>
            <h2 className="text-[18px] font-bold my-2">{timeline}</h2>
            <h2 className="text-[18px] font-bold my-2">{header}</h2>
            <span className="font-light text-[11px]">{content}</span>
        </div>
    </div>
  )
}

export default StageCard