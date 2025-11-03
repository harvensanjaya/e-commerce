import { Input, InputForm} from '../Elements/Input'
import Button from '../Elements/Button'
import {useEffect, useState} from 'react'

function FormLogin(props) {
    const {label, name, type, placeholder, ref} = props
    return (
        <div className='flex flex-col p-10 shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-[20%]'>
            <h1 className="text-2xl mb-2">Login to vintage</h1>
            <p className='text-md mb-5'>Enter your details below</p>
            <form className='w-full'>
                <InputForm
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    ref={ref}
                />
                <InputForm
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={ref}
                />
                <Button className="bg-black text-white">Continue</Button>
            </form>
        </div>
    )
}

export default FormLogin