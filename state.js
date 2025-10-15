// state.js
const SUPABASE_URL = 'https://armlsqgfnhkcdisesnuo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybWxzcWdmbmhrY2Rpc2VzbnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MTM5MjMsImV4cCI6MjA3NjA4OTkyM30.7iFS7n8IMaqTqG96wEjczTi5uSaRK-9dVUtmuXvke1Q';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🚀 prueba de conexión:
async function testConnection() {
  const { data, error } = await supabase.from('archivo').select('*').limit(1);
  if (error) {
    console.error('❌ Error conectando con Supabase:', error.message);
  } else {
    console.log('✅ Conexión correcta a Supabase');
  }
}
testConnection();
