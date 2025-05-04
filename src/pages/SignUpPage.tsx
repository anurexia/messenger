import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const SignUpPage: React.FC = () => {
  return (
    <>
      <div className="flex w-3/4 flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight uppercase">
          Create your Account
        </h1>
        <div className="space-y-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Create Account</Button>
          {/* future feature */}
          <small>Forgot your password?</small>

          <small className="">
            Already have an account?{" "}
            <Link className="font-bold" to="/sign-in">
              Log in here
            </Link>
          </small>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
