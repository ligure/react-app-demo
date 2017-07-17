import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {
  state = {
    theme: 'dark',
    mode: 'inline',
    current: '1',
    openKeys: ['sub1'],
  }
  changeMode = (value) => {
    this.setState({
      mode: value ? 'inline' : 'vertical',
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  onOpenChange = (openKeys) => {
    const oldKeys = this.state.openKeys;
    const openKey = openKeys.find(v => !(oldKeys.indexOf(v) > -1));
    const closeKey = oldKeys.find(v => !(openKeys.indexOf(v) > -1));
    if (openKey) {
      this.setState({ openKeys: openKey === 'sub3' ? oldKeys.concat(openKey) : [openKey]});
    } else if (closeKey) {
      this.setState({ openKeys: closeKey === 'sub3' ? openKeys : [] });
    }
  }
  render() {
    return (
      <div id="leftMenu">
        <img src={require('../images/logo.png')} width="50" id="logo" alt="logo"/>
        <Switch
          style={{ margin: '0 0 0 1em' }}
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch 
          checked={this.state.mode === 'inline'}
          onChange={this.changeMode}
          checkedChildren="Inline"
          unCheckedChildren="Vertical"
        />
        <br />
        <br />
        <Menu
          mode={this.state.mode}
          theme={this.state.theme}
          onClick={this.handleClick}
          onOpenChange={this.onOpenChange}
          style={{ width: 180 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          openKeys={this.state.openKeys}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">关于</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">主题列表</Link></Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftMenu;