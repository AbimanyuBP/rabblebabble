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
    <div className="grow-[3] h-[calc(100vh - 50px)]">
      Sidebar
      <div className="p-[20px]">
          <ul className="p-0 m-0 list-none *:flex *:items-center *:mb-[20px]">
            <li className="">
              <RssFeedIcon className="mr-[15px]"/>
              <span className="">Feed</span>
            </li>
            <li className="">
              <ChatIcon className="mr-[15px]"/>
              <span className="">Chats</span>
            </li>
            <li className="">
              <PlayCircleIcon className="mr-[15px]"/>
              <span className="">Videos</span>
            </li>
            <li className="">
              <Groups2Icon className="mr-[15px]"/>
              <span className="">Groups</span>
            </li>
            <li className="">
              <BookmarksIcon className="mr-[15px]"/>
              <span className="">Bookmarks</span>
            </li>
            <li className="">
              <HelpIcon className="mr-[15px]"/>
              <span className="">Questions</span>
            </li>
            <li className="">
              <WorkIcon className="mr-[15px]"/>
              <span className="">Jobs</span>
            </li>
            <li className="">
              <EventIcon className="mr-[15px]"/>
              <span className="">Events</span>
            </li>
            <li className="">
              <SchoolIcon className="mr-[15px]"/>
              <span className="">Courses</span>
            </li>
          </ul>
          <button className="">Show More</button>
          <hr className="" />
          <ul className="">
            <li className="">
              <img src="public\assets\person\1.jpeg" alt="" className="size-[32px]" />
              <span className="">Jane Doe</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

