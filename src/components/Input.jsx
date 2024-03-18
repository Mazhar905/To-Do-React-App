function Input() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const valueHandle = (e) => {
    console.log(password);
    setPassword(e.target.value);
    console.log(password);
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        value={password}
        onChange={valueHandle}
        type={showPassword ? "text" : "password"}
        placeholder="Enter Your Password "
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Input;
