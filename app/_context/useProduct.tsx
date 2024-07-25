import { useContext } from "react";
import { LinkContext } from "./LinkShareContext";

function useLink() {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}

export default useLink;
