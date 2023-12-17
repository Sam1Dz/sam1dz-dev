/* MATERIAL UI */
import { useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

/* APP UI */
import UIThemeButton from '../Theme/button';

interface IUIDialogSetThemeProps {
  open: boolean;
  onClose: () => void;
}

export default function UIDialogSetTheme({
  open,
  onClose,
}: IUIDialogSetThemeProps) {
  const theme = useTheme();

  return (
    <Dialog maxWidth="sm" open={open} onClose={onClose} fullWidth>
      <DialogTitle>Tema</DialogTitle>
      <DialogContent>
        <UIThemeButton size="large" />
      </DialogContent>
    </Dialog>
  );
}
