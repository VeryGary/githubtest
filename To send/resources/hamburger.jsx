export default function Hamburger({onClick})
{
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow:column nowrap;
                    z-index: 101;
                    padding-left:6px;
                    padding-top:6px;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: white;
                    transfrom-origin: 1px; 
                    transition: all 0.3s linear
                }

            `}
            </style>
        </>
    )
}