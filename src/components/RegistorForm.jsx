const RegistorForm = ({ isFormOpen, SetFormOpen }) => {
  return (
    <div className="w-1/2 p-4 mx-auto text-center z-50">
      <div
        className={` inset-0 bg-cover bg-center ${isFormOpen ? "fixed" : ""}`}
      >
        {isFormOpen && (
          <div>
            <div className="flex justify-center align-middle mx-3 md:-m-0 items-center min-h-screen ">
              <div className="bg-white p-6 md:p-8 rounded-2xl   w-full max-w-md border border-2 border-[#F5CF6B]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-center">
                    Register Now!
                  </h2>
                  <button
                    onClick={() => SetFormOpen(false)}
                    className="text-gray-500"
                  >
                    ✕
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email ID"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE] "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="mt-1 block w-full  p-2  placeholder-black  rounded-md bg-[#FAF2DE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+91"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Domain Of Interest <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Preferred Domain"
                      className="placeholder-black mt-1 block w-full p-2   bg-[#FAF2DE] rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Choose Your Plan <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["3 Months", "6 Months", "9 Months", "12 Months"].map(
                        (plan, index) => (
                          <div
                            key={index}
                            className="flex-1 bg-[#FAF2DE] p-2 text-center  text-sm border border-gray-300 rounded-md cursor-pointer "
                          >
                            <p className="font-semibold">{plan}</p>
                            <p className="font-bold">Rs: 6000</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-white p-2 rounded-md mt-4"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistorForm;
