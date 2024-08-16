import { useContext } from "react";
import { AdminDataContext, axiosInstance, ElementChangeContext, PagesContext } from "../../App";
import { useMutation } from "react-query";

import axios from "axios";

const AdminMenu = () => {
    const { user, setUser, selectedPage, setSelectedPage } = useContext(AdminDataContext);
    const elementChangeContext = useContext(ElementChangeContext);
    const pagesContext = useContext(PagesContext);

    const { mutate, isLoading } = useMutation(async () => {
        await axiosInstance.get(
            'api/elements/save',
            {
                params: {
                    elements: JSON.stringify(elementChangeContext.changedElementsList)
                }
            }
        ).then(response => {
            alert('successful!');
        });
    });

    const makeLogOut = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    const saveChangedElements = () => {
        mutate();

        elementChangeContext.setChangedElementsList([]);
        elementChangeContext.setChangingElement(null);
    }

    return (
        <div className="page-customize-menu">
            <div className="page-customize-menu-content">
                <div className="page-customize-menu-pages-optionbar">
                    <select name="pages" className="page-customize-menu-pages-optionbar-content">
                        {
                            Object.keys(pagesContext).map((item, index) => {
                                return <option value="main" className="page-customize-menu-pages-optionbar-content-option">{item}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="page-customize-menu-buttons-section">
                    <div onClick={() => saveChangedElements()} className={'hoverable-object page-customize-menu-button page-customize-menu-save-button' + (elementChangeContext.changedElementsList.length < 1 ? ' disabled' : '')}>
                        <p className="page-customize-menu-save-button-text">Save</p>
                    </div>
                    <div onClick={() => makeLogOut()} className="hoverable-object page-customize-menu-button page-customize-menu-logout-button">
                        <p className="page-customize-menu-save-button-text">Log out</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;