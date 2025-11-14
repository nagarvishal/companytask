import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white  text-gray-800 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">My Application</h2>
            <p className="text-sm">
              Crafting clean, dynamic web experiences with React and Tailwind.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-indigo-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3a4.92 4.92 0 0 0-4.917 4.917c0 .386.045.76.127 1.122C7.728 8.77 4.1 6.833 1.671 3.845a4.902 4.902 0 0 0-.665 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.924 4.924 0 0 0 3.946 4.827 4.934 4.934 0 0 1-2.224.084 4.929 4.929 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.93 13.93 0 0 0 7.548 2.212c9.057 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-indigo-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.014c0 4.424 2.865 8.175 6.839 9.504.5.092.682-.217.682-.483 0-.238-.01-1.023-.014-1.856-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.07-.608.07-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.34-2.22-.252-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.507.338c1.909-1.296 2.748-1.026 2.748-1.026.545 1.38.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.36.311.68.923.68 1.858 0 1.34-.013 2.42-.013 2.75 0 .27.18.58.688.482A10.013 10.013 0 0 0 22 12.014C22 6.484 17.523 2 12 2Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm">
          <p>
            © {year} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
