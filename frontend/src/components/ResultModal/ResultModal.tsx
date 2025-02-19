import { Box, Button, Card, Modal, Typography } from "@mui/material";

import style from "./ResultModal.module.css";

type ModalProps = {
  city: string;
  days: number;
  avgTemp: string | null;
  isOpen: boolean;
  handleClose: () => void;
};

export default function ResultModal({
  city,
  days,
  avgTemp,
  isOpen,
  handleClose,
}: ModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={style.modalCard} sx={{ bgcolor: "transparent" }}>
        <Typography id="modal-modal-title" variant="h6">
          {`Weather Result for ${city}`}
        </Typography>
        <Typography id="modal-modal-title">
          {`Average Temperature over ${days} days`}
        </Typography>
        <div className={style.temperatureWrapper}>
          <Typography variant={"h6"} color="black" fontWeight={600}>
            {avgTemp}
          </Typography>
        </div>
        <Button onClick={handleClose}>Back</Button>
      </Box>
    </Modal>
  );
}
