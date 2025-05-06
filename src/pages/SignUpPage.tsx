import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "../utils/supabase";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const handleSignUp = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        toast(signUpError.message);
      }

      toast.success("Account created successfully!");
      navigation("/main");
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex w-3/4 flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight uppercase">
          Create your Account
        </h1>
        <div className="space-y-2">
          <form onSubmit={handleSignUp}>
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

            <Button className="w-full">Create Account</Button>
          </form>

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
