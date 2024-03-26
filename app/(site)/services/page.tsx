import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  return (
   <>
        <section className="py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                    Fintech Consultant
                </h1>
                <div className="mt-12">
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-semibold">Leveraging FinTech Experience</h2>
                        </div>
                        <p className="mb-6">We employ our proven approach in process reviews, tech risk management, and third-party audits for Indian financial services clients.</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-semibold">Connects with Regulators and Industry Bodies</h2>
                        </div>
                        <p className="mb-6">The team collaborates with regulators (Reserve Bank of India, National Housing Bank, etc.) for compliance and actively participates in industry workshops (Centre for Advanced Financial Research and Learning, FACE, etc.).</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-semibold">Specialized Team of Experts</h2>
                        </div>
                        <p className="mb-6">Experienced leadership with regulatory, process, and tech expertise. Engagement team comprises professionals who have worked with top FinTech players.</p>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-semibold">Tools and Enablers</h2>
                        </div>
                        <p className="mb-6">Regulatory registers repository for financial services. In-house benchmarking capturing global FinTech practices.</p>
                    </div>
                </div>
            </div>
        </section>
   </>
  );
};

export default Page;
