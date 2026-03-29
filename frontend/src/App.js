import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function App(){
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  function handleEmailChange(event){
    setEmail(event.target.value)
    if(event.target.value !== "") setEmailError(false)
  }

  function handlePasswordChange(event){
    setPassword(event.target.value)
    if(event.target.value !== "") setPasswordError(false)
  }

  function handleSubmit(event){
    event.preventDefault()
    
    // reset errors
    setErrorMsg("")
    let valid = true
    
    if(email === ""){
      setEmailError(true)
      valid = false
    }
    if(password === ""){
      setPasswordError(true)
      valid = false
    }

    if(!valid) return

    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"
    axios.post(`${apiUrl}/login`, {
      email: email,
      password: password
    })
    .then(function(response){
      if(response.data === true){
        navigate("/success")
      } else {
        setErrorMsg("Sorry, we can't find an account with this email address. Please try again or create a new account.")
      }
    })
    .catch((error) => {
      setErrorMsg("An error occurred while connecting to the server.")
    })
  }

  return (
    <div className="relative min-h-screen bg-black sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/US-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
      {/* Overlay for background image on larger screens */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60 z-0"></div>

      {/* Header with Logo */}
      <header className="absolute top-0 left-0 w-full p-4 sm:p-6 sm:px-12 z-20">
        <Link to="/">
          <h1 className="text-red-600 font-bold text-3xl sm:text-5xl tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            NETFLIX
          </h1>
        </Link>
      </header>

      {/* Main Login Form Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-10 sm:pt-0">
        <div className="w-full max-w-[450px] bg-black sm:bg-black/75 rounded-md p-10 sm:p-16">
          <h2 className="text-white text-3xl font-bold mb-7">Sign In</h2>
          
          {errorMsg && (
            <div className="bg-[#e87c03] text-white p-4 mb-4 rounded text-sm">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Email Input */}
            <div className="relative">
              <input
                type="text"
                value={email}
                name="email"
                onChange={handleEmailChange}
                placeholder="Email or phone number"
                className={`w-full p-4 rounded bg-[#333] text-white outline-none placeholder-gray-400 focus:bg-[#454545] transition ${emailError ? 'border-b-2 border-[#e87c03]' : ''}`}
              />
              {emailError && (
                <p className="text-[#e87c03] text-xs mt-1">Please enter a valid email or phone number.</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative mb-2">
              <input
                type="password"
                value={password}
                name="password"
                onChange={handlePasswordChange}
                placeholder="Password"
                className={`w-full p-4 rounded bg-[#333] text-white outline-none placeholder-gray-400 focus:bg-[#454545] transition ${passwordError ? 'border-b-2 border-[#e87c03]' : ''}`}
              />
              {passwordError && (
                <p className="text-[#e87c03] text-xs mt-1">Your password must contain between 4 and 60 characters.</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#e50914] text-white font-bold p-3.5 mt-2 rounded hover:bg-[#c11119] transition"
            >
              Sign In
            </button>

            {/* Extra Options */}
            <div className="flex justify-between items-center text-[#b3b3b3] text-xs mt-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="rememberMe" className="w-4 h-4 bg-[#333] border-none rounded checked:bg-gray-500 accent-gray-500 text-black cursor-pointer" />
                <label htmlFor="rememberMe" className="cursor-pointer">Remember me</label>
              </div>
              <span className="hover:underline cursor-pointer">Need help?</span>
            </div>
            
          </form>

          {/* Footer Text */}
          <div className="mt-16 sm:mt-24 text-[#737373]">
            <p className="text-base mb-3">
              New to Netflix? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>.
            </p>
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-[#0071eb] hover:underline cursor-pointer">Learn more.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App