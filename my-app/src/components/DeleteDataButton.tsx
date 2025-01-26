


import { useAuth } from "./AuthProvider";
import * as api from "../helpers/api";
import { useGlobalContext } from "./GlobalContextProvider";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import { DeleteUserConfirmationDialog } from "./DeleteUserConfirmationDialog";
import React from "react";

const DeleteDataButton: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const openConfirmationDialog = () => setOpen(true);
    const closeConfirmationDialog = () => {
        setOpen(false);
    }

    const { revokeAuth } = useAuth();
    const { user } = useGlobalContext();

    const handleOnClick = () => {
        openConfirmationDialog();
    }

    const handleDeleteData = async () => {
        if (user === undefined) return;

        api.DeleteUserData(user)
            .then(() => revokeAuth());
    }

    return (
        <IconButton
            color="inherit"
            onClick={handleOnClick}
            aria-label="delete data"
        >
            <DeleteIcon />
            <DeleteUserConfirmationDialog
                open={open}
                onClose={closeConfirmationDialog}
                onConfirm={handleDeleteData}
            />
        </IconButton>
    );
}

export default DeleteDataButton;