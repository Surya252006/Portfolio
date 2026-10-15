-- ========================================================
-- Supabase Database Schema for Surya Suresh's Portfolio
-- Project URL: https://pjwqkljtwkijxutxxaem.supabase.co
-- ========================================================

-- 1. Table for Chatbot Conversations (Spoofy AI)
create table if not exists public.chat_conversations (
    id uuid default gen_random_uuid() primary key,
    session_id text not null,
    sender text not null check (sender in ('user', 'spoofy')),
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    metadata jsonb default '{}'::jsonb
);

-- Create index for fast session retrieval
create index if not exists idx_chat_conversations_session 
    on public.chat_conversations(session_id, created_at asc);

-- Enable Row Level Security (RLS)
alter table public.chat_conversations enable row level security;

-- Policy: Allow anonymous users to insert new chat messages
create policy "Allow anonymous inserts to chat_conversations"
    on public.chat_conversations for insert
    to anon
    with check (true);

-- Policy: Allow anonymous users to read conversations (by session)
create policy "Allow anonymous select to chat_conversations"
    on public.chat_conversations for select
    to anon
    using (true);


-- 2. Table for Portfolio Contact Form Submissions
create table if not exists public.contact_submissions (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    subject text,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_contact_submissions_created_at
    on public.contact_submissions(created_at desc);

alter table public.contact_submissions enable row level security;

-- Policy: Allow anonymous users to submit contact messages
create policy "Allow anonymous inserts to contact_submissions"
    on public.contact_submissions for insert
    to anon
    with check (true);

-- Policy: Restrict reading contact messages to authenticated owner
create policy "Allow service_role full access to contact_submissions"
    on public.contact_submissions for all
    to service_role
    using (true);
