import "./App.css";
import { MyStore } from "./redux/store/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import Body from "./layout/Body";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <Provider store={MyStore}>
      <ToastProvider autoDismiss={true}>
        <BrowserRouter>
          <Header />
          <Container maxWidth="lg">
            <Body />
          </Container>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  );
};

export default App;
