import React, { useState } from 'react';
import { Menu } from 'zent';
import { withRouter } from 'react-router';

const { MenuItem } = Menu;

const SideNav = (props: any) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement, MouseEvent>, key: string) => {
    props.history.push(key);
  }
  let key = props.location.pathname.replace('/', '');
  if(!key) {
    key = '/'
  }
  return (
    <Menu
      mode="inline"
      defaultSelectedKey={key}
      style={{ width: '100%', height: '100vh' }}
      onClick={handleMenuClick}
    >
      <MenuItem key="/">
        首页
      </MenuItem>
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