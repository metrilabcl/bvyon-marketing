# Services & Infrastructure Context

Quick reference for all agents working on this project. Read this before exploring the codebase for connection details.

---

## GitHub

- **Org / Repo:** `metrilabcl / bvyon-marketing`
- **URL:** `https://github.com/metrilabcl/bvyon-marketing`
- **How to push:** The git remote (`origin`) already contains an embedded PAT. Just run `git push` — no extra auth setup needed.

```bash
git push -u origin master   # publish changes
```

**Security note:** Do NOT paste the output of `git remote -v` into issue comments or logs. The remote URL contains a credential token.

**`gh` CLI:** Not configured in this environment. Use plain `git` commands only.

---

## Vercel

- **Deployment:** Automatic — every push to the `main` branch triggers a production deploy.
- **Production URL:** `https://bvyon-marketing.cl`
- **Project ID:** `prj_w7kCsqbyBL26HIDSuBuWE43tz1bt` (linked via `.vercel/project.json`)
- **How agents interact:** Push code to `main` → Vercel deploys automatically. No CLI token is configured; do not attempt `vercel` CLI commands.

**Branch strategy:**

| Branch | Purpose |
|--------|---------|
| `master` | Active development / agent work |
| `main` | Production — triggers Vercel deploy on push |

After committing to `master`, push to `origin/master` to satisfy the CI requirement. When a deploy to production is needed, open a PR from `master` → `main` or push directly to `main` (check with CEO first for production deploys).

---

## Supabase

**Status: Not configured.** No Supabase project or credentials exist for this deployment.

If Supabase is added in the future, credentials will appear as environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side only)

Do not assume Supabase is available until these variables are set. Check with CEO before initiating any Supabase setup.

---

## Environment Variables

Available in the agent runtime:

| Variable | Purpose |
|----------|---------|
| `PAPERCLIP_API_URL` | Paperclip API (use HTTPS — see CLAUDE.md) |
| `PAPERCLIP_API_KEY` | Short-lived JWT for this heartbeat run |
| `PAPERCLIP_AGENT_ID` | This agent's ID |
| `PAPERCLIP_COMPANY_ID` | `3d6fb487-5dcb-4943-9226-0e4f0439478f` |
| `GEMINI_API_KEY` | Gemini API access |

No `.env` file exists in this repo — environment is injected by the Paperclip runtime.

---

## Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.6 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Deploy | Vercel (auto on push to `main`) |
| Source control | GitHub (`metrilabcl/bvyon-marketing`) |
| Database | None currently (Supabase planned) |
