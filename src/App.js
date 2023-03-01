import "./App.css";
import Movies from "./components/movies";
import Test from "./components/common/test";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        {/* <Test /> */}
      </main>
    );
  }
}

export default App;
