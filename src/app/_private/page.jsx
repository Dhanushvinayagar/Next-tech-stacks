export default function PrivateComponent() {
    return (
        <>
            <h1>
                Private folder : Starts with _
            </h1>
            <h1>
                This is not shown in browser (_private)
            </h1>
            <h1>
                Can use it inside any page.tsx
            </h1>
        </>
    );
}
