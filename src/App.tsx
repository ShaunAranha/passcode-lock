import { useEffect, useState } from 'react'
import './App.css'

const numbers = [1,2,3,4,5,6,7,8,9,0]
const password = '4213'
function App() {
  const [isCorrect, setIsCorrect] = useState(false)
  const [error, setError] = useState("")
  const [userPass, setUserPass] = useState<number[]>([])

  useEffect(()=> {
    if (userPass.length === 1){
      setError("")
    } else if (userPass.length == password.length) {
      const stringPass: string = userPass.join('')
      if (stringPass === password) {
        setIsCorrect(true)
        setError("")
      } else {
        setUserPass([])
        setError("incorrect password")
      }
      
    }
  },[userPass])
  return (
    
    <>
    
    {isCorrect ? (
    <div>Success!</div>
    ) : (
      <div className="number-pad">
        {error}
        {
          numbers.map((number , idx)=> (
            <button
            className={number === 0 ? "zero": ""} 
            key={idx} 
            onClick={() => {setUserPass((cur) => [...cur, number])}}> {number}</button>
          ))
        }
      </div>
    )
    }

    </>
  )
}

export default App
