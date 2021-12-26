import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
// import Icon from "./components/Icon";
import axios from "axios";
import { useEffect, useState } from "react";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import mail from "./assets/mail.svg";
import growingMan from "./assets/growing-up-man.svg";
import growingWoman from "./assets/growing-up-woman.svg";
import map from "./assets/map.svg";
import padlock from "./assets/padlock.svg";
import phones from "./assets/phone.svg";

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState();
  const [currenyData, setCurrentData] = useState({})

  const baseUrl = "https://randomuser.me/api/";
  const getUsers = async () => {
    // const res = await axios.get(baseUrl);
    const {data} = await axios.get(baseUrl);
    // console.log(data);
    // console.log(data.results);
    const person = data.results;
    setUsers(person);
    setCurrentData({
      title: 'name',
      info: 
        person[0].name.title + " " + person[0].name.first + " " + person[0].name.last,
    })
    console.log(currenyData);
    
  };
 

  useEffect(() => {
    getUsers();
  }, []);  
  

  return (
    <div className="App">
      {users.map((user, index) => {
        const { name, location, gender, email, phone, login, dob } = user;
        return (
          <Card className="card text-center" key={index}>
            <Card.Header className="header"></Card.Header>
            <Row>
              <Col>
                <Image
                  src={user.picture.large}
                  className="user"
                  roundedCircle
                />
              </Col>
            </Row>
            <Card.Body>
              <Card.Text>
                {text}
              </Card.Text>
              <Card.Title>Special title treatment</Card.Title>
              <Container>
                <Row>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      onClick={(e) => handleMouseOver(e)}
                      src={gender === "male" ? man : woman}
                      className="img"
                      roundedCircle
                      value={name.first}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={mail}
                      className="img"
                      roundedCircle
                      value={email}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={gender === "male" ? growingMan : growingWoman}
                      className="img"
                      roundedCircle
                      value={dob.age}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image 
                    src={map} 
                    className="img" 
                    roundedCircle
                    value={location.street.number + location.street.name}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image 
                    src={padlock} 
                    className="img" 
                    roundedCircle 
                    value={login.password}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                     src={phones} 
                     className="img" 
                     roundedCircle 
                     value={phone}
                     />
                  </Col>
                </Row>
              </Container>
              <div className="btn">
                <Button variant="primary">NEW USER</Button>
              </div>
              <div className="btn">
                <Button variant="primary">ADD USER</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default App;