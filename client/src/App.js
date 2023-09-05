import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddInputGroup from "./components/AddInputGroup";
// import AlertMsg from "./components/Alert";
import ListTask from "./components/ListTask";
import PopupAlert from "./components/PopupAlert";
import Title from "./components/Title";
import Toaster from "./components/Toaster";
import "./css/style.css";
function App() {
  return (
    <div className="App">
      <Container className="text-center">
        <Row>
          <Col md={12}>
            <Toaster />
            <Title title="TODO APP" />
            <AddInputGroup
              label="Add new Todo?"
              placeholderName="Eg: Do Laundry"
              buttonName="Add the task"
              variant="success"
            />
            {/* <AlertMsg variant="danger" msg="There is any task" /> */}
            <ListTask />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
