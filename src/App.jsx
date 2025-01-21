import React from 'react';
import { Heart, Twitter, Bot, Crown, MessageCircle } from 'lucide-react';

const Website = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  
  const theme = {
    primary: '#89CFF0',    // Pastel blue
    secondary: '#FFB7C5',  // Pastel pink
    accent: '#FFF',        // White
    text: '#4A4A4A'        // Dark gray
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'tos':
        return <TOS />;
      case 'privacy':
        return <Privacy />;
      case 'premium':
        return <Premium />;
      case 'support':
        return <Support />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-pink-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                Nephele
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'TOS', 'Privacy', 'Premium', 'Support'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-600 hover:text-pink-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">© 2025 Nephele Bot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Home = () => (
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Welcome to Nephele
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Your kawaii Twitter & Bluesky notification companion for Discord!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Twitter Notifications</h3>
          <p className="text-gray-600">Never miss important tweets from your favorite accounts</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <MessageCircle className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bluesky Updates</h3>
          <p className="text-gray-600">Stay updated with your Bluesky feed right in Discord</p>
        </div>
      </div>
    </div>
  </div>
);

const Premium = () => (
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center py-12">
      <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Premium Features
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Basic</h3>
          <ul className="text-left space-y-4">
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Up to 5 notification channels</span>
            </li>
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Basic notification customization</span>
            </li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-gray-600">Free</p>
        </div>
        <div className="bg-gradient-to-br from-blue-400/10 to-pink-400/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-pink-200">
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>
          <ul className="text-left space-y-4">
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Unlimited notification channels</span>
            </li>
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Advanced filtering options</span>
            </li>
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Priority support</span>
            </li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-gray-600">$5/month</p>
        </div>
      </div>
    </div>
  </div>
);

const Support = () => (
  <div className="max-w-3xl mx-auto px-4">
    <div className="text-center py-12">
      <MessageCircle className="w-16 h-16 text-pink-400 mx-auto mb-4" />
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Support
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mt-8">
        <p className="text-gray-600 mb-4">
          Need help with Nephele? Join our Discord community or reach out via email!
        </p>
        <div className="space-y-4">
          <a href="#" className="block bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition-colors">
            Join Discord Support Server
          </a>
          <a href="mailto:support@nephele.in.th" className="block bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors">
            Email Support
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TOS = () => (
  <div className="max-w-3xl mx-auto px-4">
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Terms of Service
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4">
        <p className="text-gray-600">
          Please read these terms carefully before using Nephele.
        </p>
        {/* Add your actual TOS content here */}
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-3xl mx-auto px-4">
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Privacy Policy
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4">
        <p className="text-gray-600">
          Your privacy is important to us. This policy outlines how we handle your data.
        </p>
        {/* Add your actual privacy policy content here */}
      </div>
    </div>
  </div>
);

export default Website;
