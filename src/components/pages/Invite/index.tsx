import { SearchOutlined } from '@ant-design/icons';
import { Card, List } from 'antd';
import React from 'react';
import ButtonAtom from '../../atoms/Button';
import InputAtom from '../../atoms/Input/index';
import './style.css';

interface Invite {

}

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const InvitePage = ({}: Invite) => {
  
  return(
    <>
      <h1>Convidar</h1>
      <Card style={{ width: '50%'}}>
        <div className='inputSearch'>
          <InputAtom name="search" placeholderText='Insira um email válido' typeInput='email'></InputAtom>
          <ButtonAtom icon={<SearchOutlined />} size="large"></ButtonAtom>
        </div>
      </Card>
      <hr />
      <List
        className="cardList"
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card><h1>{item.title}</h1></Card>
          </List.Item>
        )}
      />
    </>
  )
}
export default InvitePage;