import React, { useEffect, useState } from "react";
import CreateWorkSpace from "@/features/workspace/component/createWorkSpace";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkSpace />
    </>
  );
};

export default Modals;
