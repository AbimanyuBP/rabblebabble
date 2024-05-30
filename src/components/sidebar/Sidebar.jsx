import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Groups2Icon from '@mui/icons-material/Groups2';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className=" flex-[3] h-[calc(100vh-50px)] overflow-y-scroll scrollbar-thin">
      <div className="p-[20px]">
          <ul className="p-0 m-0 list-none">
            <li className="flex items-center mb-[20px]">
              <RssFeedIcon className="mr-[15px]"/>
              <span className="">Feed</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <ChatIcon className="mr-[15px]"/>
              <span className="">Chats</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <PlayCircleIcon className="mr-[15px]"/>
              <span className="">Videos</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <Groups2Icon className="mr-[15px]"/>
              <span className="">Groups</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <BookmarksIcon className="mr-[15px]"/>
              <span className="">Bookmarks</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <HelpIcon className="mr-[15px]"/>
              <span className="">Questions</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <WorkIcon className="mr-[15px]"/>
              <span className="">Jobs</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <EventIcon className="mr-[15px]"/>
              <span className="">Events</span>
            </li>
            <li className="flex items-center mb-[20px]">
              <SchoolIcon className="mr-[15px]"/>
              <span className="">Courses</span>
            </li>
          </ul>
          <button className="w-[150px] bg-sky-600 p-[10px] rounded-[5px] font-medium">Show More</button>
          <hr className="my-[20px] mx-0" />
          <ul className="m-0 p-0 list-none">
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
            <li className="flex items-center mb-[15px]">
              <img src="\assets\person\1.jpeg" alt="" className="size-[32px] rounded-[50%] object-cover mr-[10px]" />
              <span className="">Jane Doe</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

