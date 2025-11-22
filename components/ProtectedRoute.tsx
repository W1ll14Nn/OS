'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      if (!data.session) {
        router.replace('/auth/login');
      } else {
        setChecking(false);
      }
    });
    return () => { mounted = false; };
  }, [router]);

  if (checking) return <div>Verificando sessão...</div>;
  return <>{children}</>;
}
