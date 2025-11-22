import Link from 'next/link';
export default function Home(){
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-4">Sistema de Ordem de Serviço - ISPROTEC</h2>
      <p className="mb-6">Painel para gerenciar clientes, impressoras e ordens de serviço.</p>
      <div><Link href="/auth/login">Entrar</Link></div>
    </div>
  );
}
