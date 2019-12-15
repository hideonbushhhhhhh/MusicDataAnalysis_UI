import React from 'react';
import GeneralForm, { SearchForm, } from '@/components/GeneralForm'
import { Form, Input, Button, Select } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const wrapperCol = {
  span: 12,
  offset: 8
}

const formItems = [{
  id: 'userName',
  label: '用户名',
  config: {
    rules: [{
      required: true,
      message: '用户名必填',
    }]
  },
  component: <Input />
}, {
  id: 'password',
  label: '密码',
  config: {
    rules: [{
      required: true,
      message: '密码必填'
    }, {
      pattern: /[0-9a-zA-Z]{6,}/,
      message: '请输入至少6为数字字母作为密码'
    }]
  },
  component: <Input />
}, {
  id: 'brief',
  label: '简介',
  config: {},
  component: <Input.TextArea />
}]


const serachConfig = [{
  id: 'username',
  label: '用户名',
  component: <Input />
}, {
  id: 'state',
  label: '状态',
  component: <Select >
    <Select.Option value="1">运行中</Select.Option>
    <Select.Option value="0">失败</Select.Option>
  </Select>
}]

function User (props) {
  const { form } = props


  function handleSubmit (e) {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    });
  }

  return (
    <div>
      User
      <Form onSubmit={handleSubmit} {...formItemLayout}>
        <SearchForm formItems={serachConfig} />

        <GeneralForm form={form} formItems={formItems}>
        </GeneralForm>
        <Form.Item wrapperCol={wrapperCol}>
          <Button htmlType="submit" type="primary">提交</Button>
        </Form.Item >
      </Form>
    </div>
  );
}

export default Form.create()(User)
