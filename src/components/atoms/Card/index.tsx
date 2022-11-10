import { Card } from 'antd';
import React, { useState } from 'react';

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
        style={{ width: '100%' }}
        title={title}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  );
}

export default CardAtom