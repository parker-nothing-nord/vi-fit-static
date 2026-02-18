/**
 * Simplified Google Maps component using Embed API (iframe)
 * Perfect for static sites - no JavaScript required!
 *
 * To use this component:
 * 1. Get a Google Maps API key from https://console.cloud.google.com/
 * 2. Enable "Maps Embed API" (NOT "Maps JavaScript API")
 * 3. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file
 * 4. Rebuild the site: npm run build
 */

interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Vi Gym location: 895 Ellis St unit 2, Kelowna, BC V1Y 1Y8
  const address = "895+Ellis+St+unit+2,Kelowna,BC+V1Y+1Y8";

  // Fallback if no API key is provided
  if (!apiKey) {
    return (
      <div className={`w-full h-[400px] md:h-[500px] rounded-lg bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-6">
          <p className="text-gray-600 mb-2">Map unavailable</p>
          <p className="text-sm text-gray-500">
            <a
              href="https://www.google.com/maps/search/?api=1&query=895+Ellis+St+unit+2,Kelowna,BC+V1Y+1Y8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline"
            >
              View on Google Maps →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className={`w-full h-[400px] md:h-[500px] rounded-lg ${className}`}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}&zoom=16`}
    />
  );
}

