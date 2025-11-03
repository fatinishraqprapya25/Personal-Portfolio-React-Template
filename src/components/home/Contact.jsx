import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
    return (
        <section className="bg-gradient-to-br from-indigo-900 to-[#2b1ec2] py-24">
            <Container>
                <SectionHeader
                    title="Get In Touch"
                    content="We're ready to hear your ideas! Fill out the form below and let's start a conversation about your next project."
                />

                <form
                    method="POST"
                    className="max-w-4xl mx-auto mt-12 bg-gray-900/40 backdrop-blur-lg border border-white/10 p-10 rounded-xl shadow-3xl space-y-6"
                >
                    {/* --- 1. First Name & Last Name (Side-by-Side) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-indigo-200 mb-2 tracking-wider">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="e.g., Jane"
                                // Updated to rounded-md
                                className="w-full px-4 py-3 rounded-md bg-gray-800/70 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition duration-300 shadow-inner"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-indigo-200 mb-2 tracking-wider">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="e.g., Doe"
                                // Updated to rounded-md
                                className="w-full px-4 py-3 rounded-md bg-gray-800/70 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition duration-300 shadow-inner"
                                required
                            />
                        </div>
                    </div>

                    {/* --- 2. Email & Subject (Side-by-Side) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-indigo-200 mb-2 tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="e.g., hello@example.com"
                                // Updated to rounded-md
                                className="w-full px-4 py-3 rounded-md bg-gray-800/70 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition duration-300 shadow-inner"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-indigo-200 mb-2 tracking-wider">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What is your message about?"
                                // Updated to rounded-md
                                className="w-full px-4 py-3 rounded-md bg-gray-800/70 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition duration-300 shadow-inner"
                                required
                            />
                        </div>
                    </div>

                    {/* --- 3. Message Box (Full Width) --- */}
                    <div>
                        <label className="block text-sm font-semibold text-indigo-200 mb-2 tracking-wider">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Tell us a little about what you need..."
                            // Updated to rounded-md
                            className="w-full px-4 py-3 rounded-md bg-gray-800/70 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 resize-none transition duration-300 shadow-inner"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        // Updated to rounded-md
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg py-3.5 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.01] shadow-xl hover:shadow-indigo-500/50"
                    >
                        Send My Inquiry
                    </button>
                </form>
            </Container>
        </section>
    );
}