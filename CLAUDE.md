@AGENTS.md
@SERVICES.md

# Git Workflow — Required for All Agents

After every `git commit`, you MUST immediately run:

```bash
git push -u origin master
```

**Why this matters:** The site deploys via Vercel on push to GitHub. Committing without pushing leaves changes invisible to the deployment pipeline. Every task is incomplete until code is on `origin/master`.

If push fails, report the error in the Paperclip issue comment and set status to `blocked`.

# Paperclip API — Use HTTPS

When calling the Paperclip API, always use **HTTPS**. The `PAPERCLIP_API_URL` environment variable may contain `http://` which 301-redirects to `https://` and curl drops the `Authorization` header on the redirect, causing 401 errors.

Fix: replace `http://` with `https://` in all API calls, or use the helper script:

```bash
/paperclip/instances/default/companies/3d6fb487-5dcb-4943-9226-0e4f0439478f/scripts/paperclip-issue-update.sh \
  --issue-id "$PAPERCLIP_TASK_ID" --status done <<'MD'
Your multiline comment here.
MD
```

Or inline fix:

```bash
API_URL="${PAPERCLIP_API_URL/http:\/\//https://}"
curl -s "$API_URL/api/issues/$ISSUE_ID" -H "Authorization: Bearer $PAPERCLIP_API_KEY" ...
```
