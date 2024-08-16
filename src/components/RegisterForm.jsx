import { useFormData } from "../hooks/formData.js";

export const RegisterForm = ({setToggleForm}) => {
  const { handleChange, data, handleCreateUser } = useFormData();

  return (
    <form onSubmit={handleCreateUser}>
        <div>
        <label htmlFor="name">
          Name:{" "}
        </label>
          <input
            value={data.name}
            onChange={handleChange}
            name="name"
            type="text"
          />
      </div>
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
        <label htmlFor="confirmPassword">
          Confirm Password:{" "}
          
        </label>
        <input
            value={data.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            type="password"
          />
      </div>
      <div style={{
            display: "flex",
            gap: '20px',
            width: "100%"
        }}>
        <button type="submit">Register</button> <a href="#"  onClick={()=>setToggleForm(false)}>Do you have a account?</a>
      </div>
    </form>
  );
};
