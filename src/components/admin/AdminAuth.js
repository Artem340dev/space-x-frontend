import { useContext, useState } from "react"

import AdminMenu from "./AdminMenu";
import { AdminDataContext, axiosInstance, PagesContext } from "../../App";

import { useMutation } from "react-query";

import axios from "axios";

const AdminAuth = () => {
    const { user, setUser, selectedPage, setSelectedPage } = useContext(AdminDataContext);
    const pagesContext = useContext(PagesContext);

    const [ username, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);

    const { mutate, isLoading } = useMutation(async () => {
        await axiosInstance.get(
            'auth/login',
            {
                params: {
                    username: username,
                    password: password
                }
            }
        ).then(response => {
            console.log(response.request.response);
            setUser(JSON.parse(response.request.response).username);
            localStorage.setItem('user', user);
        });
    });

    return (
        <div className="page-admin-auth">
            <div className="page-admin-auth-content">
                <h1 className="page-admin-auth-content-main-text">Auth</h1>
                <div className="page-admin-auth-content-input-container">
                    <label for="username">Username</label>
                    <input onChange={(event) => setUsername(event.target.value)} id="username" placeholder="Enter your username" />
                </div>
                <div className="page-admin-auth-content-input-container">
                    <label for="password">Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" id="password" placeholder="Enter your password" />
                </div>
                <div onClick={() => mutate()} className="page-admin-auth-content-sign-in-button">
                    <p>Sign in</p>
                </div>
            </div>
        </div>
    );
}

export default AdminAuth;