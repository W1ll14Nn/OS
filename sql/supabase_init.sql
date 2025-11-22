-- Supabase SQL inicial para o sistema de OS

create table if not exists company (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  phone text,
  email text,
  logo_url text,
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade,
  full_name text,
  role text default 'tech',
  phone text,
  created_at timestamptz default now(),
  primary key (id)
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  whatsapp text,
  address text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists printers (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete set null,
  brand text,
  model text,
  serial_number text,
  color boolean default false,
  notes text,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  number text unique not null,
  client_id uuid references clients(id) on delete set null,
  printer_id uuid references printers(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  status text default 'Aguardando',
  diagnosis text,
  solution text,
  labor numeric(10,2) default 0,
  parts_cost numeric(10,2) default 0,
  total_cost numeric(10,2) default 0,
  accessories_received text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists order_logs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  changed_by uuid references auth.users(id) on delete set null,
  previous_status text,
  new_status text,
  note text,
  created_at timestamptz default now()
);

create view weekly_report as
select
  date_trunc('week', o.created_at) as week_start,
  count(*) as orders_count,
  sum(o.total_cost) as total_revenue,
  sum(case when p.brand is not null then 1 else 0 end) as printers_count
from orders o
left join printers p on p.id = o.printer_id
group by date_trunc('week', o.created_at)
order by week_start desc;
