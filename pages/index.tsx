import { NextPage } from 'next';
import Head from 'next/head';
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

      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Popular Events Near You</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Здесь можно добавить дополнительные секции для будущего расширения сайта */}
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