'use client';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
export default function SignOutButton(){
  const router = useRouter();
  async function signOut(){
    await supabase.auth.signOut();
    router.push('/');
  }
  return <button onClick={signOut} style={{color:'#c00'}}>Sair</button>;
}
