import React, { useEffect, useState } from "react";

export default function Loading() {
  const [loadingIndicater, setLoadingIndicater] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (loadingIndicater === ">>>") {
        setLoadingIndicater("");
      }

      setLoadingIndicater((state) => state + ">");
    }, 300);
  }, [loadingIndicater]);

  return (
    <div>
      { `가져오는 중입니다 ${loadingIndicater}` }
    </div>
  );
}
