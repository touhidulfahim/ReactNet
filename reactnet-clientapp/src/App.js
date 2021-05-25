import "./App.css";
import { MyStore } from "./redux/store/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import Body from "./layout/Body";

const App = () => {
  return (
    <Provider store={MyStore}>
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <Body />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
