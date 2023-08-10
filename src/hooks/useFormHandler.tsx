import { AuthUser } from "contexts/AuthUser";
import { useFormik } from "formik";
import { setCookie } from "typescript-cookie";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useFormHandler({
  url,
  initialValues,
  validationSchema,
  successMsg,
  errorMsg,
}: any) {
  const { setUser } = useContext(AuthUser);
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data: any = await res.json();
        if (data.success) {
          resetForm();
          setUser(data);
          toast.success(successMsg);
          let hour = new Date(new Date().getTime() + 60 * 60 * 1000);
          data.token && setCookie("token", data.token, { expires: hour });
          data.accessToken &&
            setCookie("accessToken", data.accessToken, { expires: hour });
          data.refreshToken &&
            setCookie("refreshToken", data.refreshToken, { expires: 1 });
          navigate("/overview");
          return;
        }

        throw Error(errorMsg);
      } catch (err) {
        console.error(err);
        toast.error(errorMsg);
      }
    },
    validationSchema,
  });

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
