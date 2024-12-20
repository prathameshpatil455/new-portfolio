import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import icons
import ContactInfoCard from "./ContactInfoCard"; // Import the ContactInfoCard component
import { useSelector } from "react-redux";

const InfoCard = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <motion.div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } rounded-lg p-4 shadow-md h-full flex flex-col gap-4 justify-between`}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h3
        className={`text-lg font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Additional Information
      </h3>
      <div className="flex flex-col gap-2">
        <ContactInfoCard
          icon={<FaPhoneAlt />}
          title="Phone"
          text="8296635729"
          isDarkMode={isDarkMode} // Pass isDarkMode prop
        />
        <ContactInfoCard
          icon={<FaEnvelope />}
          title="Email"
          text="prathameshpatil1513@gmail.com"
          isDarkMode={isDarkMode} // Pass isDarkMode prop
        />
        <ContactInfoCard
          icon={<FaTwitter />}
          title="Twitter"
          text="@example"
          isDarkMode={isDarkMode} // Pass isDarkMode prop
        />
        <ContactInfoCard
          icon={<FaMapMarkerAlt />}
          title="Address"
          text="Banglore, India"
          isDarkMode={isDarkMode} // Pass isDarkMode prop
        />
      </div>
      <p className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-black"}`}>
        &copy; 2024 Prathamesh Patil. All rights reserved.
      </p>
    </motion.div>
  );
};

export default InfoCard;
