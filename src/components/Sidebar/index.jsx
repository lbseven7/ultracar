import React from 'react';
import { SideBarContainer, SidebarHeading, SidebarLink } from './style';


function SideBar() {
  return (
    <SideBarContainer>
      <SidebarHeading>Menu de Links</SidebarHeading>
      <SidebarLink to="/">1</SidebarLink>
      <SidebarLink to="/">2</SidebarLink>
      <SidebarLink to="/">3</SidebarLink>
      <SidebarLink to="/">4</SidebarLink>
    </SideBarContainer>
  )
}

export default SideBar;