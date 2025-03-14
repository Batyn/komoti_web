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
      <section className="pt-[40px] pb-[30px]">
        <div className="flex justify-between items-center mb-[30px]">
          <h2 className="text-2xl font-bold">Популярные события</h2>
          <Link href="/" className="text-green-600 hover:text-green-800 transition-colors">
            Все события
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
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