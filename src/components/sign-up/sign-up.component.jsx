import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
  const initialFormContent = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formContent, setFormContent] = useState(initialFormContent);
  const { displayName, email, password, confirmPassword } = formContent;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setFormContent(initialFormContent);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormContent({ ...formContent, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
