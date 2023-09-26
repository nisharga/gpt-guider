
const Hero = () => {
    return (
        <div className="container mx-auto mt-16 md:mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 lg:mx-0">
                <div className="text-white">
                    <h1 className="text-2xl md:text-4xl font-bold">Save Your Time <span className="text-[#35DC9D]">&</span> Study Faster</h1>
                    <div>
                        <p className="text-base md:text-[22px] md:leading-8 mt-3 md:mt-5">Increase your productivity, Elevate your learning experience with the most comprehensive and powerful AI tools.</p>
                    </div>
                    {/* Button */}
                    <div className="mt-5 md:mt-8">
                        <button className="font-semibold bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD] px-8 py-2 rounded-full">Get Started</button>
                    </div>
                </div>
            </div>
            {/* All USERS */}
            <div className="mx-4 lg:mx-0">
                <div className="mt-24 flex items-center">
                    <div className="flex">
                        <img className="w-[36px] h-[36px] rounded-full relative z-10" src="https://i.ibb.co/ssKPxsF/Avatar-Image.png" alt="" />
                        <img className="w-[36px] h-[36px] rounded-full relative z-20 -left-4" src="https://i.ibb.co/YdjBJzL/Avatar-Image-1.png" alt="" />
                        <img className="w-[36px] h-[36px] rounded-full relative z-30 -left-8" src="https://i.ibb.co/TcZ8Jx6/Avatar-Image-2.png" alt="" />
                        <img className="w-[36px] h-[36px] rounded-full relative z-40 -left-12" src="https://i.ibb.co/C0p5jQq/Avatar-Image-3.png" alt="" />
                        <img className="w-[36px] h-[36px] rounded-full relative z-50 -left-16" src="https://i.ibb.co/JrPbc7C/Avatar-Image-4.png" alt="" />
                    </div>
                    <div>
                        <p className="text-white text-lg">Trusted by more than 100K <span className="bg-gradient-to-t from-[#8DF1AF] to-[#25C6BA] bg-clip-text text-transparent">users</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;