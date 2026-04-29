import { redirect } from 'next/navigation';

export default function HomePage() {
  // Use an environment variable to set the "Home" client
  // If no variable is found, it defaults to 'index'
  const defaultSlug = process.env.NEXT_PUBLIC_DEFAULT_CLIENT_SLUG || 'index';
  
  redirect(`/${defaultSlug}`); 
}