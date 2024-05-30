import  { WrapperItem } from "./Wrapper.styled.js";

function Wrapper ({ children }) {
    return <WrapperItem>{children}</WrapperItem>;
}

export default Wrapper;