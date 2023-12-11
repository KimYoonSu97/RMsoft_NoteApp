import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useGetMemoExist = () => {
  const [memoExist, setMemoExist] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.search === "") {
      setMemoExist(false);
      return;
    }
    const isMemoExist = localStorage.getItem(location.search);
    if (isMemoExist === null) {
      setMemoExist(false);

      return;
    }

    setMemoExist(true);
  }, [location]);

  const exist = useMemo(() => memoExist, [location]);

  return exist;
};
