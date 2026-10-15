/**
 * Supabase Backend Integration for Surya Suresh's Portfolio
 * Project: https://pjwqkljtwkijxutxxaem.supabase.co
 * 
 * Lightweight native REST client - 0 bundle bloat, 100% resilient
 */

export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 'https://pjwqkljtwkijxutxxaem.supabase.co';

export const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export interface ChatLogEntry {
  id?: string;
  session_id: string;
  sender: 'user' | 'spoofy';
  message: string;
  created_at?: string;
  metadata?: Record<string, unknown>;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at?: string;
}

/**
 * Log chat message to Supabase and persist to local session memory
 */
export async function logChatMessageToBackend(
  sessionId: string,
  sender: 'user' | 'spoofy',
  message: string,
  metadata: Record<string, unknown> = {}
): Promise<boolean> {
  // 1. Always record in browser local session buffer
  try {
    const key = `spoofy_session_${sessionId}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    const newEntry: ChatLogEntry = {
      session_id: sessionId,
      sender,
      message,
      created_at: new Date().toISOString(),
      metadata,
    };
    existing.push(newEntry);
    localStorage.setItem(key, JSON.stringify(existing));

    // Also maintain master list of session IDs
    const sessions = JSON.parse(localStorage.getItem('spoofy_all_sessions') || '[]');
    if (!sessions.includes(sessionId)) {
      sessions.push(sessionId);
      localStorage.setItem('spoofy_all_sessions', JSON.stringify(sessions));
    }
  } catch (err) {
    console.warn('[Spoofy Storage] Local storage warning:', err);
  }

  // 2. If Supabase Anon Key is present, push to Supabase table
  if (SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'placeholder_anon_key') {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/chat_conversations`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          session_id: sessionId,
          sender,
          message,
          metadata,
        }),
      });

      return response.ok;
    } catch (apiErr) {
      console.warn('[Supabase Backend] Failed to sync message to Supabase:', apiErr);
      return false;
    }
  }

  return true;
}

/**
 * Save contact submission to Supabase
 */
export async function saveContactToSupabase(
  submission: ContactSubmission
): Promise<boolean> {
  if (!SUPABASE_ANON_KEY) return false;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(submission),
    });

    return response.ok;
  } catch (err) {
    console.error('[Supabase Backend] Contact submission error:', err);
    return false;
  }
}

/**
 * Export session transcript as markdown for repository archiving
 */
export function exportSessionAsMarkdown(sessionId: string): string {
  try {
    const key = `spoofy_session_${sessionId}`;
    const entries: ChatLogEntry[] = JSON.parse(localStorage.getItem(key) || '[]');
    
    let md = `# Spoofy AI Conversation Session Log\n\n`;
    md += `**Session ID:** \`${sessionId}\`  \n`;
    md += `**Date:** ${new Date().toLocaleString()}  \n`;
    md += `**Repository:** [Surya252006/Portfolio](https://github.com/Surya252006/Portfolio)  \n\n`;
    md += `---\n\n`;

    entries.forEach((entry, i) => {
      const senderName = entry.sender === 'user' ? '👤 User / Recruiter' : '🤖 Spoofy AI';
      const time = entry.created_at ? new Date(entry.created_at).toLocaleTimeString() : '';
      md += `### ${i + 1}. ${senderName} *(${time})*\n\n`;
      md += `${entry.message}\n\n`;
      md += `---\n\n`;
    });

    return md;
  } catch {
    return '# No session transcript found';
  }
}
