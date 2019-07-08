import React, { useState, useEffect } from 'react';
import { Loading, Card, Notify, Collapse } from 'zent';
import { connect } from 'react-redux';

import { fetchRiddleList } from '../../actions/riddle';
import './index.scss';

interface IRiddleList {
  id: number,
  title: string,
  question: string,
  answer: string,
}

export const Riddle = (props: any) => {
  const { riddle: {
    list = []
   } } = props;
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    fetchRiddleList()
  }, []);
  const handleCollapseChange = (activeKey: any) => {
    setActiveKey(activeKey);
  }


  return (
    <div className="riddle-wrapper">{
      !list.length ? <Loading show={true} /> : list.map((item: IRiddleList) => (
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

const mapStateToProps = (state: IRiddleList): IRiddleList => {
  return {
    ...state
    // list: state.list
  }
};

export default connect(mapStateToProps)(Riddle);