const MeetingShedule = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:py-24">
            <div className="max-w-7xl mx-auto text-center">

                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                    Start your
                    <br className="hidden md:block" />
                    <span className="text-orange-600"> growth journey </span>
                    with
                </h1>

                    <div className="text-2xl font-medium text-orange-500 flex-wrap">
                        SARN <span className="text-black">Consulting</span>
                    </div>
                


                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto md:text-xl">
                    Schedule a 30 minute strategy call to see how to transform
                    your accounting/tax business
                </p>


                <div className="mt-10">
                    <button className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200 md:px-10 md:py-4 md:text-xl">
                        Schedule a Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MeetingShedule;