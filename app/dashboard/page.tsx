'use client';
import useSWR from 'swr';

export default function Dashboard(){
  // placeholder: na deploy real leitura da view weekly_report do Supabase
  const { data } = useSWR('/api/dummy', () => [{ week_start: new Date().toISOString(), orders_count: 0, total_revenue: 0, printers_count: 0 }]);
  const report = data || [];
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <section>
        <h3 className="font-semibold">Relatório Semanal (exemplo)</h3>
        <table className="w-full mt-3">
          <thead>
            <tr><th>Semana</th><th>OS</th><th>Receita</th><th>Impressoras</th></tr>
          </thead>
          <tbody>
            {report.map((r:any, i:number)=>(
              <tr key={i}>
                <td>{new Date(r.week_start).toLocaleDateString()}</td>
                <td>{r.orders_count}</td>
                <td>R$ {Number(r.total_revenue || 0).toFixed(2)}</td>
                <td>{r.printers_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
