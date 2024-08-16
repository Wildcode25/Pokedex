import { useFormData } from "../hooks/formData.js";

export const LoginForm = ({setToggleForm}) => {
  const { handleChange, data, handleLoginUser } = useFormData();

  return (
    <form onSubmit={handleLoginUser}>
      <div>
        <label htmlFor="email">
          Email:{" "}
        </label>
          <input
            value={data.email}
            onChange={handleChange}
            name="email"
            type="text"
          />
      </div>

      <div>
        <label htmlFor="password">
          Password:{" "}
        </label>
          <input
            value={data.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
      </div>
      <div>
        <button type="submit">Login</button>
        <a href="#" onClick={()=>setToggleForm(true)}>Don't you have a account?</a>
      </div>
    </form>
  );
};
