import Title from "../../reUsable/Title";


const DocumentAi = () => {
    return (
        <>
            <div className="circle absolute circleTwo rounded-full"></div>
            <div className="container mx-auto mt-32">
                <div className="md:flex items-center gap-16 mx-4 lg:mx-0">
                    {/* IMAGE */}
                    <div>
                        <img className="h-[370px] w-[370px] md:w-[500px] lg:h-[570px] lg:w-[690px]" src="https://i.ibb.co/KqtsvmP/Analysis-amico-image.png" alt="" />
                    </div>
                    {/* INFO */}
                    <div className="text-white">
                        <Title title="DOCUMENT OCR AI" />
                        <div className="mt-8">
                            <div className="flex gap-4 mb-4">
                                <div>
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                </div>
                                <p className="text-[18px]">converts scanned and handwritten texts into digital formats. high accuracy for both documents and handwritten content, streamlining data conversion and accessibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocumentAi;