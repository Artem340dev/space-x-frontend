import { useContext } from "react"

import AdminMenu from "./AdminMenu";
import { AdminDataContext, PagesContext } from "../../App";
import AdminEditForm from "./AdminEditForm";

const AdminCustomize = () => {
    const { user, setUser, selectedPage, setSelectedPage } = useContext(AdminDataContext);
    const pagesContext = useContext(PagesContext);

    return [
        <AdminMenu />,
        <AdminEditForm />,
        <div className="page-local-content">
            {pagesContext[selectedPage]}
        </div>
    ];
}

export default AdminCustomize;