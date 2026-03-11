import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App(){

  const navigate = useNavigate()

  const [uname, setuname] = useState("")
  const [upass, setupass] = useState("")

  function handleunchange(event){
    setuname(event.target.value)
  }

  function handleupchange(event){
    setupass(event.target.value)
  }

  function click(){

    if(uname === "" || upass === ""){
      alert("Please enter username and password")
      return
    }

    axios.post("http://localhost:5000/login",{
      username: uname,
      password: upass
    })
    .then(function(data){

      if(data.data === true){
        navigate("/success")
      }
      else{
        navigate("/fail")
      }

    })

  }

  return (
    
    <div className="bg-black h-screen flex items-center justify-center">

      <div className="bg-gray-900 p-10 rounded-lg w-80 shadow-lg">

        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Sign In
        </h1>

        <input
          type="text"
          value={uname}
          name="username"
          onChange={handleunchange}
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
        />

        <input
          type="password"
          value={upass}
          name="password"
          onChange={handleupchange}
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
        />

        <button
          onClick={click}
          className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition"
        >
          Submit
        </button>

      </div>

    </div>

  )
}

export default App