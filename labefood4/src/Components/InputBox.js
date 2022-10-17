import React, { useContext } from 'react'
import { InputBoxLabel, InputBoxRectangle, InputBoxLocus, InputBoxInput, EyeImg } from '../Style/GlobalStyle'
import { useState } from 'react'
import Eye from "../Assets/senha-2.png"
import EyeSlash from "../Assets/senha.png"
import GlobalState from "../Context/GlobalState";
import GlobalStateContext from '../Context/GlobalStateContext'


export const InputBox = (props) => {
    const { states, setters, requests } = useContext(GlobalStateContext)

    const handleEmail = (event) => {
        setters.setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setters.setPassword(event.target.value)
    }

    const handleCpf = (event) => {
        setters.setCpf(event.target.value)
    }

    const handleName = (event) => {
        setters.setName(event.target.value)
    }

    const [visible, setVisible] = useState(false)
    const toggleVisible = (event) => {
        event.preventDefault()
        if (visible === false) {
            setVisible(true)
            // setEyeType({ Eye })
        }
        else {
            setVisible(false)
            // setEyeType({ EyeSlash })
        }
    }

    //const [eyeType, setEyeType] = useState({ Eye })


    const isPasswordVisible = visible ? "text" : "password"
    const eyeType = visible ? Eye : EyeSlash


    return (
        <InputBoxLocus>
            <InputBoxLabel>{props.label}</InputBoxLabel>
            {
                props.type === "email" &&
                <InputBoxRectangle>
                    <InputBoxInput
                        onChange={handleEmail}
                        placeholder={props.placeholder}>

                    </InputBoxInput>
                </InputBoxRectangle>
            }
            {
                props.type === "cpf" &&
                <InputBoxRectangle>
                    <InputBoxInput
                        onChange={handleCpf}
                        placeholder={props.placeholder}>

                    </InputBoxInput>
                </InputBoxRectangle>
            }
            {
                props.type === "name" &&
                <InputBoxRectangle>
                    <InputBoxInput
                        onChange={handleName}
                        placeholder={props.placeholder}>

                    </InputBoxInput>
                </InputBoxRectangle>
            } 



            {
                props.type === "password" &&
                <InputBoxRectangle>
                    <InputBoxInput type={isPasswordVisible}
                        placeholder={props.placeholder}
                        onChange={handlePassword}></InputBoxInput><EyeImg src={eyeType} onClick={toggleVisible} />
                </InputBoxRectangle>
            }
        </InputBoxLocus >

    )
}