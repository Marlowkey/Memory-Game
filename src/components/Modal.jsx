const Modal = ({ result, closeModal }) => {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="flex fixed top-50 left-0 right-0 z-50 items-center justify-center p-4 overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-gray-800 bg-opacity-95 rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-white font-got ">
              {result}
            </h3>
            <button
              data-modal-toggle="popup-modal"
              onClick={closeModal}
              type="button"
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-base inline-flex items-center px-4 py-1 text-center mr-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
