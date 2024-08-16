import { useContext } from 'react';
import { ElementChangeContext, WebsiteElementsContext } from '../../App';

import startButtonBackground from '../../images/button-background.png';

const CompanyDescription = (elements) => {
    const websiteElementsContext = useContext(WebsiteElementsContext);
    const elementChangeContext = useContext(ElementChangeContext);
    
    return (
        <div className="company-description-section">
            <div className="company-description-section-clickable-information-container">
                <div className="company-description-section-clickable-information-container-text-container">
                    <p className="changable-object company-description-section-clickable-information-container-text-container-large-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '.company-description-section-clickable-information-container-text-container-large-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-clickable-information-container-text-container-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '.company-description-section-clickable-information-container-text-container-small-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                </div>
                <div className="company-description-section-clickable-information-container-start-button">
                    <p className="changable-object company-description-section-clickable-information-container-start-button-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '.company-description-section-clickable-information-container-start-button-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <img src={startButtonBackground} />
                </div>
            </div>
            <div className="company-description-section-benefits-container">
                <div id="company-description-section-benefits-container-element-up-left" className="company-description-section-benefits-container-element">
                    <p className="changable-object company-description-section-benefits-container-element-small-text-top company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-left-small-text-top')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object changable-object company-description-section-benefits-container-element-large-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-left-large-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-small-text-bottom company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-left-small-text-bottom')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                </div>
                <div id="company-description-section-benefits-container-element-up-right" className="company-description-section-benefits-container-element">
                    <p className="changable-object company-description-section-benefits-container-element-small-text-top company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-right-small-text-top')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-large-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-right-large-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-small-text-bottom company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-up-right-small-text-bottom')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                </div>
                <div id="company-description-section-benefits-container-element-down-left" className="company-description-section-benefits-container-element">
                    <p className="changable-object company-description-section-benefits-container-element-small-text-top company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-left-small-text-top')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-large-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-left-large-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-small-text-bottom company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-left-small-text-bottom')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                </div>
                <div id="company-description-section-benefits-container-element-down-right" className="company-description-section-benefits-container-element">
                    <p className="changable-object company-description-section-benefits-container-element-small-text-top company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-right-small-text-top')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-large-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-right-large-text')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                    <p className="changable-object company-description-section-benefits-container-element-small-text-bottom company-description-section-benefits-container-element-small-text">
                        {
                            websiteElementsContext.elements
                            .filter(element => element.fields.element_tag == '#company-description-section-benefits-container-element-down-right-small-text-bottom')
                                .map((item, index) => 
                                    <p onClick={(event) => elementChangeContext.openEditForm(event, item)}>{item.metadata
                                        .filter(metadataobject => metadataobject.fields.attribute == 'text')[0]
                                        .fields
                                        .value}</p>
                                )
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CompanyDescription;