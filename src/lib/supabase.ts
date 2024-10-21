import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tbvkvsxgntavgnllkxhd.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidmt2c3hnbnRhdmdubGxreGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1Mzc2MzEsImV4cCI6MjAyMDExMzYzMX0.IC29QPaPozCPJkhPlok_x_HomMM-xQMwsG3KLilSxlg",
);

export default supabase;
