// npx babel src --out-file widgetCoC-compiled.js

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clicked: false,
      isOpen: false
    };
  }

  render() {
    if (this.state.clicked && !this.state.isOpen) {
      return <p>А всё, больше не будет, пососи</p>;
    }

    if (this.state.clicked && this.state.isOpen) {
      return (
        <div>
          <h2>Ну ты и пидорас конечно</h2>
          <p>Говорили же тебе, не нажимай</p>
          <img src="https://www.meme-arsenal.com/memes/7f548aa4c28f61d10ec2d9d3504ae5a3.jpg" alt="Иди нахуй"/>
          <p></p>
          <button onClick={() => {
            this.setState({ isOpen: false });
          }}>
            Пойти нахуй
          </button>
          <button onClick={() => {
            this.setState({ isOpen: false });
          }}>
            Пойти нахуй с позором
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => {
          this.setState({ clicked: true, isOpen: true });
        }}>
          Ультра кнопка, не нажимай, убьёт
        </button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#widgetCoC-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));