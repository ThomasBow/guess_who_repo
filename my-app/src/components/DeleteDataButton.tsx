


import { useAuth } from "./AuthProvider";
import * as api from "../helpers/api";
import { useGlobalContext } from "./GlobalContextProvider";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const DeleteDataButton: React.FC = () => {

    const { revokeAuth } = useAuth();
    const { user } = useGlobalContext();

    const handleDeleteData = async () => {
        if (user === undefined) return;

        api.DeleteUserData(user)
            .then(() => revokeAuth());
    }

    return (
        <IconButton
            color="inherit"
            onClick={handleDeleteData}
            aria-label="delete data"
        >
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteDataButton;