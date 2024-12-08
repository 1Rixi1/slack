import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignInFlowType } from "@/features/auth/types";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

type SignInCardPropsType = {
  setState: (state: SignInFlowType) => void;
};

const SignInCard = ({ setState }: SignInCardPropsType) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);

    signIn("password", { email, password, flow: "signIn" })
      .catch(() => {
        setError("Неверный Email или Password !");
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
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Войдите в систему</CardTitle>
        <CardDescription>Введите Email и Password</CardDescription>
      </CardHeader>
      {error && (
        <div className="bg-destructive/15 text-destructive rounded-md text-sm flex items-center gap-x-3 p-3 mb-6 ">
          <TriangleAlert className="size-4" />
          {error}
        </div>
      )}

      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={handlePasswordSignIn} className="space-y-2.5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            disabled={pending}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            required
            disabled={pending}
          />
          <Button className="w-full" size="lg" type="submit" disabled={pending}>
            Войти
          </Button>
        </form>
        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            onClick={() => handleProviderSignIn("google")}
            size="lg"
            variant="outline"
            disabled={pending}
          >
            Войти с помощью Google
            <FcGoogle className="absolute top-3 left-3" />
          </Button>

          <Button
            className="w-full relative"
            onClick={() => handleProviderSignIn("github")}
            size="lg"
            variant="outline"
            disabled={pending}
          >
            Войти с помощью GitHub
            <FaGithub className="absolute top-3 left-3" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Вы еще не зарегистрированы ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("SignUp")}
          >
            Зарегистрироваться
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
