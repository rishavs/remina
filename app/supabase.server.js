import { createClient } from '@supabase/supabase-js'

if (!process.env.SUPABASE_URL)
    throw new Error('SUPABASE_URL is required')

if (!process.env.SUPABASE_SECRET_KEY)
    throw new Error('SUPABASE_SECRET_KEY is required')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY


export const db = createClient(supabaseUrl, supabaseSecretKey)