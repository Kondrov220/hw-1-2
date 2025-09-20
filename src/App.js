import {Greeting} from './components/Greeting/Greeting';
import {Message} from './components/Message/Message';
import {Button} from './components/Button/Button';
import './App.css';

function App() {
  const buttonClick = () => {
    console.log('Button clicked!');
  }
  return (
    <>
      <Greeting name="Sara"/>
      <Message text="Hello, world!" />
      <Button  onClick={buttonClick} />
    </>
  );
}

export default App;
