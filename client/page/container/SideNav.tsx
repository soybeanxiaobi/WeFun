import React, { useState } from 'react';
import { Menu } from 'zent';
import { withRouter } from 'react-router';

const { MenuItem } = Menu;

const SideNav = (props: any) => {
  console.log('sideNav props', props);
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement, MouseEvent>, key: string) => {
    props.history.push(key);
  }
  console.log(
    props.location.pathname.replace('/', '')
  )
  return (
    <Menu
      mode="inline"
      defaultSelectedKey={props.location.pathname.replace('/', '')}
      style={{ width: '100%', height: '100vh' }}
      onClick={handleMenuClick}
    >
      <MenuItem key="joke">
        冷笑话
      </MenuItem>
      <MenuItem key="riddle">
        脑经急转弯
      </MenuItem>
    </Menu>
  )
}
const SideNavRouter = withRouter(SideNav);
export default SideNavRouter;