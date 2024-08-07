// src/Footer.js
import React from 'react';
import { CiFacebook, } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube,FaPinterestP } from "react-icons/fa";
import { LiaFlipboard } from "react-icons/lia";

const socialMediaLinks = [
  { href: '#', icon: <CiFacebook /> },
  { href: '#', icon: <FaInstagram/> },
  { href: '#', icon: <FaXTwitter /> },
  { href: '#', icon: <FaYoutube /> },
  { href: '#', icon: <LiaFlipboard /> },
  { href: '#', icon: <FaPinterestP /> },
];

const navigationLinks = [
  { href: '#', label: 'Terms Of Service' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Advertising' },
  { href: '#', label: 'Newsletter' },
  { href: '#', label: 'Subscribe' },
  { href: '#', label: 'Cookies Settings' },
];

const Footer = () => {
  return (
    <footer className="bg-[#2D2E2F] text-zinc-200 py-8">
      <div className="container text-center">
       <div className='relative flex items-center w-[94vw] bg-[#242526] mb-10'>
       <div className="overflow-hidden h-[15vw] flex items-center justify-center">
          <svg className='h-[18vw]' viewBox="0 0 948 250" fill="#2D2E2F" aria-labelledby="brand-title">
            <path d="M377.651 89.431c1.056 4.008 13.003 52.856-7.91 97.701-2.042 4.373-25.775 61.692-90.24 61.868-64.465-.176-88.198-57.495-90.24-61.868-20.917-44.845-8.966-93.693-7.91-97.7C207.03.763 279.265 2 279.265 2h.465s72.241-1.237 97.92 87.43zm-53.917 123.642c1.616-3.991 14.797-30.378 14.823-87.538.022-57.156-13.254-83.539-14.866-87.534C311.427.747 280.079 3.63 280.079 3.63h-1.156S247.57.747 235.311 38c-1.616 3.995-14.797 30.378-14.823 87.534-.022 57.16 13.255 83.547 14.87 87.538 12.26 37.25 43.609 34.372 43.609 34.372h1.155s31.353 2.878 43.612-34.372zm582.039 16.843c40.893-25.07 41.71-74.582 41.71-74.582H948v88.552H777.084v-1.695h18.321V6.6h-31.862v171.824c0 73.958-60.254 71.566-70.257 71.566-78.314 0-81.421-50.088-81.421-71.919V6.747H593V5.052h79.135v1.72h-18.86v189.06c0 14.366 3.168 21.156 5.015 25.333 13.715 27.944 39.62 25.987 42.653 25.987 48.307 0 60.753-37.147 60.753-72.431V6.764h-18.991V5h198.103v76.256h-.743c0-22.85-16.045-43.558-18.708-47.086-17.718-26.636-52.618-27.608-52.618-27.608h-31.976v113.794c28.908 0 35.04-7.577 37.434-9.401 21.05-17.106 17.053-39.96 17.053-39.96h1.599v101.467h-1.734c0-27.686-17.583-39.294-22.241-43.097-10.66-8.747-32.11-7.18-32.11-7.18v119.959h26.378c26.109-1.313 40.632-11.058 42.63-12.228zM113.853 248L21.006 6.691H0V5h82.123l-.013 1.73H62.219l69.289 174.57L183.389 6.76h-19.148V5.013H204V6.76h-18.766L113.853 248zM533.4 10.767C556.728 16.125 564.475 0 564.475 0v85.641c-8.64-38.701-32.744-63.88-34.862-66.357-11.242-12.638-22.745-16.678-35.572-16.678-28.54.652-37.398 28.145-39.381 32.575-11.904 29.446-12.035 77.009-12.035 81.173-1.058 47.171 7.804 81.314 9.255 86.912 7.673 29.446 20.632 36.873 22.75 38.435 17.559 10.553 37.515 3.293 39.907 2.477 26.584-10.942 25.921-41.693 25.921-41.693v-53.813h-17.851v-1.958H596v1.825h-16.13v96.03c-12.697-21.761-38.087-9.118-42.714-7.165-25.264 11.986-33.595 11.08-36.771 11.338-32.37 2.73-54.853-17.07-56.7-18.632-40.47-34.013-44.702-81.83-44.968-85.736-5.29-57.462 20.366-92.257 21.556-94.21C453.867 2.348 485.71.914 491.265.653c15.468-1.306 36.583 9.023 42.135 10.114z" ></path></svg>
        </div>
        <div className="flex justify-center gap-3 mb-6 absolute top-1/2 -translate-y-1/2 right-10">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white w-[3vw] h-[3vw] border rounded-full flex items-center justify-center">
              {link.icon}
            </a>
          ))}
        </div>
       </div>

          <div className='w-full text-center mb-8'>
                <h2 className='text-[2.5vw] uppercase font-[Vogue] leading-none tracking-widest'>Conde nast</h2>
                <h4 className='uppercase text-[.8vw]'>International</h4>
          </div>

        <div className="flex justify-center space-x-4 text-sm mb-4">
          {navigationLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-sm">
          &copy; 2024 Condé Nast
        </div>
      </div>
    </footer>
  );
};

export default Footer;
