import './login.css'
import React from 'react';
import Header from '../Header/header.jsx';
import { LuMoon, LuUserX } from "react-icons/lu";


export default function Login(){
    return (
        <div>
            <main>
                <div class="center-login">
                    <div class="login-block">
                        <div class="login-head-section">
                            <div class="login-heading">Login to BBSMT Sever Manager</div>
                            <p class="login-description">Login with username and password.</p>
                        </div>
                        <div class="form">
                            <form onSubmit="onSubmit()">
                                <div>
                                    <div class="input-section">
                                        <label class="label">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="jonas-be"
                                            class="text-input"
                                        />
                                        <span class="form-message"></span>
                                    </div>
                                    <div class="input-section">
                                        <label class="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder=""
                                            class="text-input"
                                        />
                                        <span class="form-message"></span>
                                    </div>
                                </div>
                                <button type="submit" class="btn submit-btn">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
