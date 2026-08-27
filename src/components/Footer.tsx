import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h4 className="font-condensed font-black text-lg uppercase tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="mailto:hello@libertychurchuk.com" className="hover:text-white transition-colors">
                  hello@libertychurchuk.com
                </a>
              </p>
              <p>
                <a href="tel:+447943501007" className="hover:text-white transition-colors">
                  +44 7943 501 007
                </a>
              </p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-condensed font-black text-lg uppercase tracking-wide mb-4">Our Locations</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Gaer Park Drive, Newport, NP20 3NN</p>
              <p>Risca Scouts Hall, NP11 6LL</p>
              <p className="text-gray-400">Sundays at 10:30AM</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-condensed font-black text-lg uppercase tracking-wide mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/libertychurchuk?igsi=Y2NsYzl1ZGpnc3R1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Dc7WJi3Z9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@libertychurchuk8888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Liberty Church. All rights reserved.</p>
            <a href="#" className="hover:text-white transition-colors">
              Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
