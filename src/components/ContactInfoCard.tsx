import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa"; // Import icons

interface ContactInfoCardProps {
  icon: JSX.Element;
  title: string;
  text: string;
  isDarkMode: boolean; // Add isDarkMode prop
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, text, isDarkMode }) => {
  return (
    <motion.div
      className={`bg-${isDarkMode ? "gray-800" : "gray-200"} rounded-lg p-4 flex items-center shadow-md`}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`mr-3 text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>{title}</h4>
        <p className={`${isDarkMode ? "text-gray-300" : "text-black"}`}>{text}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
