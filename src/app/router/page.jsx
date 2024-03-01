
export default function Router() {
    return (
        <>
            <div style={{fontSize:'20px' , color:"green"}}>
                <p>Next  Routes</p>
                <p>
                    Place all routes inside app folder
                </p>
                <p>Follows folder structure based routing</p>
                <p>
                    Folder name acts as route
                </p>
                <p>
                    File name must be page.jsx/page.tsx
                </p>
            </div>

            <p>
                home
            </p>
            <p>
                about
            </p>

            <h4>Nested routing</h4>
            <p>
                blog
            </p>
            <p>
                1-blog/first
            </p>
            <p>
                2-blog/second
            </p>

            <h4>Dynamic nested routing</h4>
            <p>
                1-products
            </p>
            <p>
                2-products/id
            </p>
            <p>
                3-products/id/review
            </p>
            <p>
                4-products/id/review/id
            </p>



        </>
    );
}
