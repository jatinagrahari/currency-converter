import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-8 border-t border-gray-200 dark:border-zinc-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-zinc-500 gap-4">
        <div className="flex items-center font-medium">
          ExchangeX © {new Date().getFullYear()} — Made with{" "}
          <span className="text-red-500 mx-1.5 text-lg">♥</span> by{" "}
          <span className="font-semibold text-gray-900 dark:text-zinc-300 ml-1">
            Jatin
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/jatinagrahari"
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-zinc-300 transition-colors flex items-center gap-2 group"
          >
            <IoLogoGithub className="text-xl group-hover:-translate-y-0.5 transition-transform" />{" "}
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jatinagrahari"
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-zinc-300 transition-colors flex items-center gap-2 group"
          >
            <IoLogoLinkedin className="text-xl group-hover:-translate-y-0.5 transition-transform" />{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
