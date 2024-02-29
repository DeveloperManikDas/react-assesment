import React from "react";
import Heading from "./Heading";
import Button from "./Button";

export const MailSubscription = () => {
  return (
    <div>
      <Heading text={`Sign up and get exclusive special deals`} />
      <Button text={`Sign Up`}/>
    </div>
  );
};

export default MailSubscription;