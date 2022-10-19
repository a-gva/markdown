import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import { inputSample } from './inputsample';

function App() {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setInput(inputSample);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      {/* header */}
      <div className="header">
        <h2>Markdown Live Preview</h2>
        <button onClick={refreshPage}>Input sample</button>
      </div>
      {/* content */}
      <div className="box">
        {/* input */}
        <div className="item">
          <h4>Input</h4>
          <textarea
            autoFocus
            className=" 
              "
            onChange={(e) => setInput(e.target.value)}
            cols={60}
            rows={5}
          >
            {inputSample}
          </textarea>
        </div>
        {/* markdown */}
        <div className="item">
          <h4 className="">Markdown Output</h4>
          <ReactMarkdown className="markdown">{input}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
