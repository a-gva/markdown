import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col bg-slate-100 h-screen">
      {/* header */}
      <div className="bg-slate-900 text-gray-100 text-center py-2 text-2xl">
        <h3>Markdown Live Preview</h3>
      </div>
      {/* content */}
      <div className="flex flex-row gap-1 h-full">
        {/* input */}
        <div className="flex flex-col h-full w-1/2 px-2 py-3 rounded">
          <h4 className="font-bold bg-slate-500 text-gray-100 py-2 text-center rounded-t ">
            Input
          </h4>
          <textarea
            className="w-full resize-none border border-slate-500 border-solid rounded-b h-full 
              "
            onChange={(e) => setInput(e.target.value)}
            cols={60}
            rows={5}
          />
        </div>
        {/* markdown */}
        <div className="flex flex-col h-full w-1/2 px-2 py-3 rounded">
          <h4 className="font-bold bg-slate-500 text-gray-100 py-2 text-center rounded-t">
            Markdown Output
          </h4>
          <p className="w-full h-full resize-none border border-slate-500 border-solid rounded-b bg-slate-50">
            {input}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
