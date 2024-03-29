import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
const colorByStatus = {
  ordered: "orange",
  payment: "blue",
  shipped: "hotpink",
  delivered: "green",
  canceled: "red",
};
export default function CopyButton({ textToCopy, status }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <FileCopyOutlinedIcon
        style={{ cursor: "pointer", color: colorByStatus[status] }}
        onClick={handleCopyClick}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Copied to clipboard"
      />
    </div>
  );
}
