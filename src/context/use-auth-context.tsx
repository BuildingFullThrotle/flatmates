import React, { useState } from "react"

type InitialValueProps = {
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const initialValue: InitialValueProps = {
    currentStep: 1,
    setCurrentStep: () => undefined
}

const AuthContext = React.createContext<InitialValueProps>(initialValue)

const { Provider } = AuthContext


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(initialValue.currentStep)
    const values = {
        currentStep,
        setCurrentStep
    }
    return (
        <Provider value={values}>
            {children}
        </Provider>
    )
}

export const useAuthContext = () => {
    const state = React.useContext(AuthContext)
    if (!state) {
        throw new Error("useAuthContext must be used within a AuthContextProvider")
    }
    return state
}