import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import LoginTemplate from "../template/LoginTemplate"

const Login = () => {
    const nav = useNavigate()

    const [error, setError] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setError()

        const data = {
            email:e.target.email.value,
            password :e.target.password.value
        }
        axios.post(`${API_URL}/public/login`,data)
        .then((resp) => {
            setToken(resp.data.data.token)
            nav("/")
        })
        .catch((error) => {
            setError(error)
        })
    }

    return (
       <LoginTemplate>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="email" name="email" required placeholder="Correo"/>
                </div>
                <div className="mb-4">
                    <input type="password" name="password" required placeholder="Contraseña" />
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <button type="submit" className="bg-gradient w-full">Ingresar</button>
                    <Link to="/registro">
                        ¿Deseas registrate?
                    </Link>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data?.data}
                    </p>
                )}
            </form>
       </LoginTemplate>
    )
}
export default Login;