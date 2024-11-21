import React, { useState } from "react";
import ProfileAvatar from "../../assets/images/ProfileAvatar.svg";
import PreviewImage from "../../assets/images/PreviewImage.svg";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const PatientChatApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  // Function to handle image click and open the modal
  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewImage("");
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 border-r border-gray-200">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Doctor"
            className="w-full p-2 border rounded-full"
          />
        </div>
        <div className="overflow-y-auto h-full">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={ProfileAvatar}
                  alt="Doctor's profile"
                  className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                  <div className="font-medium">Dr. Daisy Benjamin</div>
                  <div className="text-sm text-gray-500">Hello, Esther</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">01:27</div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center p-4 bg-white border-b border-gray-200">
          <img
            src={ProfileAvatar}
            alt="Doctor's profile"
            className="rounded-full w-10 h-10 mr-2"
          />
          <div>
            <div className="font-medium">Dr. Daisy Benjamin</div>
            <div className="text-sm text-gray-500">9:00 PM</div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="text-center text-gray-500 mb-4">Today</div>
          <div className="space-y-4">
            <div className="flex">
              <img
                src={ProfileAvatar}
                alt="Doctor's profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <div>
                <div className="bg-gray-200 p-2 rounded-lg">
                  <div>Hi there. How are you?</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Dr. Samantha 10:48 AM
                </div>
              </div>
            </div>
            <div className="flex">
              <img
                src={ProfileAvatar}
                alt="Doctor's profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <div>
                <div className="bg-gray-200 p-2 rounded-lg">
                  <div>
                    Waiting for your reply. As I have to go back soon. I have to
                    travel long distance.
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Dr. Samantha 10:48 AM
                </div>
              </div>
            </div>
            <div className="flex">
              <img
                src={ProfileAvatar}
                alt="Doctor's profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <div>
                <div className="bg-gray-200 p-2 rounded-lg">
                  <img
                    src={PreviewImage}
                    alt="Doctor holding patient's hand"
                    className="rounded-lg cursor-pointer w-full h-10"
                    onClick={() => handleImageClick(PreviewImage)}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Dr. Samantha 10:57 AM
                </div>
              </div>
            </div>
            {/* Modal for Image Preview */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-white p-4 rounded-lg"
                  onClick={(e) => e.stopPropagation()} // Prevent closing the modal if clicked inside
                >
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-black">Image</h1>
                    <button onClick={closeModal} className="mt-4">
                      <AiOutlineClose size={24} className="text-red" />
                    </button>
                  </div>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="rounded-lg w-[700px]"
                  />
                </div>
              </div>
            )}
            <div className="flex">
              <img
                src={ProfileAvatar}
                alt="Doctor's profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <div>
                <div className="bg-gray-200 p-2 rounded-lg">
                  <div>Hi there. How are you?</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Dr. Samantha 10:48 AM
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <div className="bg-blue text-white p-2 rounded-lg">
                  <div>
                    Hi, I am coming there in few minutes. Please wait!! I am in
                    taxi right now.
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  You 10:50 AM
                </div>
              </div>
              <img
                src={ProfileAvatar}
                alt="Your profile"
                className="rounded-full w-10 h-10 ml-2"
              />
            </div>
            <div className="flex justify-end">
              <div>
                <div className="bg-blue text-white p-2 rounded-lg flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <div>
                    <div>PDF: Documentation</div>
                    <div className="text-xs">Doc • 500 kb</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  You 11:05 AM
                </div>
              </div>
              <img
                src={ProfileAvatar}
                alt="Your profile"
                className="rounded-full w-10 h-10 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientChatApp;
