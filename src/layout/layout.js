import React, { Component } from 'react'
import { Layout, Avatar } from 'antd'
import SlideBar from './slidBar.jsx'

import './layout.scss'

const { Header, Content, Footer } = Layout

class HeadBar extends React.Component {
  render () {
    return (
      <Header className='headerTop'><Avatar className='avator' icon="user" />  </Header>
    )
  }
}

class LayOuts extends Component {

  componentDidMount () {}

  render() {
    return (
        <Layout style={{height:'100%'}}>
          <SlideBar style={{width:'100%'}} />
          <Layout>
            <HeadBar  />
            <Content style={{background:'white', paddingLeft:'10px', paddingRight:'10px'}}>
              {this.props.children}
              {/* <Footer style={{background:'#e9e9e9'}}>Footer</Footer> */}

            </Content>
          </Layout>
       </Layout>
    )
  }
}

export default LayOuts;
