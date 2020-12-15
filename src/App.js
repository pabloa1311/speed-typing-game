import React, {useState} from "react"


function App() {
  const [words, setWords] = useState("")
  
  function handleChange(e) {
      const {value} = e.target
      setWords(value)
  }
  
  console.log(words)
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea 
              value={words}
              name="words"
              placeholder="Type in..."
              onChange={handleChange}
          />
          <h4>Time reminaing: ???</h4>
          <button>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
