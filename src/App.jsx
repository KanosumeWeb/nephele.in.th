import React from 'react';
import { Heart, Twitter, Bot, Crown, MessageCircle, Bell, Discord, Mail, ExternalLink } from 'lucide-react';

const Website = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Bell className="w-8 h-8 text-pink-400" />
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
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=YOUR_PERMISSIONS&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <DiscordLogo className="w-5 h-5" />
              <span>Add to Discord</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        {currentPage === 'home' && <Home />}
        {currentPage === 'tos' && <TOS />}
        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'premium' && <Premium />}
        {currentPage === 'support' && <Support />}
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=YOUR_PERMISSIONS&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center space-x-3 transition-colors text-lg"
        >
          <DiscordLogo className="w-6 h-6" />
          <span>Add to Discord</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
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
          <a 
            href="https://discord.gg/nephele-interactive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition-colors"
          >
            <DiscordLogo className="w-5 h-5 text-blue-600" />
            <span>Join Discord Support Server</span>
            <ExternalLink className="w-4 h-4 text-blue-600" />
          </a>
          <a 
            href="mailto:support@service.nephele.in.th"
            className="flex items-center justify-center space-x-2 bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors"
          >
            <Mail className="w-5 h-5 text-pink-600" />
            <span>Email Support</span>
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
