import React, { useState, useEffect } from 'react';
import { Loading, Card, Notify, Collapse } from 'zent';

import { fetchRiddleList } from '../../services/riddle';
import './index.scss';

interface IRiddleList {
  id: number,
  title: string,
  question: string,
  answer: string,
}

export const Riddle = (props: any) => {
  const [riddleList, setRiddleList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    const asyncFetch = async () => {
      setIsLoading(true);
      try {
        const result = await fetchRiddleList();
        setRiddleList(result.data);
      }
      catch (err) {
        Notify.error(err);
      }
      setIsLoading(false);
    }
    asyncFetch();
  }, []);

  const handleCollapseChange = (activeKey: any): any => {
    setActiveKey(activeKey);
  }

  return (
    <div className="riddle-wrapper">{
      loading ? <Loading show={true} /> : riddleList.map((item: IRiddleList) => (
        <Card key={item.id} title={item.title || ''} className="card-style">
          <p style={{fontSize: 16}}>{item.question}</p>
          <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
            <Collapse.Panel title="查看答案" key={item.id}>
              {item.answer}
            </Collapse.Panel>
          </Collapse>
        </Card>
      ))}
    </div>
  )
}