
const AddTask = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"> */}

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-4">
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Name </label>
                                    <input
                                        name="taskName"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Quantity </label>
                                    <input
                                        name="taskNumber"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="number"
                                        id="name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Payable amount </label>
                                    <input
                                        name="amount"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="number"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Name </label>
                                    <input
                                        name="taskName"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Name </label>
                                    <input
                                        name="taskName"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="Option1"
                                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> Option 1 </span>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="Option2"
                                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> Option 2 </span>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="Option3"
                                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> Option 3 </span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </div>
    );
};

export default AddTask;