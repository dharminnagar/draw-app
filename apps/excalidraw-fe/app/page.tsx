import {
    Pencil,
    Share2,
    Download,
    Github,
    Layers,
    Users,
    Palette,
    Save,
    FileText,
} from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Pencil className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-indigo-600">
                                ExcaliDraw
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                                About
                            </button>
                            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                                Docs
                            </button>
                            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Start Drawing
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">
                                        Create beautiful
                                    </span>
                                    <span className="block text-indigo-600">
                                        diagrams with ease
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    A virtual whiteboard for sketching
                                    hand-drawn like diagrams. Collaborate with
                                    others in real-time and share your ideas
                                    effortlessly.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                            Try Now
                                        </button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        alt="Person drawing on a tablet"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            Features
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to visualize your ideas
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            ExcaliDraw provides a simple yet powerful set of
                            tools to create diagrams that look hand-drawn.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Layers className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Infinite Canvas
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Draw on an infinite canvas with zoom and
                                        pan capabilities for unlimited
                                        creativity.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Users className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Real-time Collaboration
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Work together with your team in
                                        real-time, seeing changes as they
                                        happen.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Palette className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Customizable Styles
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Customize colors, line thickness, and
                                        fill styles to match your design needs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Share2 className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Easy Sharing
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Share your diagrams with a simple link
                                        or export them in various formats.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to start drawing?</span>
                        <span className="block">Try ExcaliDraw today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Join thousands of users who are already creating
                        beautiful diagrams with ExcaliDraw.
                    </p>
                    <button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            Testimonials
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Loved by designers and developers
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 italic">
                                    "ExcaliDraw has completely changed how I
                                    communicate my ideas. The hand-drawn style
                                    makes my diagrams more approachable."
                                </p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            Sarah Johnson
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            UX Designer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 italic">
                                    "The collaboration features are incredible.
                                    My team can work together on diagrams in
                                    real-time, which has improved our
                                    productivity."
                                </p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            Michael Chen
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Product Manager
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 italic">
                                    "As a developer, I use ExcaliDraw to sketch
                                    out system architectures. It's simple yet
                                    powerful enough for all my diagramming
                                    needs."
                                </p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            Alex Rivera
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Software Engineer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Product
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Tutorials
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Releases
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Resources
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        API Reference
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Legal
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        Licenses
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                            &copy; 2025 ExcaliDraw. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
