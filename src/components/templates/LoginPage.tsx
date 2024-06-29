import { IoClose } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="wrapper">
      <span className="icon-close">
        <IoClose />
      </span>
      <div className="form-box login">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <span className="icon">
              <IoMail />
            </span>
            <input type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FaLock />
            </span>
            <input type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link href={"/"}>Forget Password</Link>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don&apos;t have an account ?
              <Link href={"/register"} className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
