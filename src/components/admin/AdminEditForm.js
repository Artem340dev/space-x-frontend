import { useContext, useEffect, useState } from "react"

import $ from 'jquery';

import AdminMenu from "./AdminMenu";
import { AdminDataContext, ElementChangeContext, PagesContext } from "../../App";

const AdminEditForm = () => {
    const { user, setUser, selectedPage, setSelectedPage } = useContext(AdminDataContext);
    const elementChangeContext = useContext(ElementChangeContext);
    const { changingElement, setChangingElement, changedElementsList, setChangedElementsList, changableElements } = useContext(ElementChangeContext);
    const pagesContext = useContext(PagesContext);

    const [ metadataList, setMetadataList ] = useState([]);

    const updateMetadataList = (attr, value) => {
        var newMetadata = changingElement.metadata.filter(item => item.fields.attribute == attr)[0];
        newMetadata.fields.value = value;

        var newMetadataList = Array.from(metadataList).filter(item => item.pk != newMetadata.pk);
        newMetadataList.push(newMetadata);
        setMetadataList(newMetadataList);
    }

    const sendMetadata = () => {
        elementChangeContext.updateElement(metadataList);
        setMetadataList([]);
    }

    useEffect(() => {
        $('.page-admin-edit-form').on('click', (event) => {
            if ($(event.target).is('.page-admin-edit-form')) {
                setMetadataList([]);
                setChangingElement(null);
            }
        });
    })

    return (
        <div className={"page-admin-edit-form" + (changingElement !== null ? ' page-admin-edit-form-actived' : '')}>
            <div className="page-admin-edit-form-content">
                <h1 className="page-admin-edit-form-content-main-text">Edit element</h1>
                <div className="page-admin-edit-form-content-optionbar-container">
                    <label for="element-optionbar">Element</label>
                    <select id="element-optionbar" name="pages" className="page-admin-edit-form-content-optionbar-container-content">
                        <option value="main" className="page-admin-edit-form-content-optionbar-container-content-option">{(changingElement !== null ? changingElement.fields.element_tag : '')}</option>
                    </select>
                </div>
                {
                    (changingElement !== null ? changingElement.metadata.map((item, index) => {
                        return (
                            <div className="page-admin-edit-form-content-input-container">
                                <label for={"#attr-" + item.fields.attribute}>{item.fields.attribute}</label>
                                <input onChange={(event) => {updateMetadataList(item.fields.attribute, event.target.value)}} id={"#attr-" + item.fields.attribute} placeholder={item.fields.value} />
                            </div>
                        )
                    }) : null)
                }
                <div onClick={() => sendMetadata()} className="page-admin-edit-form-content-sign-in-button">
                    <p>Change</p>
                </div>
            </div>
        </div>
    );
}

export default AdminEditForm;