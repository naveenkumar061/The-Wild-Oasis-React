import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fmcfkjjdszspunnwehbd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtY2Zrampkc3pzcHVubndlaGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDQzMDIsImV4cCI6MjA2MjYyMDMwMn0.B1lezxlG3i2aPbZKk1Rz6EGroe8ypkYVh95KVjAHQaw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
