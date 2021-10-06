import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");

  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter the OTP" icon="lock-emoji">
        <TextInput                                                                                                                                                                 
          value={otp} 
          onChange={(event) => setOtp(event.target.value)}
        />
        <div>
            <div className={styles.actionButtonWrap}>
             <Button onClick={onNext
            } text="Next" />
            </div>   
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
        
      </Card>
      </div>

  );
};

export default StepOtp;
