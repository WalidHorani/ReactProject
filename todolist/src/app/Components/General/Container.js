export default function Container({children}) {
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <div className="container-fluid">
                {children}
            </div>
        );
}