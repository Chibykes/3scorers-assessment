import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup.string().min(6, "Cannot be less than 6").required("Required")
});
