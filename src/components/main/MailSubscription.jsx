import React from "react";
import Heading from "../elements/Heading";
import Button from "../elements/Button";

export const MailSubscription = () => {
  return (
    <div className="mailSubscription">
      <Heading text={`Sign up and get exclusive special deals`} />
      <div >
      <input type="text" />
      <Button text={`Sign Up`} width={65}/>
      </div>
    </div>
  );
};

export default MailSubscription;