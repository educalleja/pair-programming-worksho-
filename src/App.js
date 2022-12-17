import React, { useState } from 'react';
import './App.css';
import { getQueue } from './queue';

const queue = getQueue(); 

function App() {
  const [value, setValue] = useState('');
  const [element, setElement] = useState('')
  const [queueElements, setQueueElements] = useState('')

  const addToQueue = () => {
    queue.add(value)
    setValue('');
  }
  const getFromQueue = () => {
    if (queue.isEmpty()) {
      setElement('');
      return;
    }
    const lastElement = queue.get()
    setElement(lastElement);
  }
  const printQueue = () => {
    const elements = queue.printQueue();
    setQueueElements(elements.join(','))
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder='Enter a number' onChange={e => setValue(e.target.value) } value={value}></input>
        <button onClick={addToQueue}>Add to queue</button>
        <button onClick={getFromQueue}>Get Element from queue</button>
        <button onClick={printQueue}>Print queue</button>
      </div>
      <div>
        <p>Status of queue:</p>
        <p>(First){queueElements}</p>

        <p>Get Element</p>
        <p>{element}</p>
      </div>
      <hr/>
      <div>
          <h3>#1. Driver/Navigator</h3>
          <ol>
            <li>The driver does nothing than what the navigator tells them to do. </li>
            <li>Driver uses mouse and keyboard, but does everything with instructions.</li>
          </ol>
          <p>What's the purpose of these two roles?</p>
      </div>
      <div>
          <h3>#2. Ping/pong</h3>
          <ol>
            <li>Driver writes a unittest.</li>
            <li>Navigator writes the minimum code to make the test pass</li>
            <li>Swap roles</li>
          </ol>
          <p>What's the purpose of ping/pong?</p>
          <p>When is it effective and when it is not effective?</p>
      </div>
      <div>
          <h3>#3. Red/Green refactor</h3>
          <ol>
            <li>Driver writes a unittest that fails</li>
            <li>Navigator writes the minimum code to make the test pass</li>
            <li>Driver refactors the code</li>
            <li>Navigator refactors the test code</li>
            <li>Navigator writes a unittest that fails ... (repeat)</li>
          </ol>
          <p>What's the purpose of ping/pong?</p>
          <p>When is it effective and when it is not effective?</p>
      </div>
      <div>
          <h3>#4. 10 minutes technique</h3>
          "Most solutions can be found in just 10 minutes of coding"
          <ol>
            <li>Try to solve your problem in 10 minutes.</li>
            <li>If the solution is found, try a second or third alternatives</li>
            <li>If the solution is not found: clear up workspace and start again</li>
          </ol>
          <p>How confident are you that the first solution is the best?</p>
          <p>How many solutions are there for a given software problem?</p>
      </div>
    </div>
  );
}

export default App;
