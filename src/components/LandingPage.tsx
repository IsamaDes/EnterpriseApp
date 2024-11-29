// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-blue-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
//         <p className="mb-6">Click below to create a new account</p>
//         <Link to="/register">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             Register
//           </button>
//         </Link>
//         <Link to="/login">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             Login
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;











import { Link } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import FaqComponent from './FAQ/FAQ';
// import businessImage from '../assets/business-image.jpg'; // Example background image

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        // style={{ backgroundImage: `url(${businessImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Empower Your Business</h1>
          <p className="text-xl mb-8">Join the leading platform for business registration and affiliation.</p>
          <div className="space-x-4">
            <Link to="/login">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Streamlined Registration</h3>
                <p>Easy and efficient business registration process to get you started quickly.</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Trusted by Industry Leaders</h3>
                <p>Join a community of businesses and agents trusted by top industry leaders.</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Robust Affiliation System</h3>
                <p>Powerful tools to manage affiliations and grow your business network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-1/3 p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <FaQuoteLeft className="text-2xl mb-4 text-blue-500" />
                <p className="italic">"This platform has revolutionized the way we manage our business registrations."</p>
                <p className="mt-4 font-bold">- Jane Doe, CEO of TechCorp</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <FaQuoteLeft className="text-2xl mb-4 text-blue-500" />
                <p className="italic">"The affiliation system is robust and easy to use. Highly recommended!"</p>
                <p className="mt-4 font-bold">- John Smith, Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* FAQ Section */} <div className="flex justify-center items-center flex-col bg-gray-100 py-16 text-center"> <div> <h2 className="text-[40px] font-semibold text-gray-900"> Frequently Asked Questions </h2> </div> <div className="w-full max-w-2xl"> <FaqComponent /> </div> </div>



      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-[18px] font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
          <Link to="/api/auth/register">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>
      </section>





      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 BusinessApp. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#!" className="hover:text-blue-400">Facebook</a>
            <a href="#!" className="hover:text-blue-400">Twitter</a>
            <a href="#!" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
