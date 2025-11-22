'use client';
import Link from 'next/link';

export default function Header(){
  return (
    <header style={{background:'#fff',padding:12,boxShadow:'0 1px 3px rgba(0,0,0,0.06)'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1100,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:40,height:40,background:'#0b74de',borderRadius:6}} />
          <strong>ISPROTEC - Painel</strong>
        </div>
        <nav style={{display:'flex',gap:12}}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/os">Ordens</Link>
          <Link href="/clientes">Clientes</Link>
        </nav>
      </div>
    </header>
  );
}
