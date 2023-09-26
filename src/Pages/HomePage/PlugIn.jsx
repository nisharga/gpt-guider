import Title from "../../reUsable/Title";

const PlugIn = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="md:flex items-center gap-32 mx-4 md:mx-0">
                {/* IMAGE */}
                <div>
                    <img className="h-[370px] w-[370px] md:h-[570px] md:w-[570px]" src="https://i.ibb.co/yfCWKfX/Search-engines-image.png" alt="" />
                </div>
                {/* INFO */}
                <div className="text-white">
                    <Title title="Browsing Plugin" />
                    <div className="mt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                            <p className="text-base">Search and summarize the web .</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                            <p className="text-base">Gain immediate and updated knowledge .</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                            <p className="text-base">Generate articles, from one or more URLs .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlugIn;