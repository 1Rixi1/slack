import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignInFlowType } from "@/features/auth/type";
import { useState } from "react";

type SignInPropsType = {
  setSignInFlow: (signInFlow: SignInFlowType) => void;
};

const SignIn = ({ setSignInFlow }: SignInPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Войдите в систему</CardTitle>
        <CardDescription>Введите Email и Password</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            className="w-full"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
            placeholder="Введите Email"
            required
          />
          <Input
            className="w-full"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={false}
            placeholder="Введите Пароль"
            required
          />
          <Button className={"w-full"} type="submit">
            Войти
          </Button>
        </form>
        <Separator />

        <div className="flex flex-col gap-y-2">
          <Button
            className="w-full relative"
            variant="outline"
            size="lg"
            disabled={false}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Войти через Google
          </Button>
          <Button
            variant="outline"
            className="w-full relative"
            size="lg"
            disabled={false}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Войти через GitHub
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          У вас еще нет аккаунта ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setSignInFlow("signUp")}
          >
            Зарегистрируйтесь
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignIn;
