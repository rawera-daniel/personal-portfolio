import { useState } from "react";

export function useEmailValidation(setEmail) {
  const [isValid, setIsValid] = useState(true);

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Check if the new email is valid and update the isValid state
    setIsValid(isValidEmail(newEmail));
  };

  const isValidEmail = (email) => {
    // Define the regular expression pattern for a simple email validation
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Use the test method to check if the email matches the pattern
    return pattern.test(email);
  };

  return [isValid, handleEmail];
}
