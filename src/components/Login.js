import React from 'react'

export default function Login() {
    return (
        <div className='base' >
            <form>
                <h3>Getmein</h3>
                <input placeholder='Email' />
                <input placeholder='Password' />
                <p>
                    Don't have an Account? Sign up
                </p>
                <button>Log in</button>
            </form>
        </div>
    )
}
