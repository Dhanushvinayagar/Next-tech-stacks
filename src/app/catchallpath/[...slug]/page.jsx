export default function Slug({ params }) {
    // conditional rendering
    if (params.slug.length === 1)
        return (
            <>
                <p>
                    Enter any path with n number of routes
                </p>
                <p>
                    Try n number of route to see magic
                </p>
                <p>
                    Eg:
                    1- one
                    2- one/two
                    3- one/two/three
                </p>
            </>
        )

    if (params.slug.length === 2)
        return (
            <>
                <p>
                    The path is stored in slug as array element
                </p>
                <p>
                    Can render any component here based on condition
                </p>
            </>
        )

    return <>
        {
            params.slug.map((el, i) => {
                return (
                    <>
                        <p>Try adding more</p>
                        <div key={i}>
                            <p>{el}</p>
                        </div>
                    </>
                )
            })
        }
    </>
}