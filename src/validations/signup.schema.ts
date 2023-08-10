import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  username: yup.string().min(3, "Cannot be less than 3").required("Required"),
  password: yup.string().min(6, "Cannot be less than 6").required("Required"),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});
