import './SecureTaber.css';



const SecureTaber: React.FC<any> = (props) => {
  return (
    <div className="login-taber">
      <a href="/login" className="link-to">登陆</a>
            &nbsp;or&nbsp;
      <a href="/logup" className="link-to">注册</a>
    </div>
  );
}

const SecureText: React.FC<any> = (props) => {
  return (
    <div className="form-title">
      <img src="/assets/images/lock.svg" alt="" />
      <span>登陆区域</span>
    </div>
  );
};

export default SecureTaber;
export {SecureText};