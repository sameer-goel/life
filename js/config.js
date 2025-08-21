// Supabase configuration
const supabaseUrl = 'https://dqwykmkmocaeyjthhjlm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxd3lrbWttb2NhZXlqdGhoamxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3OTI4NjYsImV4cCI6MjA3MTM2ODg2Nn0.lNCeRxZZeFR4HX7u_tLPGT-u9NiQmdLtTG19qwWpgo8';

// Initialize Supabase client with error handling
let supabase;
try {
    if (typeof window !== 'undefined' && window.supabase) {
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        console.log('Supabase client initialized successfully');
    } else {
        console.error('Supabase library not loaded');
    }
} catch (error) {
    console.error('Error initializing Supabase:', error);
}