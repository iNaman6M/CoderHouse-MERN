import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";
import { useHistory } from "react-router";

const Home = () => {
    const signIn ={
        color: '#0077ff',
        marginLeft: '8px',
        fontWeight: 'bold',
    };

    const history = useHistory();

    function startRegister(){
        history.push('/register');  
    }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing touches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get Your Username" />
        </div>
        <div className={styles.signInWrapper}>
            <div className={styles.hasInvite}>
               <span>Have an Invite Text ?</span>
               <Link to="/login" style={signIn}>Sign in</Link>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
