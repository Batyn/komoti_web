import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Komoti - Find and Join Events Near You</title>
        <meta name="description" content="Discover and join sports, games, and activities in your area with Komoti." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Секция событий */}
      <section className="pt-6 sm:pt-[40px] pb-4 sm:pb-[30px]">
        <div className="container mx-auto px-4 sm:px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-[30px]">
            <h2 className="text-xl sm:text-2xl font-bold">Popular Events</h2>
            <Link 
              href="/" 
              className="text-sm sm:text-base text-green-600 hover:text-green-800 transition-colors inline-flex items-center"
            >
              <span>All Events</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="mx-4 sm:container sm:mx-auto sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {events.map((event) => (
              <div key={event.id} className="w-full">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция категорий */}
      <section className="py-6 sm:py-[40px] w-full bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-[30px]">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { 
                name: 'Football', 
                image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format'
              },
              { 
                name: 'Basketball', 
                image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format'
              },
              { 
                name: 'Volleyball', 
                image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format'
              },
              { 
                name: 'Tennis', 
                image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=800&auto=format'
              },
              { 
                name: 'Running', 
                image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=800&auto=format'
              },
              { 
                name: 'Yoga', 
                image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format'
              }
            ].map((sport) => (
              <Link
                key={sport.name}
                href={`/category/${sport.name.toLowerCase()}`}
                className="relative bg-white rounded-2xl shadow-sm overflow-hidden aspect-square hover:shadow-md transition-shadow group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${sport.image})` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-base sm:text-lg">{sport.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Секция о сервисе */}
      <section className="py-6 sm:py-[40px]">
        <div className="mx-4 sm:container sm:mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">About Komoti</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Komoti is a platform for finding and organizing sports events. 
              Join a community of like-minded people, discover interesting events 
              and enjoy your favorite sports together!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-sm sm:text-base text-gray-600">Events</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-sm sm:text-base text-gray-600">Participants</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-sm sm:text-base text-gray-600">Sports</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">4.8</div>
                <div className="text-sm sm:text-base text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

// В будущем здесь можно добавить серверную логику для получения данных из Supabase
// Например:
/*
export const getServerSideProps = async () => {
  // Здесь будет код для получения ивентов из Supabase
  // import { createClient } from '@supabase/supabase-js'
  // const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY')
  
  // const { data, error } = await supabase
  //   .from('events')
  //   .select('*')
  //   .order('date', { ascending: true })
  
  // return {
  //   props: {
  //     events: data || [],
  //   },
  // }
  
  return {
    props: {
      events: [],
    },
  }
}
*/ 