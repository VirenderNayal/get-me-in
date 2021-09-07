import React from 'react'

export default function Signup() {

    return (
        <div className='base'>
            <form>
                <h3>Getmein</h3>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Re-Enter Password' />
                <p>
                    Already have an Account? Log in
                </p>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
