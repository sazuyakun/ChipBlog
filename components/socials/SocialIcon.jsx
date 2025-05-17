'use client'

export default function SocialIcon({ type, size = 24, color }) {
  const icons = {
    facebook: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H8.08v-2.9h2.36V9.83c0-2.32 1.38-3.6 3.49-3.6.7 0 1.43.12 1.43.12v2.3h-.8c-1.26 0-1.65.79-1.65 1.6v1.92h2.81l-.45 2.9h-2.36v7.03C18.34 21.24 22 17.09 22 12.07z" />
      </svg>
    ),
    twitter: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.35 8.39 8.39 0 01-2.7 1.03 4.21 4.21 0 00-7.2 3.84A11.95 11.95 0 013 4.8a4.22 4.22 0 001.3 5.63 4.17 4.17 0 01-1.9-.52v.05a4.22 4.22 0 003.38 4.13 4.22 4.22 0 01-1.9.07 4.23 4.23 0 003.94 2.93A8.45 8.45 0 012 19.54a11.94 11.94 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022.46 6z" />
      </svg>
    ),
    google: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.35 11.1H12v2.9h5.35c-.6 2.2-2.44 3.8-5.35 3.8a6 6 0 010-12c1.62 0 3.1.6 4.23 1.58l2.08-2.08A9.91 9.91 0 0012 2a10 10 0 100 20c5.6 0 9.8-3.9 9.8-9.7 0-.66-.07-1.1-.15-1.6z" />
      </svg>
    ),
  };

  return icons[type] || null;
}
