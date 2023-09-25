
const Hero = () => {
    return (
        <div className="container mx-auto mt-16 md:mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-0">
                <div className="text-white">
                    <h1 className="text-2xl md:text-4xl font-bold">Save Your Time <span className="text-[#35DC9D]">&</span> Study Faster</h1>
                    <div>
                        <p className="text-base md:text-[22px] md:leading-8 mt-3 md:mt-5">Increase your productivity, Elevate your learning experience with the most comprehensive and powerful AI tools.</p>
                    </div>
                    <div className="mt-5 md:mt-8">
                        <button className="font-semibold bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD] px-8 py-2 rounded-full">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;