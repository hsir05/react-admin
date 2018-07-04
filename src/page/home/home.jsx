import React from 'react'
import {Link} from 'react-router-dom'
import { Table, Form, Breadcrumb, Icon, Input, Button, Divider } from 'antd'
import BreadCrumb from '../../components/breadCrumb/breadCrumb.jsx'
import './home.scss'

const columns = [
  { title: '姓名', dataIndex: 'name', render: text => <a href="javascript:;">{text}</a>},
  { title: '年龄', dataIndex: 'age'},
  { title: '地址', dataIndex: 'address',  },
  { title: '操作', dataIndex: '', key: 'x', render: () => <a href="javascript:;">删除</a> }
];
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ]
const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

class WropSearch extends React.Component {

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const searchError = isFieldTouched('search') && getFieldError('search');
    return (
       <Form layout="inline" onSubmit={this.handleSubmit} style={{textAlign:'right', marginBottom:'10px'}}>
         <FormItem validateStatus={searchError ? 'error' : ''} help={searchError || ''} >
           {getFieldDecorator('search', {
             rules: [{ required: false, message: 'Please input your username!' }],
           })(
             <Input size="default" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}  />} placeholder="search" />
           )}
         </FormItem>

         <FormItem>
           <Button size='default' type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} > 搜索 </Button>
         </FormItem>
       </Form>
    )
  }
}
const Search = Form.create()(WropSearch);

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        list: [{url:'/', menuName:'首页', icon:''}, {url:null, menuName:'home', icon:''}],
        btn: {addUrl:'/add', btnName: '添加', icon:'plus'}
      }
    }
  }

  componentDidMount () {
    // console.log(this.props)
  }

  render() {
    return (
      <section>
        <BreadCrumb   {...this.state.data} />
        <div style={{background:'white', padding:'15px'}}>
          <Search />
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>

     </section>
    )
  }
}

export default Home;
