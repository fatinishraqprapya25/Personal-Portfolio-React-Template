import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#0b032d] to-[#13075e] text-white py-8">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-10">

                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Prapya</h2>
                        <p className="text-sm text-gray-300 leading-6">
                            Full-stack Web Developer. I build modern websites, apps, and digital products with clean design and strong functionality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                            <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Email: yourmail@example.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Location: Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
                        <div className="flex space-x-4 text-xl">
                            <Link to="#" className="hover:text-gray-300 transition">
                                <Facebook size={22} />
                            </Link>
                            <Link to="#" className="hover:text-gray-300 transition">
                                <Twitter size={22} />
                            </Link>
                            <Link to="#" className="hover:text-gray-300 transition">
                                <Github size={22} />
                            </Link>
                            <Link to="#" className="hover:text-gray-300 transition">
                                <Linkedin size={22} />
                            </Link>
                        </div>
                    </div>

                </div>


            </Container>
            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Prapya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
