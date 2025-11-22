import ProtectedRoute from '../../components/ProtectedRoute';
export default function DashboardPage(){
  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto"><h2>Dashboard (protegido)</h2></div>
    </ProtectedRoute>
  );
}
