import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  interface FormValues {
    email: string;
    password: string;
  }
  const handleSubmit = async (values: FormValues) => {
    console.log("Form submitted with values:", values);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: values.email,
        password: values.password,
        expiresInMins: 30,
      });
      const authToken = response.data.token;
      console.log(authToken);
      sessionStorage.setItem("authToken", authToken);
      sessionStorage.setItem("status", "true");
      navigate("/")

    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-4xl">
        <div className="md:w-1/2 bg-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <button
                  className="mt-4 w-full bg-white border border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">New Customer!</h2>
          <p className="text-gray-800">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
            <br />
            <br />
            <span>
              <p>
                username: <b>kminchelle</b>{" "}
              </p>
              <p>
                password: <b>0lelplR</b>{" "}
              </p>
            </span>
          </p>
          <Link to="/account/register">
            <button className="mt-4 min-w-[50%] min-h-12  bg-white border border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
