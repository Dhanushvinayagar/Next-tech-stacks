import PrivateComponent from "../_private/page";
import Component1 from "./component1";

function Component2() {
    return (
        <>
            <h1>
                Component 2
            </h1>
        </>
    );
}

export default function Filecolocation() {
    return (
        <>
            <Component1 />
            <Component2 />
            <PrivateComponent />
        </>
    );
}
