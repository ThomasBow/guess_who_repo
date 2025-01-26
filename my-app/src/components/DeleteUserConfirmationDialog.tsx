


import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface ConfirmationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const DeleteUserConfirmationDialog = ({ open, onClose, onConfirm }: ConfirmationDialogProps) => {

    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClose();
    }

    const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onConfirm();
    }


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete All User Data</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete all user data?
                </DialogContentText>
                <DialogContentText>
                    This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleConfirm} color="error" variant="contained">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};