import useFormHandler from "hooks/useFormHandler";
import Button from "./Button";
import Input from "./Input";
import { LoginSchema } from "validations/login.schema";

export default function LoginForm() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormHandler({
    url: "https://test.3scorers.com/api/v1/auth/login",
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    successMsg: "Login Successful",
    errorMsg: "Authentication has failed",
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-2 py-12">
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
        type="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        error={errors.password && touched.password && errors.password}
      />

      <div className="w-2/3 mx-auto pt-20">
        <Button
          type="submit"
          value="Login"
          loading={isSubmitting || false}
          disabled={isSubmitting || false}
        />
      </div>
    </form>
  );
}
