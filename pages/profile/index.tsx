import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';
import { getCurrentUser } from '../../data/users';

const ProfilePage: NextPage = () => {
  // In a real application, data would be fetched from the server here
  const user = getCurrentUser();
  
  return (
    <Layout>
      <Head>
        <title>{user.name} | Profile | Komoti</title>
        <meta name="description" content={`${user.name}'s profile on Komoti`} />
      </Head>
      
      <UserProfile user={user} />
    </Layout>
  );
};

export default ProfilePage; 