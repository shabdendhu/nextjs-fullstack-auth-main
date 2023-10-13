import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import style from "./Signup.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";

const Home = () => {
  return (
    <div className={style.contentContainer}>
      <div className={style.instractionContainer}>
        <p>The best app for pickle </p>
      </div>
      <div className={style.buttonContainer}>
        <div className={style.loginCard}>Sign In</div>
        <div className={style.createAccount}>Create an account</div>
      </div>
    </div>
  );
};
const Signup = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  };
  const handleredirectToLogin = () => {
    router.push("/login");
  };
  return (
    <div className={style.container}>
      {/* <Home /> */}
      <div className={style.logoHeader}>-:ACHARA:-</div>
      <div className={style.bluryBackground}>
        <div className={style.loginbackground}>
          <h1 className={style.header}>Register</h1>
          <p className={style.subheader}>Create your new account</p>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputContainer}>
              <span>
                <PersonIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
              <input placeholder="Full Name" />
            </div>
            <br />
            <div className={style.inputContainer}>
              <span>
                <EmailIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
              <input placeholder="Full Name" />
            </div>
            <br />
            <div className={style.inputContainer}>
              <span>
                <LockIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
              <input placeholder="Password" />
              <span>
                <VisibilityOffIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
            </div>

            <div className={style.forgotPassword}>Forgot Password?</div>

            <button type="submit" className={style.loginButton}>
              Signup
            </button>
            <div className={style.footerInstruction}>
              Already have an account?{" "}
              <b onClick={handleredirectToLogin}>Log In</b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
