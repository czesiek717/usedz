import { Category } from '@usedz/usedz-common';
import { Button, Checkbox, Form, Input, Select, InputNumber } from 'antd';
import React from 'react';
import { createItem } from '../../../api/api';
import './item-form.scss';

//interface Props {}

export const ItemForm: React.FunctionComponent /* <Props> */ = (/* props: Props */) => {
  const onFinish = async (values /* : Store */) => {
    const item = await createItem(values);
    console.log(item);
  };

  const onFinishFailed = (errorInfo /* : ValidateErrorEntity */) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{
          xs: { span: 24 },
          sm: { span: 18 }
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
          hasFeedback
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.TextArea placeholder="Description" rows={4} />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input placeholder="Image" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Select placeholder="Select a category">
            {Object.entries(Category).map(entry => (
              <Select.Option key={entry[0]} value={entry[0]}>
                {entry[1]}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Owner"
          name="owner"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input placeholder="Owner" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <InputNumber placeholder="Price" min={1} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 8 }} name="negotiable" valuePropName="checked" hasFeedback>
          <Checkbox>Negotiable</Checkbox>
        </Form.Item>

        <Form.Item
          label="Localization"
          name="localization"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input placeholder="Localization" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
          <Button type="primary" shape="round" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
