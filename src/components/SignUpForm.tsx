import { SignUpSchema } from "validations/signup.schema";
import useFormHandler from "hooks/useFormHandler";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";

export default function SignUpForm() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormHandler({
    url: "https://test.3scorers.com/api/v1/auth/sign-up",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      repeat_password: "",
    },
    validationSchema: SignUpSchema,
    successMsg: "Registration successful",
    errorMsg: "Registration failed",
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div
        className="
          grid place-content-center w-24 h-24 
          mx-auto !mb-5 rounded-full bg-[--primary-color]
          lg:hidden
        "
      >
        <Logo />
      </div>

      <Input
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Enter Firstname"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        error={errors.firstName && touched.firstName && errors.firstName}
      />

      <Input
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Enter Lastname"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        error={errors.lastName && touched.lastName && errors.lastName}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Enter email address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        error={errors.email && touched.email && errors.email}
      />

      <Input
        type="text"
        name="username"
        label="Username"
        placeholder="Enter username"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.username}
        error={errors.username && touched.username && errors.username}
      />

      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        error={errors.password && touched.password && errors.password}
      />

      <Input
        type="password"
        name="repeat_password"
        label="Confirm Password"
        placeholder="Confirm password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.repeat_password}
        error={
          errors.repeat_password &&
          touched.repeat_password &&
          errors.repeat_password
        }
      />

      <div className="w-2/3 mx-auto pt-8">
        <Button
          type="submit"
          value="Sign up"
          loading={isSubmitting || false}
          disabled={isSubmitting || false}
        />
      </div>
    </form>
  );
}
