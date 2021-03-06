import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LeftMenu from './components/LeftMenu.jsx';
import 'antd/dist/antd.less';
import './app.less';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <LeftMenu />
          <div id="rightWrap">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用 React 渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>请选择一个主题。</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default App;
