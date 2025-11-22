# OS-Printers — Next.js 14 + Supabase

Este ZIP contém um projeto Next.js 14 (App Router) com integração inicial ao Supabase e arquivos essenciais.
Siga as instruções abaixo para subir no GitHub e fazer deploy no Vercel.

## Passos rápidos

1. Crie novo repositório no GitHub e envie todo o conteúdo deste ZIP.
2. Crie projeto no Supabase e execute `sql/supabase_init.sql` no SQL Editor.
3. No Vercel, conecte o repositório e configure as variáveis de ambiente:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (secret)
4. Faça deploy no Vercel.

## Scripts úteis

- `npm run dev` — dev Next.js
- `npm run build` — build
- `npm run start` — start
- `npm run test:parse` — test fallback server
- `npm run start:fallback` — start fallback minimal server
