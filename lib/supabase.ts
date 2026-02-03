import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://bhtashwpybtjicsftaem.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJodGFzaHdweWJ0amljc2Z0YWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NTE0ODcsImV4cCI6MjA4MDUyNzQ4N30.tR-IVwUgiit5PqPTQV8O0P7SqepOpcYBaizCAxpkKpE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
