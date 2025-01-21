import React from 'react';
import { Twitter, Crown, MessageCircle, Heart } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  const nav = (to) => { navigate(to); setShowMenu(false); };

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => nav('/')} className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              Nephele
            </span>
          </button>
          
          <div className="hidden md:flex space-x-6">
            <button onClick={() => nav('/premium')} className="text-gray-600 hover:text-pink-400">Premium</button>
            <button onClick={() => nav('/support')} className="text-gray-600 hover:text-pink-400">Support</button>
          </div>

          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-gray-600">☰</button>
        </div>

        {showMenu && (
          <div className="md:hidden absolute w-full left-0 bg-white shadow-lg">
            <button onClick={() => nav('/home')} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-pink-400">
              Home
            </button>
            <button onClick={() => nav('/premium')} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-pink-400">
              Premium
            </button>
            <button onClick={() => nav('/support')} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-pink-400">
              Support
            </button>
            <button onClick={() => nav('/tos')} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-pink-400">
              Terms of Service
            </button>
            <button onClick={() => nav('/privacy')} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-pink-400">
              Privacy Policy 
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const LegacyUrlHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname.endsWith('.html')) {
      navigate(location.pathname.replace('.html', ''), { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const Website = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100">
        <LegacyUrlHandler />
        <Nav />
        
        <main className="pt-20 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/home.html" element={<Navigate to="/" replace />} />
            <Route path="/tos" element={<TOS />} />
            <Route path="/tos.html" element={<Navigate to="/tos" replace />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/premium.html" element={<Navigate to="/premium" replace />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support.html" element={<Navigate to="/support" replace />} />
          </Routes>
        </main>

        <footer className="bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>© 2025 Nephele</span>
              <div className="space-x-4">
                <a href="/tos" className="hover:text-pink-400">Terms of Service</a>
                <a href="/privacy" className="hover:text-pink-400">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
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
      <a
        href="https://discord.com/oauth2/authorize?client_id=1129313213041877023&permissions=8&scope=bot"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
      >
        Add to Discord
      </a>
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
          Welcome to Nephele, your notification bot on Discord. By using Nephele, you agree to comply with the following Terms of Service.
        </p>

        <h3 className="text-xl font-semibold">1. Service Description</h3>
        <p className="text-gray-600">
          Nephele is a Discord bot that provides notifications for Twitter and Bluesky on Discord. The bot helps users stay updated with the latest tweets and Bluesky updates from their favorite accounts directly in Discord.
        </p>

        <h3 className="text-xl font-semibold">2. User Responsibilities</h3>
        <p className="text-gray-600">
          Users agree to the following terms while using Nephele:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>No crypto-related accounts should be followed.</li>
          <li>Users must not use the bot for any malicious activity.</li>
          <li>Users must follow all applicable laws and regulations when using the bot.</li>
        </ul>

        <h3 className="text-xl font-semibold">3. Limitations of Liability</h3>
        <p className="text-gray-600">
          Nephele is provided "as is." We do not guarantee that the service will always be available, error-free, or uninterrupted. We are not liable for any damages arising from the use of Nephele.
        </p>

        <h3 className="text-xl font-semibold">4. Termination Rights</h3>
        <p className="text-gray-600">
          We reserve the right to terminate or suspend your access to Nephele at our discretion for violations of these terms or any other reason deemed necessary.
        </p>

        <h3 className="text-xl font-semibold">5. Governing Law</h3>
        <p className="text-gray-600">
          These Terms of Service are governed by the laws of your jurisdiction. Any disputes will be resolved under the jurisdiction of the relevant courts.
        </p>

        <h3 className="text-xl font-semibold">6. Contact Information</h3>
        <p className="text-gray-600">
          If you have any questions or concerns regarding these Terms of Service, please contact us at: <a href="mailto:support@service.nephele.in.th" className="text-blue-500 hover:underline">support@service.nephele.in.th</a>.
        </p>
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
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use Nephele.
        </p>

        <h3 className="text-xl font-semibold">1. Collected Data</h3>
        <p className="text-gray-600">
          We collect the following types of data:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Discord user ID</li>
          <li>Commands issued to Nephele</li>
          <li>Notification preferences (e.g., Twitter or Bluesky notifications)</li>
        </ul>

        <h3 className="text-xl font-semibold">2. Purpose of Data Collection</h3>
        <p className="text-gray-600">
          We collect data for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>To provide notifications to users</li>
          <li>To improve the bot's functionality and user experience</li>
          <li>For analytics purposes</li>
        </ul>

        <h3 className="text-xl font-semibold">3. Data Storage and Retention</h3>
        <p className="text-gray-600">
          Your data is stored securely and will be retained only as long as necessary to provide the service. You may request data deletion by contacting us.
        </p>

        <h3 className="text-xl font-semibold">4. Third-Party Services</h3>
        <p className="text-gray-600">
          We do not share your data with third parties except when required for service operation, such as through hosting providers.
        </p>

        <h3 className="text-xl font-semibold">5. User Rights</h3>
        <p className="text-gray-600">
          You have the right to request access to your data, request updates to your data, or request deletion of your data. To do so, please contact us at <a href="mailto:support@service.nephele.in.th" className="text-blue-500 hover:underline">support@service.nephele.in.th</a>.
        </p>

        <h3 className="text-xl font-semibold">6. Contact Information</h3>
        <p className="text-gray-600">
          If you have any questions or concerns about your privacy, please contact us at <a href="mailto:support@service.nephele.in.th" className="text-blue-500 hover:underline">support@service.nephele.in.th</a>.
        </p>
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
              <span>Up to 1 Twitter and Bluesky notification (One per platform)</span>
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
              <span>Unlimited notification</span>
            </li>
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span>Priority support</span>
            </li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-gray-600">Please join support server to make purchase.</p>
        </div>
      </div>
    </div>
  </div>
);

const Support = () => (
  <div className="max-w-3xl mx-auto px-4">
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Support
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4">
        <p className="text-gray-600">
          Need help? Contact our support team, and we’ll assist you as soon as possible.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <MessageCircle className="w-5 h-5 text-pink-400 mr-2" />
            <span>
              Join our Discord:{" "}
              <a
                href="https://discord.gg/nephele-interactive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <MessageCircle className="w-5 h-5 text-pink-400 mr-2" />
            <span>
              Email us at:{" "}
              <a
                href="mailto:support@service.nephele.in.th"
                className="text-blue-500 hover:underline"
              >
                support@service.nephele.in.th
              </a>
            </span>
          </li>
        </ul>
        <p className="text-gray-600">
          We’re here to make your experience with Nephele seamless and enjoyable.
        </p>
      </div>
    </div>
  </div>
);

export default Website;
