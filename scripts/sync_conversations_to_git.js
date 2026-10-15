/**
 * Sync Supabase Chat Conversations to Git
 * Fetches all conversations from Supabase and archives them as Markdown files in conversations/sessions/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://pjwqkljtwkijxutxxaem.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqd3FrbGp0d2tpanh1dHh4YWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNDg4MzgsImV4cCI6MjEwNzYyNDgzOH0.IAaJHkCRWKGy0GoA3kjyvhgsAIQ8qoTytk4-QuTkDCM';

const OUTPUT_DIR = path.resolve(__dirname, '../conversations/sessions');

async function syncConversations() {
  console.log(`[Sync] Fetching chat conversations from Supabase: ${SUPABASE_URL}...`);

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/chat_conversations?select=*&order=created_at.asc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${await res.text()}`);
    }

    const rows = await res.json();
    console.log(`[Sync] Retrieved ${rows.length} message(s) from Supabase.`);

    if (!rows.length) {
      console.log('[Sync] No messages found to archive.');
      return;
    }

    // Group by session_id
    const sessions = {};
    for (const row of rows) {
      const sId = row.session_id || 'unknown_session';
      if (!sessions[sId]) {
        sessions[sId] = [];
      }
      sessions[sId].push(row);
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let writtenCount = 0;
    for (const [sessionId, messages] of Object.entries(sessions)) {
      const sanitizedId = sessionId.replace(/[^a-zA-Z0-9_-]/g, '_');
      const filename = path.join(OUTPUT_DIR, `session_${sanitizedId}.md`);

      const firstTime = messages[0]?.created_at || new Date().toISOString();
      const lastTime = messages[messages.length - 1]?.created_at || firstTime;

      let md = `# Spoofy AI Chat Session Log\n\n`;
      md += `- **Session ID:** \`${sessionId}\`\n`;
      md += `- **Started At:** ${new Date(firstTime).toLocaleString()}\n`;
      md += `- **Last Message:** ${new Date(lastTime).toLocaleString()}\n`;
      md += `- **Message Count:** ${messages.length}\n`;
      md += `- **Repository:** [Surya252006/Portfolio](https://github.com/Surya252006/Portfolio)\n`;
      md += `- **Backend Source:** \`${SUPABASE_URL}\`\n\n`;
      md += `---\n\n`;

      messages.forEach((msg, idx) => {
        const senderLabel = msg.sender === 'user' ? '👤 User / Recruiter' : '🤖 Spoofy AI';
        const timeStr = msg.created_at ? new Date(msg.created_at).toLocaleTimeString() : '';
        md += `### ${idx + 1}. ${senderLabel} *(${timeStr})*\n\n`;
        md += `${msg.message}\n\n`;
        md += `---\n\n`;
      });

      fs.writeFileSync(filename, md, 'utf-8');
      writtenCount++;
    }

    console.log(`[Sync] Successfully archived ${writtenCount} session file(s) into: ${OUTPUT_DIR}`);
  } catch (err) {
    console.error('[Sync Error]', err.message);
  }
}

syncConversations();
