import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer'

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>

            <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
            <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}></SidebarOption>
            <br />
            <strong className="sidebar_title">Playlists</strong>
            <hr />

            {
               playlists?.items?.map((playlist) => {
                <SidebarOption title={playlist} ></SidebarOption>
               })
            }

        </div>

    )
}

export default Sidebar
