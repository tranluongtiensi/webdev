import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
  return (
    <StoriesWrapper>
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://lh3.googleusercontent.com/a/AEdFTp6oseAgsak61348WpPmEwitqUa4VVXIFw2LTq6L=s360-p-rw-no"
            title="Trần Lương Tiến Sĩ"
        />
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://lh3.googleusercontent.com/a/AEdFTp6oseAgsak61348WpPmEwitqUa4VVXIFw2LTq6L=s360-p-rw-no"
            title="Trần Lương Tiến Sĩ"
        />
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://lh3.googleusercontent.com/a/AEdFTp6oseAgsak61348WpPmEwitqUa4VVXIFw2LTq6L=s360-p-rw-no"
            title="Trần Lương Tiến Sĩ"
        />
    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories