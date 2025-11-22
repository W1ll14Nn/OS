'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useSession() {
  const [session, setSession] = useState<any | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sesh) => {
      setSession(sesh?.session ?? null);
    });
    return () => listener?.subscription.unsubscribe();
  }, []);
  return session;
}
