"use client";

import { useState } from "react";
import { SignInFlowType } from "@/features/auth/types";
import SignInCard from "@/features/auth/components/sign-in-card";
import SignUpCard from "@/features/auth/components/sign-up-card";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlowType>("SignIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "SignIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
