import React, { useState } from "react";
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
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlowType } from "@/features/auth/types";

type SignUpCardPropsType = {
  setState: (state: SignInFlowType) => void;
};

const SignUpCard = ({ setState }: SignUpCardPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Зарегистрируйтесь, чтобы войти в систему</CardTitle>
        <CardDescription>
          Введите Email, Password и Confirm Password
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            disabled={false}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            required
            disabled={false}
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Подтверждение Пароля"
            required
            disabled={false}
          />
          <Button className="w-full" size="lg" type="submit" disabled={false}>
            Войти
          </Button>
        </form>
        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            onClick={() => {}}
            size="lg"
            variant="outline"
            disabled={false}
          >
            Войти с помощью Google
            <FcGoogle className="absolute top-3 left-3" />
          </Button>

          <Button
            className="w-full relative"
            onClick={() => {}}
            size="lg"
            variant="outline"
            disabled={false}
          >
            Войти с помощью GitHub
            <FaGithub className="absolute top-3 left-3" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Вы уже зарегистрированы ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("SignIn")}
          >
            Войти
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
