import AdminAuth from './AdminAuth';
import AdminCustomize from './AdminCustomize';

import './Admin.css';
import $ from 'jquery';

import { useEffect, useState, createContext, useContext, useRef } from "react";
import { useMutation } from "react-query";
import runHoverableObjectAnimationScript from './scripts/hoverable_object_animation';
import AdminEditForm from './AdminEditForm';
import { AdminDataContext, ChangableElementsContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Admin = () => {
    const adminDataContext = useContext(AdminDataContext);
    const location = useLocation();

    useEffect(() => {
        runHoverableObjectAnimationScript();
    });

    useEffect(() => {
        if (location.pathname !== '/admin') {
            localStorage.removeItem('user');
            adminDataContext.setUser(null);
        }
    });

    return (
        adminDataContext.user !== null ? <AdminCustomize /> : <AdminAuth />
    );
};

export default Admin;