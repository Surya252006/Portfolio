# Chatbot Conversations & Session Logs
## Spoofy AI — Surya Suresh Portfolio

This directory archives visitor and recruiter conversations with **Spoofy AI**, Surya Suresh's 24/7 Artificial Intelligence Portfolio Assistant.

### Architecture & Storage Strategy
1. **Real-Time Cloud Persistence**:
   - Integrated with Supabase PostgreSQL backend (`https://pjwqkljtwkijxutxxaem.supabase.co`).
   - Table: `public.chat_conversations` (stores `session_id`, `sender`, `message`, `timestamp`, `metadata`).
2. **Local Session Cache**:
   - Each browser session generates a unique UUID (`session_<timestamp>_<random>`) persisted in browser storage.
3. **Git Repository Archiving**:
   - Formatted markdown transcripts are saved in `conversations/sessions/` for version-controlled traceability and review.

### Sample Session Log Format
```markdown
# Spoofy AI Conversation Session Log
**Session ID:** `session_20261015_recruiter`
**Date:** 2026-10-15
**Topic:** MedPulse AI, KisanConnect, ATS Resume Download
```
