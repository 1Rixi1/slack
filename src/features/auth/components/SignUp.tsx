import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlowType } from "@/features/auth/type";

import { useAuthActions } from "@convex-dev/auth/react";
import { FormEvent } from "react";
import { TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

type SignUpPropsType = {
  setSignInFlow: (signInFlow: SignInFlowType) => void;
};

const SignUp = ({ setSignInFlow }: SignUpPropsType) => {
  const router = useRouter();
  const { signIn } = useAuthActions();

  const [pending, setPending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setPending(true);

    signIn("password", { name, email, password, flow: "signUp" })
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        setError("Произошла какая-то ошибка !");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignIn = (value: "google" | "github") => {
    setPending(true);

    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Зарегистрируйтесь</CardTitle>
        <CardDescription>Введите данные для регистрации</CardDescription>
      </CardHeader>
      {!!error && (
        <div className="flex items-center gap-x-2 p-3 mb-6 bg-destructive/15 text-destructive text-sm">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={handlePasswordSignUp}>
          <Input
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={pending}
            placeholder="Введите Full Name"
          />
          <Input
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={pending}
            required
            type="email"
            placeholder="Введите Emeail"
          />
          <Input
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={pending}
            required
            type={"password"}
            placeholder={"Введите пароль"}
          />
          <Input
            className="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={pending}
            type={"password"}
            placeholder={"Повторите пароль"}
          />
          <Button className="w-full" disabled={pending}>
            Зарегистрироваться
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            variant="outline"
            disabled={pending}
            onClick={() => handleProviderSignIn("google")}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Войти через Google
          </Button>
          <Button
            className="w-full relative"
            variant="outline"
            disabled={pending}
            onClick={() => handleProviderSignIn("github")}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Войти через GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          У вас уже есть аккаунт ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setSignInFlow("signIn")}
          >
            Войти
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUp;
