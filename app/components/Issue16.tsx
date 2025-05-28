export default function Issue16()
{
    return(
        <div className="my-16 mt-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold ">
                    How can we help?
                </h1>

                <h2 className="text-xl font-semibold text-[#53565D]  p-10">
                    Get in touch with our sales and support teams for demos, 
                    <br />onboarding support, or product questions.
                </h2>
            </div>

            <div className="flex font-semibold justify-center gap-5">
                <div className="flex flex-col bg-[#101112] border-[1px] border-gray-800 max-w-[404px] max-h-[205px] rounded-2xl p-10 gap-4">
                    <div>

                        <h1>
                            Sales
                        </h1>
                    </div>
                    <p className="max-w-[342px] max-h-[48px] text-sm font-normal">
                        Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
                    </p>
                    <button className="bg-[#323237] border-2 border-gray-600 rounded-md p-1 px-2 w-1/2 text-start hover:opacity-70">
                        Talk to sales
                    </button>
                </div>
                
                <div className="flex flex-col bg-[#101112] border-[1px] border-gray-800 max-w-[404px] max-h-[205px] rounded-2xl p-10 gap-4">
                    <div>
                        <h1>
                            Help & support
                        </h1>
                    </div>
                    <p className="max-w-[342px] max-h-[48px] text-sm font-normal">
                        Ask product questions, report problems, or leave feedback.
                    </p>
                    <button className="bg-[#323237] border-2 border-gray-600 rounded-md p-1 px-2 w-1/2 text-start hover:opacity-70">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
}