import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/core";

const Profile = () => {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="email">Name</FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" />
        <FormHelperText id="email-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Profile;
