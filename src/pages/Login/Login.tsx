import { projectAuth } from "firebase/config";
import { useForm } from "react-hook-form";
import { FieldErrors, SubmitHandler } from "react-hook-form/dist/types";

interface LoginProps {}

interface LoginFormInputs {
  userName: string;
  password: string;
}

const Login = ({ }: LoginProps) => {

  const { register, handleSubmit, setError, formState: {errors} } = useForm<LoginFormInputs>();

  const submitForm: SubmitHandler<LoginFormInputs> = async (data: LoginFormInputs) => {
    await projectAuth.signInWithEmailAndPassword(data.userName, data.password)
      .catch(err => {
        setError("root", {message: err.message});
      });
  }

  return (
    <div className="mt-20">

      <div className="max-w-sm bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm md:max-w-md xl:p-0 mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl text-center">
              Sign in with provided credentials
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>

            <div>
              <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input
                type="email"
                id="userName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                {...register("userName", {
                  required: "Email address is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format"
                  }
                })}
              />
            </div>

            <div>
              <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            {Object.keys(errors).map((inputName, index) => {
              const inputNameAsErrKey = inputName as keyof FieldErrors<LoginFormInputs>;

              if (errors[inputNameAsErrKey]) {
                return <div key={index} className="text-red-600 mt-1">{errors[inputNameAsErrKey]?.message}</div>
              } else {
                return null;
              }
            })}

            <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white px-5 rounded-md py-2.5 mt-4">Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
