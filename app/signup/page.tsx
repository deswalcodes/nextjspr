"use client"
import {forwardRef} from "react"
import { useRef } from "react";
import axios from "axios"

export default function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    const handleSignup = async () => {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        const response = await axios.post("http://localhost:3000/api/v1/user/details",{
            username,
            password
        })

    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">
                        
                        
                        <LabelledInput ref = {usernameRef}label="Username" placeholder="pri@gmail.com" />
                        <LabelledInput ref = {passwordRef}label="Password" type={"password"} placeholder="123456" />
                         
                        <button onClick = {handleSignup}type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}


interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    
}
const LabelledInput = forwardRef<HTMLInputElement, LabelledInputType>(({ label, placeholder, type }, ref) => {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                ref={ref}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
});