### GeneralForm

> 目的

GeneralForm 组件是为了减少在表单功能中的重复代码

```
 <Form.Item label={item.label}>
  {form.getFieldDecorator(item.id, item.config)(
    item.component
    )
  }
</Form.Item>         
```
该组件接收 formitems 数组作为参数，对该数组遍历生成表单

