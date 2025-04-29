import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ynfqrbvmjobreiaysudv.supabase.co";
const SUPABASE_ANON_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZnFyYnZtam9icmVpYXlzdWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTUxMTUsImV4cCI6MjA2MTUzMTExNX0.1p0XEVZ6qnlIFjSTe8WU_gX0tTknoB35zqnU09OXAXY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
