import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

interface Props {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const EntityCard: React.FunctionComponent<Props> = (props: Props) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" /* src={props.image} */
          />
        }
        actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
      >
        <Meta title={props.name} description={props.description} />
      </Card>
    </div>
  );
};
