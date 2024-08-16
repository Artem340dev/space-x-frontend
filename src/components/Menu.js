import { useLocation } from 'react-router-dom';
import { AdminDataContext, ElementChangeContext, WebsiteElementsContext } from '../App';
import logotype from '../images/logotype.png';

import { useContext } from 'react';

const Menu = () => {
    const websiteElementsContext = useContext(WebsiteElementsContext);
    const adminDataContext = useContext(AdminDataContext);
    const elementChangeContext = useContext(ElementChangeContext);
    //const location = useLocation();

    return (
        <div className="page-menu">
            <div className="page-menu-content">
                <div className="page-menu-logotype">
                    <img className="page-menu-logotype-image" src={logotype} />
                </div>
                <div className="page-menu-navigation">
                    {
                        websiteElementsContext.elements.filter(element => element.fields.element_tag.includes('#page-menu-navigation-element')).map((item, index) => {
                            return <div onClick={(event) => elementChangeContext.openEditForm(event, item)} id={item.fields.element_tag} className="pre-hovered-text">
                                <a href={item.metadata.filter(metadataobject => metadataobject.fields.attribute == 'href')[0].fields.value} className="hovered-text page-menu-navigation-element">{item.metadata.filter(metadataobject => metadataobject.fields.attribute == 'text')[0].fields.value}</a>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;