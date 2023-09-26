
const Footer = () => {
  return (
    <div className="container mx-auto mt-16">
      {/* Img for medium and small device. */}
      <div className="block lg:hidden">
        <img className="w-[128px] h-[32px] mx-auto mb-12" src="https://i.ibb.co/j4DCXgn/Frame.png" alt="" />
      </div>
      {/* Content For Large device. */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white mx-4 md:mx-0">
        <div className="hidden lg:block">
          <img className="w-[128px] h-[32px]" src="https://i.ibb.co/j4DCXgn/Frame.png" alt="" />
        </div>
        {/* Features */}
        <div>
          <p className="text-base md:text-lg font-bold">Home</p>
          <div className="text-sm md:text-base mt-5">
            <p className="mb-4">Features</p>
            <p className="mb-4">Pricing</p>
            <p className="mb-4">About us</p>
          </div>
        </div>
        {/* Terms */}
        <div>
          <p className="text-base md:text-lg font-bold">Terms</p>
          <div className="text-sm md:text-base mt-5">
            <p className="mb-4">Privacy Policy</p>
            <p className="mb-4">Terms and Conditions</p>
            <p className="mb-4">Copyright Policy</p>
            <p className="mb-4">Security</p>
          </div>
        </div>
        {/* Support */}
        <div>
          <p className="text-base md:text-lg font-bold">Support</p>
          <div className="text-sm md:text-base mt-5">
            <p className="mb-4">FAQs</p>
            <p className="mb-4">Contact us</p>
            <p className="mb-4">Help</p>
          </div>
        </div>
        {/* Follow us */}
        <div>
          <p className="text-base md:text-lg font-bold">Follow us </p>
          <div className="mt-5">
            <p className="mb-4">FAQs</p>
            <p className="mb-4">Contact us</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-gray-400 mt-5" style={{
        boxShadow: "0px 4px 30px 0px #4EE39D80"
      }}></div>
      <p className="text-xs md:text-sm text-center text-[#F7F6F2] mt-8 pb-4">Copyright © 2023 GPT Guider All rights reserved</p>
    </div>
  )
}

export default Footer