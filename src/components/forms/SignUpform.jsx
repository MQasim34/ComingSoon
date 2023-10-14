import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Checkbox,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CosButton from "../common/CosButton";
import { motion } from "framer-motion";
import AloeVera from "../../assets/AloeVera.png";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import PatternOutlinedIcon from "@mui/icons-material/PatternOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const signUpformvariant = {
  hidden: {
    opacity: 0,
    scale: 4,
    rotate: -360,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 134,
    },
  },
  exit: {
    opacity: 0,
    scale: 4,
    rotate: 360,
  },
};

const SignUpform = ({ closeSignUp }) => {
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(false);
  // varifypass
  const [varifypassword, setvarifyPassword] = useState("");
  const [varifypass, setvarifypass] = useState(false);

  return (
    <div className="signUpformOuter">
      <motion.div
        variants={signUpformvariant}
        className="signUpform"
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Box>
          <Stack>
            <div onClick={closeSignUp}>
              <CosButton button={<CloseOutlinedIcon />} />
            </div>
          </Stack>
        </Box>
        <form action="" className="signUpMianForm">
          <div className="formGroup">
            <PersonOutlinedIcon className="iconsss" />
            <label htmlFor="">
              <input
                type="text"
                name=""
                id=""
                placeholder="User Name *"
                required
              />
            </label>
          </div>
          <div className="formGroup">
            <AlternateEmailOutlinedIcon className="iconsss" />
            <label htmlFor="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Email ID *"
                required
              />
            </label>
          </div>
          <div className="formGroup">
            <PasswordOutlinedIcon className="iconsss" />
            <label htmlFor="">
              <input
                value={password}
                type={visible ? "text" : "password"}
                name=""
                id=""
                placeholder="Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div onClick={() => setvisible(!visible)}>
                {visible ? (
                  <VisibilityOffOutlinedIcon className="iconsss showKey" />
                ) : (
                  <VisibilityOutlinedIcon className="iconsss showKey" />
                )}
              </div>
            </label>
          </div>
          <div className="formGroup">
            <PatternOutlinedIcon className="iconsss" />
            <label htmlFor="">
              <input
                value={varifypassword}
                type={varifypass ? "text" : "password"}
                name=""
                id=""
                placeholder="Varify Password"
                onChange={(e) => {
                  setvarifyPassword(e.target.value);
                }}
              />
              <div onClick={() => setvarifypass(!varifypass)}>
                {varifypass ? (
                  <VisibilityOffOutlinedIcon className="iconsss showKey" />
                ) : (
                  <VisibilityOutlinedIcon className="iconsss showKey" />
                )}
              </div>
            </label>
          </div>

          <div className="formGroup">
            <FormGroup
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                // required
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                style={{ color: "#fff", fontSize: "10px", border: "none" }}
                label="By creating an account, you agree to our terms and conditions"
              />
            </FormGroup>
          </div>

          <div className="formGroup">
            <Typography style={{ width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                Submit
              </Button>
            </Typography>
          </div>
        </form>
        <img className="SignUpAv" src={AloeVera} alt="" />
      </motion.div>
    </div>
  );
};

export default SignUpform;
