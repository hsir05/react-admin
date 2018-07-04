import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SlideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menu : [
        {key:'sub1', icon: 'appstore', menu: '首页',
        children: [
          {key:'1', url:'/', menu:'home', children: []},
          {key:'2', url:'/about', menu:'about', children: []},
          {key: '3', url: 'form', menu:'form', children: []}
        ]},
        {key:'sub2', icon: 'setting', menu: '设置',
        children: [
          {key:'4', url:'/', menu:'用户设置', children: []},
          {key:'5', url:'/about', menu:'系统设置', children: []},
        ]},
      ]
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    let menuList = null
    menuList = (
      this.state.menu.map((item, index) => {
        return (
          <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.menu}</span></span>}>
           {
             item.children.map(val => {
               return (<Menu.Item key={val.key}><Link to={val.url}>{val.menu}</Link></Menu.Item>)
             })
           }
          </SubMenu>
        )
      })
    )
    return (
      <Sider style={{background:'white', borderRight:'1px solid #e5e5e5'}}>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%', border: '0' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['0']}
          mode="inline"
        >
          {menuList}
        </Menu>
      </Sider>
    )
  }
}

export default SlideBar;
