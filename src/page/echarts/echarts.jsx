import React from 'react'
import {Link} from 'react-router-dom'
import BreadCrumb from '../../components/breadCrumb/breadCrumb.jsx'



class Echarts extends React.Component {
  state = {
    data: {
      list: [{url:'/', menuName:'首页', icon:''}, {url:null, menuName:'添加', icon:''}],
      btn: {addUrl:'/', btnName: '返回', icon:'left'}
    }
  }

  render() {

    return (
      <section >
         <BreadCrumb   {...this.state.data} />
         adfasd
      </section>
    )
  }
}


export default Echarts;
