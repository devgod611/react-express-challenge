
import { Install } from "./Install";
import { Technology } from "./Technology";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import styled from "@emotion/styled";
import { isAuthenticated } from "../helper/auth";
import { Redirect, Route } from "react-router-dom";

/**
 * Main Component
 */
export function Home() {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  return (
    <HomeStyled>
      <Navigation />
      <Route path="/install" component={Install} />
      <Route path="/technology" component={Technology} />
    </HomeStyled>
  );
}

const HomeStyled = styled(Wrapper)`
  display: flex;
  background-color: #0d1117;
`;
