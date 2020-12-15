import React, {useState, useEffect} from "react"


function App() {
  const [words, setWords] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  
  function handleChange(e) {
      const {value} = e.target
      setWords(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }
  
  useEffect(() => {
    if(timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    }
  }, [timeRemaining])

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
          <h4>Time reminaing: {timeRemaining}</h4>
          <button onClick={() => console.log(calculateWordCount(words))}>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
