// 解释程序的概念
// const letters = 'Letters';
// const splitLetters = letters.split('');
// console.log("Let's spell a world!");
// splitLetters.forEach(letter => console.log(letter));

// React.Component
// state API
// this.state
// this.setState()
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

ReactDOM.render(
  <Secret />,
  document.getElementById('root')
);
