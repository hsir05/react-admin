import React from 'react'
import {Link} from 'react-router-dom'
import { Breadcrumb, Icon, Button } from 'antd'

const BreadCrumb = (dat) => {
  // console.log(dat);
  let bread = null
  if (dat) {
    bread = (
      <Breadcrumb style={{margin: '15px', fontSize:'12px'}}>
        {
          dat.list.map((item, index) => {
             return (<Breadcrumb.Item href={item.url} key={index}><Icon type={item.icon} />{item.menuName}</Breadcrumb.Item>)
          })
        }
        </Breadcrumb>
    )
  }
  return (<section style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>{bread}
    <Button type="primary"><Link to={dat.btn.addUrl}><Icon type={dat.btn.icon} />{dat.btn.btnName}</Link></Button></section>)
}

export default BreadCrumb;
