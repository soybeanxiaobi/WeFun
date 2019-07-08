import React, { useEffect } from 'react';
import { Card, Loading } from 'zent';
import { connect } from 'react-redux';

// import { dispatch } from '../../utils/dispatch';
// import { fetchJokeList } from '../../services/joke';
import { fetchJokeList } from '../../actions/joke';
import './index.scss';

/**
 * 未来不推荐hooks管理接口数据,故用redux替代异步获取数据方式
 */
interface IJokeList {
  // jokeReducer: {
    list: Array<{
      id: number;
      title: string;
      content: string;
    }>
  // }
}

export const Joke: React.StatelessComponent<{}>  = (props: any) => {
  // const [list, setList] = useState(false);
  // const [loading, setIsLoading] = useState(false);
  const { joke: {
    list = []
  } } = props;
  // const { data, loading } = dispatch((service: fetchJokeList));
  useEffect(() => {
    // const asyncFetch = async () => {
    //   setIsLoading(true);
    //   try {
    //     const result: any = await fetchJokeList();
    //     // setJokeList(result.data || []);
    //   } catch (err) {
    //     Notify.error(err);
    //   }
    //   setIsLoading(false);
    // }
    // asyncFetch();
    fetchJokeList();
  }, []); // 第二个参数为[]的作用是仅初次渲染触发,即componentDidMount
  return (
    <div className="joke-wrapper">{
      !list.length ? <Loading show={true} /> : list.map((item: {id: number, title: string, content: string}) => (
        <Card key={item.id} title={item.title} className="card-style">
          <p>{item.content}</p>
        </Card>
      ))}
    </div>
  )
}

const mapStateToProps = (state: IJokeList): IJokeList => {
  return {
    ...state
    // list: state.list
  }
};

export default connect(mapStateToProps)(Joke);