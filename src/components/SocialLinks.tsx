import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammedadnanvv/',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/ai.adnanvv/',
      label: 'Instagram'
    },
    {
      icon: Twitter,
      href: 'https://x.com/MuhammadAd93421',
      label: 'X (Twitter)'
    }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}