// 解释程序的概念
// const letters = 'Letters';
// const splitLetters = letters.split('');
// console.log("Let's spell a world!");
// splitLetters.forEach(letter => console.log(letter));

// React.Component
// state API
// this.state
// this.setState(function(prevState, props), callback) 用于修改组件状态的专用API
class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'top secret!',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(() => ({
      name: 'Mark'
    }));
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>reveal the secret!</button>
      </div>
    );
  }
}

// 使用setState进行浅合并演示
class ShallowMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Mark', // 被覆盖掉
        colors: {
          favorite: '',
        }
      }
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      user: {
        colors: {
          favorite: 'blue'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
        <button onClick={this.onButtonClick} >show the color!</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  // 属性类型检查
  static propTypes = {
    incrementBy: PropTypes.number,
    onIncrement: PropTypes.func.isRequired
  };

  // 默认属性
  static defaultProps = {
    incrementBy: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(function(prevState, props) {
      return { count: prevState.count + props.incrementBy };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    )
  }
}

// 无状态函数组件
function Greeting(props) {
  return <div>Hello {props.for}!</div>;
}

Greeting.propTypes = {
  for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
  for: 'friend'
};

ReactDOM.render(
  <Greeting for='Mark' />,                // 顶层组件
  document.getElementById('root')  // 应用最高层的HTML元素
);
