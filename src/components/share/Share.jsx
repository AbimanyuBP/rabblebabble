import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="width-[100%] h-[170px] rounded-[10px] shadow-md">
        <div className="p-[10px]">
            <div className="flex items-center">
                <img src="/assets/person/4.jpeg" alt="" className="size-[50px] rounded-[50%] object-cover mr-[10px]" />
                <input type="text" className=" border-none w-[80%] focus:outline-none" placeholder="Rabble away User!"/>
            </div>
            <hr className="m-[20px] ml-[20px]" />
            <div className="flex items-center justify-between">
                <div className="flex ">
                  <div className="flex items-center mr-[15px] cursor-pointer">
                    <PermMediaIcon className="text-[18px]"/>
                    <span className="">Photo or Video</span>
                  </div>
                  <div className="flex items-center mr-[15px] cursor-pointer">
                    <LabelIcon className="text-[18px]"/>
                    <span className="">Tag</span>
                  </div>
                  <div className="flex items-center mr-[15px] cursor-pointer">
                    <PinDropIcon className="text-[18px]"/>
                    <span className="">Location</span>
                  </div>
                  <div className="flex items-center mr-[15px] cursor-pointer">
                    <EmojiEmotionsIcon className="text-[18px]"/>
                    <span className="">Feeling</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
