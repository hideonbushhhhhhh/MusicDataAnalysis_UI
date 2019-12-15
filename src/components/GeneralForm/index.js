import React from 'react';
import { Form, Row, Col, Button } from 'antd';
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
function GeneralForm (props) {
  console.log(props)
  const { form, formItems = [], span = 24, initValues } = props
  return (<Row>
    {formItems.map(item => {
      return <Col span={span} key={item.id}>
        <Form.Item label={item.label}>
          {form.getFieldDecorator(item.id, item.config)(
            item.component
          )
          }
        </Form.Item>
      </Col>
    })}
  </Row>);
}

export default GeneralForm


export const SearchForm = Form.create()((props) => {
  const {
    formItems,
    form,
    onSearch,
    onReset
  } = props
  const formProps = {
    form,
    formItems,
    span: 8,
  }

  function handleReset () {
    form.resetFields()
    typeof onReset === 'function' && onReset()
  }

  function handleSearch () {
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        typeof onSearch === 'function' && onSearch(values)
      }
    });
  }

  return <Row>
    <GeneralForm {...formProps} />
    <Col span={8}>
      <Button onClick={handleReset}>重置</Button>
      <Button onClick={handleSearch} style={{ marginLeft: '20px' }} type="primary">查找</Button>
    </Col>
  </Row>
})


