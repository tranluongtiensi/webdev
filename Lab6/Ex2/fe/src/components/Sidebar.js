import React from 'react'
import SidebarRow from './SidebarRow'
import { LocalHospital } from '@mui/icons-material'
import { EmojiFlags } from '@mui/icons-material'
import { People } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import { Storefront } from '@mui/icons-material'
import { VideoLibrary } from '@mui/icons-material'
import { ExpandMoreOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'

const Sidebar = () => {
    const [{user}, dispatch] = useStateValue()

  return (
    <SidebarWrapper>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospital} title="COVID-19" />
        <SidebarRow Icon={EmojiFlags} title="Pages" />
        <SidebarRow Icon={People} title="Friends" />
        <SidebarRow Icon={Chat} title="Messenger" />
        <SidebarRow Icon={Storefront} title="Marketplace" />
        <SidebarRow Icon={VideoLibrary} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </SidebarWrapper> 
  )
}

const SidebarWrapper = styled.div`
`

export default Sidebar