import { Card } from 'antd';
import React, { useState } from 'react';
import './style.css';

interface Tab {
  key: string,
  tab: string;
}

interface Card {
  tabList: Tab[]
  contentList: Record<string, React.ReactNode>
  title: string
}

const CardAtom = ({tabList, contentList, title}: Card) => {
  const [activeTabKey1, setActiveTabKey1] = useState(tabList[0].key);

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  
  return (
    <>
      <Card
        style={{ width: '600px' }}
        title={title}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
        className="card"
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  );
}

export default CardAtom