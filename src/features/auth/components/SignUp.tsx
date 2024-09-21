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

type SignUpPropsType = {
  setSignInFlow: (signInFlow: SignInFlowType) => void;
};

const SignUp = ({ setSignInFlow }: SignUpPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Зарегистрируйтесь</CardTitle>
        <CardDescription>Введите данные для регистрации</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Введите Emeail"
            disabled={false}
            required
          />
          <Input
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder={"Введите пароль"}
            disabled={false}
            required
          />
          <Input
            className="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={"password"}
            placeholder={"Повторите пароль"}
            disabled={false}
            required
          />
          <Button className="w-full">Зарегистрироваться</Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2">
          <Button className="w-full relative" variant="outline">
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Войти через Google
          </Button>
          <Button className="w-full relative" variant="outline">
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
