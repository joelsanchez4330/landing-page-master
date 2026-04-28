import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect everyone to the main demo or your primary client
  redirect('/index'); 
}