import React, { useState } from "react";
import Text from "./Text";
import CountDown from "./CountDown";
import CosButton from "./common/CosButton";
import { Box, Stack } from "@mui/material";
import SignUpform from "./forms/SignUpform";
import Overlay from "./common/Overlay";
import { motion, AnimatePresence } from "framer-motion";

const ComingSoon = () => {
  const [IsSignUp, setIsSignUp] = useState(false);
  const handleSignUpform = () => {
    setIsSignUp(!IsSignUp);
  };

  const closeSignUp = () => {
    setIsSignUp(false);
  };

  const overlyClose = () => {
    setIsSignUp(false);
  };

  return (
    <div className="forOverflow">
      <div className="csMain">
        <div className="cs_logo">
          <h1>
            <Text text="QASIM." />
          </h1>
          <div className="logo_btns">
            <Stack>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <motion.div whileTap={{ scale: 0.9 }}>
                  <CosButton
                    button="sign Up"
                    SignUpformprop={handleSignUpform}
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.91 }}>
                  <CosButton button="Log In" />
                </motion.div>
              </Box>
            </Stack>
          </div>
        </div>
        <div className="coming_soon">
          <div className="cs_outer">
            <h1>
              <Box sx={{ fontSize: { md: "42px", sm: "30px", xs: "26px" } }}>
                <Text text="we are coming soon !!" />
              </Box>
            </h1>
            <p>
              <Text text="stay tuned for something amazing" />
            </p>

            <CountDown />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {IsSignUp && <SignUpform closeSignUp={closeSignUp} />}
      </AnimatePresence>

      {IsSignUp === true ? <Overlay closeOverlayPorp={overlyClose} /> : null}
    </div>
  );
};

export default ComingSoon;
