import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Happy path test   ", async () => {
  render(<App />);
  const copyrightText = await screen.findByText(/copyright/i);
  expect(copyrightText).toBeInTheDocument();

  const loginLink = await screen.findByRole("link", { name: /login/i });
  expect(loginLink).toBeInTheDocument();
  userEvent.click(loginLink);

  const signInText = await screen.findByRole("heading", {
    name: /sign in/i,
  });
  expect(signInText).toBeInTheDocument();

  const emailField = await screen.findByRole("textbox", {
    name: /email address/i,
  });
  expect(emailField).toBeInTheDocument();

  const passwordField = await screen.findByLabelText(/password/i);
  expect(passwordField).toBeInTheDocument();

  const signButton = await screen.findByRole("button", { name: /sign in/i });
  expect(signButton).toBeInTheDocument();
  expect(signButton).toBeDisabled();

  const registerLink = await screen.findByRole("link", {
    name: /register/i,
  });
  expect(registerLink).toBeInTheDocument();

  userEvent.clear(registerName);
  userEvent.type(registerName, "Someone Else");
  userEvent.clear(registerEmail);
  userEvent.type(registerEmail, "haha@example.com");
  userEvent.clear(registerPassword);
  userEvent.type(registerPassword, "hahaha");
  userEvent.clear(confirmPassword);
  userEvent.type(confirmPassword, "hahaha");
  expect(registerButton).toBeEnabled();

});
