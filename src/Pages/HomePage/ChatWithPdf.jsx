import Title from "../../reUsable/Title";

const ChatWithPdf = () => {
    return (
        <>
            <div className="circle absolute t-[-5px] rounded-full"></div>
            <div className="container mx-auto mt-32">
                <div className="md:flex items-center gap-32 mx-4 lg:mx-0">
                    {/* INFO */}
                    <div className="text-white">
                        <Title title="Chat With PDF" />
                        <div className="mt-8">
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Education:</p>
                                </div>
                                <p className="ml-8">Summarize textbooks, clarify concepts, prepare for exams, ask questions based on your books, and answer (MCQs).</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Research:</p>
                                </div>
                                <p className="ml-8">Upload scientific papers and academic articles to obtain the information you need for your research. </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Any language:</p>
                                </div>
                                <p className="ml-8">You can upload PDFs in any language and receive answers in your preferred language.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Sources included:</p>
                                </div>
                                <p className="ml-8"> Every answer will include the sources of the relevant pages.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Simple and Secure:</p>
                                </div>
                                <p className="ml-8">Fast, easy, free and secure! Files are stored in a secure cloud storage and will never be shared.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">OCR Feature: save your time and effort</p>
                                </div>
                                <p className="ml-8">Quickly extract text from images or scanned documents shared by users, reducing manual data entry.</p>
                                <p className="ml-8 mt-4">No need to write long question just scan or take photo of your question and get answers quickly.</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div>
                        <img className="h-[292] w-[400px] md:w-[570px] md:h-[500px] lg:h-[570px] lg:w-[570px]" src="https://i.ibb.co/mh6NSh0/Chat-bot-pana-3.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatWithPdf;