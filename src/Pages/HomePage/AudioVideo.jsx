import Title from "../../reUsable/Title";

const AudioVideo = () => {
    return (
        <div className="container mx-auto mt-32">
            <div className="md:flex items-center gap-32 mx-4 md:mx-0">
                {/* IMAGE */}
                <div>
                    <img className="h-[370px] w-[370px] md:h-[570px] md:w-[570px]" src="https://i.ibb.co/NtcKpSr/Media-player-cuate-1.png" alt="" />
                </div>
                {/* INFO */}
                <div className="text-white">
                    <Title title="Audio & video Transcription and summarizing" />
                    <div className="mt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                            <p className="text-base">upload an audio or Mp4 file and get the transcribed text with a summary.</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                            <p className="text-base">Upload a video and get the transcribed text with a summary.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioVideo;