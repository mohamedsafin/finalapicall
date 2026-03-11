import { useNavigate } from "react-router-dom"

function Fail(){

    const navigate = useNavigate()

    return(

        <div className="h-screen flex items-center justify-center bg-black">

            <div className="bg-gray-900 p-10 rounded-lg text-center shadow-lg">

                <h1 className="text-3xl text-red-500 font-bold mb-4">
                    Login Failed
                </h1>

                <p className="text-gray-300 mb-6">
                    Invalid username or password
                </p>

                <button
                onClick={()=>navigate("/")}
                className="bg-red-600 px-6 py-2 text-white rounded hover:bg-red-700"
                >
                    Try Again
                </button>

            </div>

        </div>

    )

}

export default Fail