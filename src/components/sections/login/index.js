import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LoginContent } from "../OtpLoginModal";
import style from "./Login.module.scss";

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
const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const loginRes = await apiPost("/api/user/login", {
      //   email: userInfo.email,
      //   password: userInfo.password,
      // });
      signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        callbackUrl: "/",
      }).catch((e) => toast.error("something went wrong"));
      // if (loginRes.success) {
      //   router.push("/");
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirectToForgotpassword = () => {
    router.push("/forgotpassword");
  };

  const handleredirectToLogin = () => {
    router.push("/signup");
  };
  const handleClickGoogleLogin = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "/" });
  };
  const handelChangeFields = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, [userInfo]);
  return (
    <div className={style.container}>
      {/* <Home /> */}
      <div className={style.logoHeader}>-:ACHARA:-</div>

      <div className={style.bluryBackground}>
        {/* <div className={style.loginbackground}>
          <h1 className={style.header}>Welcome Back</h1>
          <p className={style.subheader}>Login To Your Account</p>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputContainer}>
              <span>
                <EmailIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
              <input
                name="email"
                value={userInfo.email}
                onChange={handelChangeFields}
                placeholder="Email"
              />
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
              <input
                name="password"
                value={userInfo.password}
                onChange={handelChangeFields}
                placeholder="Password"
              />
              <span>
                <VisibilityOffIcon
                  style={{
                    color: "#0d4b0d",
                  }}
                />
              </span>
            </div>

            <div
              className={style.forgotPassword}
              onClick={handleRedirectToForgotpassword}
            >
              Forgot Password?
            </div>

            <div>
              <button type="submit" className={style.loginButton}>
                Login
              </button>

              <button
                className={style.googleButton}
                onClick={handleClickGoogleLogin}
              >
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/598/471/small/google-logo-icon-illustration-free-vector.jpg" />
                <h1>LOGIN WITH GOOGLE</h1>
              </button>

              <div className={style.footerInstruction}>
                Dont have an account?{" "}
                <b onClick={handleredirectToLogin}>Sign up</b>
              </div>
            </div>
          </form>
        </div> */}
        <LoginContent />
      </div>
    </div>
  );
};
export default Login;
