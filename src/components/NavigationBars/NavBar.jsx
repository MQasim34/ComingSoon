import React from "react";
import Text from "../Text";
import CosButton from "../common/CosButton";
import { Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = ({ handleSignUpform, setIscoming }) => {
  return (
    <div className="MainNAvBar">
      <div className="cs_logo">
        <h1>
          <Text text="QASIM." />
        </h1>
        <Box
          className="logo_btns"
          display="flex"
          justifyContent="space-between"
          gap="45px"
        >
          {setIscoming === false ? (
            <nav>
              <ul>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="20px"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </Box>
              </ul>
            </nav>
          ) : null}
          <Stack>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
            >
              <motion.div whileTap={{ scale: 0.9 }}>
                <CosButton button="sign Up" SignUpformprop={handleSignUpform} />
              </motion.div>
              <motion.div whileTap={{ scale: 0.91 }}>
                <CosButton button="Log In" />
              </motion.div>
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default NavBar;
