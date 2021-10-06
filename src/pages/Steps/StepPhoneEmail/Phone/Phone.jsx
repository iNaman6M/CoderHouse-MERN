import React, { useState } from "react";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Phone = () => {
  const [phonenumber, setPhonenumber] = useState("");

  return (
    
      <Card title="Enter your Phone Number" icon="phone">
        <TextInput
          value={phonenumber}
          onChange={(event) => setPhonenumber(event.target.value)}
        />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    
  );
};

export default Phone;
