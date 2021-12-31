import { useEffect } from "react";

export default (title = null) => {
  useEffect(() => {
    document.title = title || "Soundboard";
  }, [title]);
};
