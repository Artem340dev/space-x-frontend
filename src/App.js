import logo from './logo.svg';
import './App.css';

import Home from './components/home/Home';
import Admin from './components/admin/Admin';

import $ from 'jquery';

import { createContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMutation } from 'react-query';
import axios from 'axios';

export const PagesContext = createContext();
export const ElementChangeContext = createContext();
export const WebsiteElementsContext = createContext();
export const AdminDataContext = createContext();

export const axiosInstance = axios.create({
    baseURL: 'http://66.151.42.131:8000/', // Update this if needed
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
});

const App = () => {
    const [ changingElement, setChangingElement ] = useState(null);
    const [ changedElementsList, setChangedElementsList ] = useState([]);

    const [ elements, setElements ] = useState([]);

    const [ user, setUser ] = useState(null);
    const [ selectedPage, setSelectedPage ] = useState('main');

    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            setUser(localStorage.getItem('user'));
        }
    })

    const { mutate, isLoading } = useMutation(async () => {
        await axiosInstance.get(
            'api/elements/get',
            {
                params: {
                    page: 'main'
                }
            }
        ).then(response => {
            setElements(JSON.parse(response.request.response));
        });
    });

    const openEditForm = (event, element) => {
        if (user !== null && location.pathname === '/admin') {
            event.preventDefault();
            setChangingElement(structuredClone(element));
        }
    }

    const updateElement = (metadata) => {
        let newChangedElementsList = Array.from(changedElementsList);
        if (changedElementsList.filter(item => item.pk === changingElement.pk).length > 0) newChangedElementsList = newChangedElementsList.filter(item => item.pk !== changingElement.pk);

        let newChangingElement = changingElement;
        newChangingElement['metadata'] = metadata.filter(item => item.fields.value !== '');

        newChangedElementsList.push(newChangingElement);
        setChangedElementsList(newChangedElementsList);
        setChangingElement(null);
    }

    useEffect(() => {
        mutate();
    }, [mutate]);

    return (
        <PagesContext.Provider value={{'main': <Home />}}>
            <AdminDataContext.Provider value={{user: user, setUser: setUser, selectedPage: selectedPage, setSelectedPage: setSelectedPage}}>
                <WebsiteElementsContext.Provider value={{ elements: elements }}>
                    <ElementChangeContext.Provider value={{ changingElement: changingElement, setChangingElement: setChangingElement, changedElementsList: changedElementsList, setChangedElementsList: setChangedElementsList, updateElement: updateElement, openEditForm: openEditForm }}>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="admin/" element={<Admin />} />
                        </Routes>
                    </ElementChangeContext.Provider>
                </WebsiteElementsContext.Provider>
            </AdminDataContext.Provider>
        </PagesContext.Provider>
    );
};

export default App;