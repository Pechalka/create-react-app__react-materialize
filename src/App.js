import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Container, Row, Col, Input } from 'react-materialize';

class App extends Component {
  state = {
    value: '1'
  }

  test = () => {
    console.log(' test ', this.state.value)
  }

  selectItem = (e, value) => {
    console.log(value)
    this.setState({ value })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
        <Row>
          <Col l={4}>
            <div>
              <Input s={12} type='select' onChange={this.selectItem} label="Materialize Select" defaultValue='2'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </Input>
            </div>
            <div>
              <Input s={12} type='select' onChange={this.selectItem} label="Materialize Select controlled" value={this.state.value}>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </Input>
            </div>
          </Col>
          <Col l={4}>
            <Button onClick={this.test}>test</Button>
          </Col>
          <Col l={4}>
            <Card 
              className='blue-grey darken-1' 
              textClassName='white-text' 
              title='Card title' 
              actions={[<a href='/' key='1'>This is a link</a>]}
            >
            I am a very simple card.
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
