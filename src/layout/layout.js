import React, { Component } from 'react'
import { Layout, Avatar } from 'antd'
import SlideBar from './slidBar.jsx'

import './layout.scss'

const { Header, Content } = Layout

class HeadBar extends React.Component {
  render () {
    return (
      <Header className='headerTop'>后台管理系统 <Avatar className='avator' icon="user" />  </Header>
    )
  }
}

class LayOuts extends Component {

  componentDidMount () {}

  render() {
    return (
        <Layout style={{height:'100%'}}>
          <HeadBar />
          <Layout><SlideBar style={{width:'100%'}} />
            <Content style={{background:'#f0f2f5', paddingLeft:'10px', paddingRight:'10px'}}>
              {this.props.children}
            </Content>
            {/* <Footer style={{background:'#e9e9e9'}}>Footer</Footer> */}
          </Layout>
       </Layout>
    )
  }
}

export default LayOuts;
