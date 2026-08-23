export default function Footer() {
  const links = [
    { label: 'hello@libertychurchuk.com', href: 'mailto:hello@libertychurchuk.com' },
    { label: '+44(0)XXXX XXXXXX', href: 'tel:' },
    { label: 'follow us on socials', href: '#' },
    { label: 'policies', href: '#' },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-4">
      <div className="max-w-5xl mx-auto px-4 py-5 text-center text-xs text-gray-600">
        {links.map((link, i) => (
          <span key={link.label}>
            {i > 0 && <span className="text-gray-400 mx-2">|</span>}
            <a href={link.href} className="hover:text-black transition-colors">
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
}
