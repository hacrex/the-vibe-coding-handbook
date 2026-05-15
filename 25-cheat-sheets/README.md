# Cheat Sheets for Vibe Coding

Quick reference guides for common tasks, commands, and patterns.

## Prompt Engineering Cheats

### Basic Structure
```
CONTEXT + TASK + CONSTRAINTS + FORMAT = Effective Prompt
```

### Quick Templates
| Task | Template |
|------|----------|
| Code Review | "Review for [bugs/performance/security]" |
| Debugging | "Error: [X]. Expected: [Y]. Fix it." |
| Testing | "Write tests for [edge cases/errors]" |

## Tool Commands

### Cursor/Windsurf
- `Cmd+K`: Generate/edit code
- `Cmd+L`: Chat about codebase
- `@file`: Reference file
- `#symbol`: Jump to symbol

### Git Quick Reference
```bash
git status          # Check state
git add -p          # Stage interactively
git commit -m ""    # Commit
git push            # Push
git reset --hard    # Discard changes
git reflog          # Find lost commits
```

## HTTP Status Codes
| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

## SQL Patterns
```sql
SELECT * FROM table WHERE condition LIMIT 10;
SELECT col, COUNT(*) FROM table GROUP BY col;
SELECT * FROM t1 JOIN t2 ON t1.id = t2.fk;
```

---

**Tip**: Customize these cheats for your workflow!
