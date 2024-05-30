import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;

  @media(max-width:${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`;
