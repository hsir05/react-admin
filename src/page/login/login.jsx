import React from 'react'
import {Link} from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import './login.scss'

class WrappedLoginApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        userName: '',
        password: ''
      }
    }
  }

  componentDidMount () {}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.userName === 'admin' && values.password === 'admin') {
          this.props.history.push('/')
          sessionStorage.setItem('login', JSON.stringify(values))
        }
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <section className='login'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入你的帐号' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem style={{marginBottom:'6px'}}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入你的密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>

          <div style={{display:'flex', justifyContent:'space-between'}}>
            <FormItem style={{marginBottom:'0'}}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
            </FormItem>
            <FormItem style={{marginBottom:'0'}}>  <a className="login-form-forgot" href="">忘记密码</a></FormItem>
          </div>

            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              登录
            </Button>
            <a href="" style={{marginTop:'10px', display:'inline-block'}}>注册</a>
        </Form>
      </section>
    )
  }
}

const Login = Form.create()(WrappedLoginApp)

export default Login;
