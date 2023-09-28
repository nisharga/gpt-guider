import Title from "../../reUsable/Title";

const Transcription = () => {
    return (
        <>
            <div className="circle absolute t-[-5px] rounded-full mt-[250px]"></div>
            <div className="container mx-auto mt-32">
                <div className="md:flex items-center gap-32 mx-4 lg:mx-0">
                    {/* IMAGE */}
                    <div>
                        <img className="h-[370px] w-[370px] md:w-[500px] lg:h-[570px] lg:w-[570px]" src="https://i.ibb.co/QKr6PcD/Video-upload-cuate-1-1.png" alt="" />
                    </div>
                    {/* INFO */}
                    <div className="text-white">
                        <Title title="YouTube video Transcription and summarizing" />
                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                </div>
                                <p className="text-base">Transcribe and summarize you tube videos just by provide URL of video. </p>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                </div>
                                <p className="text-base"> Save your time and effort and say good bye to manual transcription and time-consuming video content analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transcription;