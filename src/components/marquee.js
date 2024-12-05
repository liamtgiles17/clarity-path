import "./../app/globals.css";

export default function Marquee() {
    return (
        <div className="max-sm:hidden flex-col flex-shrink text-cyan-400 text-3xl">
            <p className=" bg-slate-950 whitespace-nowrap overflow-hidden m-[0_auto] absolute w-full py-1">
                <span className="inline-block pl-[100%] animate-marquee"><b>DIDDY BEDS</b></span>
            </p>
            <p className="whitespace-nowrap overflow-hidden m-[0_auto] absolute w-full py-1">
                <span className="inline-block pl-[100%] animate-marquee" style={{animationDelay: "6s"}}><b>BIG CUPBOARDS</b></span>
            </p>
            <p className="whitespace-nowrap overflow-hidden m-[0_auto] absolute w-full py-1">
                <span className="inline-block pl-[100%] animate-marquee" style={{animationDelay: "12s"}}><b>BIG WARDROBES</b></span>
            </p>
        </div>
    );
}