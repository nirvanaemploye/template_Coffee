import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navlink = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Service", link: "/service" },
  { id: 4, name: "Contact Us", link: "/contact" },
];

const ResponsiveMenu = ({ isOpen, closeMenu }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Slide-down menu */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-12 left-0 right-0 z-50 bg-primary/90 text-white py-6 shadow-lg xl:hidden"
          >
            <ul className="flex flex-col items-center gap-6 text-lg font-semibold uppercase">
              {navlink.map(({ id, name, link }) => {
                const isActive = location.pathname === link;
                return (
                  <li key={id}>
                    <Link
                      to={link}
                      onClick={closeMenu}
                      className={`px-6 py-2 transition ${
                        isActive
                          ? "text-secondary" // Active item color
                          : "hover:text-yellow-300" // Hover color
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
