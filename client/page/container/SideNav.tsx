import React, { useState } from 'react';
import { Menu } from 'zent';

const { MenuItem } = Menu;

export default function SideNav() {
  const [menuKey, setMenuKey] = useState('joke');
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement, MouseEvent>, key: string) => {
    setMenuKey(key);
  }
  return (
    <Menu
      mode="inline"
      defaultSelectedKey={menuKey}
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