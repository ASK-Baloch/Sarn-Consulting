import Link from "next/link";

const MeetingSchedule = () => {
    return (
        <div className="bg-white py-10 px-4 sm:px-6 lg:py-16">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl mb-4">
                    Start your
                    <br className="hidden md:block" />
                    <span className="text-[#3C73DA]"> growth journey </span>
                    with
                </h1>
                <div className="text-xl font-medium text-[#3C73DA] sm:text-2xl">
                    SARN <span className="text-black">Consulting</span>
                </div>
                <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto sm:text-lg">
                    Schedule a 30-minute strategy call to see how to transform
                    your accounting/tax business
                </p>
                <div className="mt-8">
                    <Link href="/contact">
                    <button type="button" className="inline-block bg-[#3C73DA] text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-[#3C73DA] transition-colors duration-200 sm:px-8 sm:py-3 sm:text-lg">
                        Schedule a Call
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MeetingSchedule;