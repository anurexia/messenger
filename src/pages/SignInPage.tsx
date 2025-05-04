import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const SignInPage: React.FC = () => {
  return (
    <div className="flex w-3/4 flex-col gap-2">
      <h1 className="text-4xl font-extrabold tracking-tight uppercase">
        Login here
      </h1>

      <div className="space-y-2">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Log in</Button>
        {/* future feature */}
        <small>Forgot your password?</small>

        <small className="">
          Don't have an account yet?{" "}
          <Link className="font-bold" to="/sign-up">
            Create your account{" "}
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignInPage;
