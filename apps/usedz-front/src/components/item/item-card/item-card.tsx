import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ItemDef } from '@usedz/usedz-common';
import { Card } from 'antd';
import React from 'react';

export const ItemCard: React.FunctionComponent<ItemDef> = (props: ItemDef) => {
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
