import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";

export default function Modal({ newsInfo }) {
    let { nid, urlToImage, url, title, publishedAt, siteName, description, content } = newsInfo;
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef();

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    return (
        <>

            <button
                type="button"
                onClick={openModal}
                className="bg-blue-600 text-white px-3 py-2 font-semibold shadow-lg rounded focus:outline-none hover:shadow-xl hover:bg-blue-700  transition duration-300 float-right mt-6"
            >
                Read More
        </button>

            <Transition show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-10"
                    initialFocus={cancelButtonRef}
                    static
                    open={open}
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-2xl  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-darkMode shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                <img src={urlToImage} alt={title} id="s" />
                                 </Dialog.Title>
                                <div className="mt-2">
                                    <h3>
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                       {content}
                                     </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                  </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
