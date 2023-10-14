import { Box, Button, Stack } from "@mui/material";
import React from "react";

const CosButton = ({ button, SignUpformprop }) => {
  return (
    <div>
      <Stack>
        <Box>
          <Button
            onClick={SignUpformprop}
            variant="contained"
            sx={{ fontSize: { md: "14px", xs: "10px" }, fontWeight: "bold" }}
            style={{
              fontFamily: " font-family: 'Poppins', sans-serif;",
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "700",
              letterSpacing: "-.3px",
            }}
          >
            {button}
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default CosButton;
