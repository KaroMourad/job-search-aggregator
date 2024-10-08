import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useRouterReady() {
  const router = useRouter();
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
        setIsReady(true);
    }
  }, [router.isReady]);

  return isReady;
}

export default useRouterReady;
