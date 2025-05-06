import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "../utils/supabase";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        toast(signInError.message);
      }

      toast.success("Logged In Successfully");
      navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-3/4 flex-col gap-2">
      <h1 className="text-4xl font-extrabold tracking-tight uppercase">
        Login here
      </h1>

      <div className="space-y-2">
        <form onSubmit={handleSignIn}>
          <Input
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button className="w-full">Log in</Button>
        </form>
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
