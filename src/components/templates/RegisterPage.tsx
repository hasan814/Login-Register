import { IoClose } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="wrapper">
      <span className="icon-close">
        <IoClose />
      </span>
      <div className="form-box login">
        <h2>Register</h2>
        <form>
          <div className="input-box">
            <span className="icon">
              <FaUser />
            </span>
            <input type="text" />
            <label htmlFor="username">Username</label>
          </div>
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
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Have an account ?
              <Link href={"/login"} className="register-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
