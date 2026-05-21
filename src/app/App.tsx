import { useState } from 'react';
import { Calendar, MapPin, Camera } from 'lucide-react';

// Define the structure of a trip
interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  photos: number;
}

export default function App() {
  // State to store all trips - you can add more trips here later
  const [trips] = useState<Trip[]>([
    {
      id: 1,
      title: "Tropical Paradise",
      location: "Maldives",
      date: "August 2024",
      description: "Amazing beach vacation with crystal clear waters and beautiful sunsets.",
      imageUrl: "https://images.unsplash.com/photo-1770848891773-9d866a56dd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      photos: 24
    },
    {
      id: 2,
      title: "Mountain Adventure",
      location: "Swiss Alps",
      date: "June 2024",
      description: "Incredible hiking experience with breathtaking mountain views and fresh alpine air.",
      imageUrl: "https://images.unsplash.com/photo-1603741614725-2fbf5db380e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      photos: 18
    },
    {
      id: 3,
      title: "European City Tour",
      location: "Paris, France",
      date: "April 2024",
      description: "Exploring the charming streets, cafes, and iconic landmarks of Paris.",
      imageUrl: "https://images.unsplash.com/photo-1590077066281-edbd16178b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      photos: 32
    },
    {
      id: 4,
      title: "Cherry Blossom Season",
      location: "Tokyo, Japan",
      date: "March 2024",
      description: "Witnessed the stunning cherry blossoms in full bloom across Tokyo's parks.",
      imageUrl: "https://images.unsplash.com/photo-1724325095172-71da0b904c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      photos: 28
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Header Section - You can change bannerImage to any photo URL */}
      <header className="max-w-6xl mx-auto mb-12 relative">
        <div className="rounded-3xl shadow-2xl overflow-hidden relative h-80">
          {/* Background Image - CHANGE THIS URL to use your own photo */}
          <img
            src="https://images.unsplash.com/photo-1603741614725-2fbf5db380e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center p-12">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-10 h-10 text-white" />
              <h1 className="text-5xl text-white">My Travel Gallery</h1>
            </div>
            <p className="text-xl text-white/95 max-w-2xl mb-6">
              Capturing moments and memories from around the world
            </p>
            <div className="flex gap-4">
              <div className="bg-white/15 backdrop-blur-md rounded-lg px-5 py-2.5 border border-white/20">
                <span className="text-white font-medium">4 Destinations</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-lg px-5 py-2.5 border border-white/20">
                <span className="text-white font-medium">102 Photos</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trip Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

// Separate component for each trip card - this makes the code reusable
function TripCard({ trip }: { trip: Trip }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with overlay effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trip.imageUrl}
          alt={trip.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Dark overlay that appears on hover */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`} />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl mb-2 text-gray-800">{trip.title}</h2>

        {/* Location and Date Info */}
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{trip.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{trip.date}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{trip.description}</p>

        {/* Photo Count */}
        <div className="flex items-center gap-2 text-indigo-600">
          <Camera className="w-5 h-5" />
          <span className="font-medium">{trip.photos} photos</span>
        </div>
      </div>
    </div>
  );
}