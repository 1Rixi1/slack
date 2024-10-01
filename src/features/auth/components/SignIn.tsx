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
import { FormEvent, useState } from "react";

import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

type SignInPropsType = {
  setSignInFlow: (signInFlow: SignInFlowType) => void;
};

const SignIn = ({ setSignInFlow }: SignInPropsType) => {
  const router = useRouter();
  const { signIn } = useAuthActions();

  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setPending(true);

    signIn("password", { email, password, flow: "signIn" })
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        setError("Неверный Email или Password !");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignIn = (value: "github" | "google") => {
    setPending(true);

    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Войдите в систему</CardTitle>
        <CardDescription>Введите Email и Password</CardDescription>
      </CardHeader>
      {!!error && (
        <div className="flex items-center gap-x-2 bg-destructive/15 text-sm text-destructive p-3 mb-6 rounded-md">
          <TriangleAlert className="size-4" />
          {error}
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={handlePasswordSignIn}>
          <Input
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={pending}
            type="email"
            placeholder="Введите Email"
          />
          <Input
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={pending}
            type="password"
            placeholder="Введите Пароль"
          />
          <Button className={"w-full"} type="submit" disabled={pending}>
            Войти
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            variant="outline"
            size="lg"
            disabled={pending}
            onClick={() => handleProviderSignIn("google")}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Войти через Google
          </Button>
          <Button
            variant="outline"
            className="w-full relative"
            size="lg"
            disabled={pending}
            onClick={() => handleProviderSignIn("github")}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Войти через GitHub
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          У вас еще нет аккаунта ?
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
