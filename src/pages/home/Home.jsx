import Topbar from '../../components/topbar/Topbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
export default function Home() {
  return (
    <>
        <Topbar/>
        <div className="homeContainer flex w-[100%]">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
    </>
  )
}
