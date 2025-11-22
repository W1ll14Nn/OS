'use client';

import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert('Conta criada! Verifique seu email.');
    router.push('/auth/login');
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Criar Conta</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nome completo"
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
          className="border p-2 rounded"
        />
        <button type="submit" disabled={loading} className="bg-green-600 text-white py-2 rounded">
          {loading ? 'Criando...' : 'Criar Conta'}
        </button>
      </form>
      
      <div className="mt-4 text-sm">
        <a href="/auth/login" className="text-blue-600 underline">
          Já tenho conta — Entrar
        </a>
      </div>
    </div>
  );
}
