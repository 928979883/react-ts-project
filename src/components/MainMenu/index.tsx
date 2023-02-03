import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

// function getItem (
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: ReactNode
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label
//   } as MenuItem
// }

// 侧边栏配置项
const items: MenuItem[] =
// [
//   getItem('栏目 1', '/page1', <PieChartOutlined />),
//   getItem('栏目 2', '/page2', <DesktopOutlined />),
//   getItem('栏目 3', 'page3', <UserOutlined />, [
//     getItem('栏目 301', '/page3/page301'),
//     getItem('栏目 302', '/page3/page302'),
//     getItem('栏目 303', '/page3/page303')
//   ]),
//   getItem('栏目 4', 'page4', <TeamOutlined />, [
//     getItem('栏目 401', '/page4/page401'),
//     getItem('栏目 402', '/page4/page402'),
//     getItem('栏目 403', '/page4/page403')
//   ])
// ]
[
  {
    label: '栏目 1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目 2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: '栏目 3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目 301',
        key: '/page3/page301'
      },
      {
        label: '栏目 302',
        key: '/page3/page302'
      },
      {
        label: '栏目 303',
        key: '/page3/page303'
      }
    ]
  },
  {
    label: '栏目 4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Team 1',
        key: '/page4/page401'
      },
      {
        label: 'Team 2',
        key: '/page4/page402'
      }
    ]
  },
  {
    label: '栏目 5',
    key: 'page5',
    icon: <FileOutlined />
  }
]
const Comp: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }
  let firstOpenKeys: string = ''
  function findKey (obj: { key: string }) {
    return obj.key === currentRoute.pathname
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i]!.children && items[i]!.children.length > 1 && items[i]!
      .children.find(findKey)) {
      console.log(items[i]!.key)
      firstOpenKeys = items[i]!.key as string
      break
    }
  }
  const [openKeys, setOpenKeys] = useState([firstOpenKeys])
  const hdOpenChange = (keys: any) => {
    setOpenKeys([keys[keys.length - 1]])
  }
  // view
  return (
    <Menu
    theme='dark'
    defaultSelectedKeys={[currentRoute.pathname]} // /page3/page3_1
    mode='inline'
    items= {items}
    onClick={menuClick}
    openKeys={openKeys}
    onOpenChange={hdOpenChange}
    />
  )
}

export default Comp
