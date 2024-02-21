import { ChildNode } from "@/libs/types";
import { Box } from "@mui/material";
import Header from "./header";
export default function MainTemplate({ children }: ChildNode) {
  return (
    <>
      <Header />
      <Box className="mainHeading">
        <h1>Enjoy Blistering Fast 5G Connectivity</h1>
        <p>
          Your favourite network, now on 5G. Experience data speeds like never
          before.
        </p>
      </Box>
      <section className="coming-soon">{children}</section>
    </>
  );
}
