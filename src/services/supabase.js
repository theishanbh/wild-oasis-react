import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fdlgwtesmewtsibebimt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkbGd3dGVzbWV3dHNpYmViaW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxOTA2MzEsImV4cCI6MjAzNTc2NjYzMX0.lxyhW2WdhbLi5OlL6V01f3rtL5CfeNsunuJxDF2DWbk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
