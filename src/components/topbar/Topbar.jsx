import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function topbar() {
  return (
    <div className="topbarContainer h-[50px] w-[100%] bg-[#D4B483] flex items-center sticky top-0">
        <div className="topbarLeft grow-[3]">
            <span className="Logo text-[24px] ml-[20px] font-bold text-[white] cursor-pointer">RabbleBabble</span>
        </div>
        <div className="topbarCenter grow-[5]">
            <div className="searchbar w-[100%] h-[30px] flex items-center bg-white border rounded-[30px]">
                <SearchIcon className="text-[20px] ml-[10px]"/>
                <input className="border-none w-[70%] focus:outline-none" placeholder="Search for friend, post or video"/>
            </div>
        </div>
        <div className="topbarRight grow-[4] flex items-center justify-around text-white">
            <div className="topbarLinks *:mr-[10px] *:text-[15px] *:cursor-pointer">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons flex">
                <div className="topbarIconItem mr-[15px] cursor-pointer relative">
                    <PersonIcon/>
                    <span className="topbarIconBadge size-[15px] bg-red-500 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-[10px]">1</span>
                </div>
                <div className="topbarIconItem mr-[15px] cursor-pointer relative">
                    <ChatBubbleIcon/>
                    <span className="topbarIconBadge size-[15px] bg-red-500 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-[10px]">1</span>
                </div>
                <div className="topbarIconItem mr-[15px] cursor-pointer relative">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge size-[15px] bg-red-500 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-[10px]">1</span>
                </div>
            </div>
            <img src="assets\person\2.jpeg" alt="" className="topbarImg size-[32px] rounded-[50%] object-cover cursor-pointer" />
        </div>
    </div>
  )
}
