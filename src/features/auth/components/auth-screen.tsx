"use client";

import { useState } from "react";
import { SignInFlowType } from "@/features/auth/type";
import SignIn from "@/features/auth/components/SignIn";
import SignUp from "@/features/auth/components/SignUp";

const AuthScreen = () => {
  const [signInFlow, setSignInFlow] = useState<SignInFlowType>("signIn");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5c3b58]">
      <div className="md:h-auto md:w-[450px]">
        {signInFlow === "signIn" ? (
          <SignIn setSignInFlow={setSignInFlow} />
        ) : (
          <SignUp setSignInFlow={setSignInFlow} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
