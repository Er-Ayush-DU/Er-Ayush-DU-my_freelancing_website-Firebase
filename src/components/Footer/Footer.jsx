import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white border-t border-gray-800">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-12">
                <div className="md:flex md:justify-between">
                    {/* Logo and Brand Info */}
                    <div className="mb-8 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="assets/my_logo.png" className="mr-3 h-12" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                                Ayush Tiwari
                            </span>
                        </a>
                        <p className="mt-4 max-w-xs text-gray-400">
                            Creating beautiful, functional websites that drive results.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-500">Resources</h2>
                            <ul className="text-gray-300 font-medium space-y-3">
                                <li>
                                    <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="hover:text-orange-400 transition-colors">About</a>
                                </li>
                                <li>
                                    <a href="/service" className="hover:text-orange-400 transition-colors">Services</a>
                                </li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-500">Connect</h2>
                            <ul className="text-gray-300 font-medium space-y-3">
                                <li>
                                    <a href="https://github.com/Er-Ayush-DU" target="_blank" rel="noreferrer"
                                        className="hover:text-orange-400 transition-colors">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" className="hover:text-orange-400 transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/ayushtiwari226" target="_blank"
                                        className="hover:text-orange-400 transition-colors">
                                        Fiverr
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-500">Legal</h2>
                            <ul className="text-gray-300 font-medium space-y-3">
                                <li>
                                    <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        © 2023 <a href="https://er-ayush-du.github.io/Responsive-Portfolio/" target="_blank"
                            className="hover:text-orange-400">Ayush Tiwari</a>. All Rights Reserved.
                    </span>

                    {/* Social Icons */}
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/1HMhJfPPsV/" target="_blank"
                            className="text-gray-400 hover:text-orange-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>

                        {/* Twitter */}
                        <a href="https://twitter.com/ErAyush654377" target="_blank"
                            className="text-gray-400 hover:text-orange-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/Er-Ayush-DU/" target="_blank"
                            className="text-gray-400 hover:text-orange-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ayush-tiwari-605807290" target="_blank"
                            className="text-gray-400 hover:text-orange-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;