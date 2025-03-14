import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';
import { users } from '../../data/users';
import { User } from '../../types';

interface ProfilePageProps {
  user: User | null;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user }) => {
  const router = useRouter();
  
  // If the user is not found, show an error message
  if (!user) {
    return (
      <Layout>
        <Head>
          <title>User Not Found | Komoti</title>
          <meta name="description" content="User not found on Komoti" />
        </Head>
        
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the requested profile does not exist or has been deleted.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </Layout>
    );
  }
  
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  
  // Find user by id
  const user = users.find(u => u.id === id);
  
  // If user is not found, return null
  if (!user) {
    console.log(`User with id ${id} not found`);
  }
  
  return {
    props: {
      user: user || null,
    },
  };
};

export default ProfilePage; 