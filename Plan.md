# 2XKO Guides MVP Plan

## Vision

A website that lets fighting game players organize and share their team's combos, mixups, and setups.

The goal is to solve:

"Someone asked me for resources on this team, and I have to dig through old files, Discord messages, and videos."

A player should be able to send one link containing everything important about their team.

---

# Core Product

A Team Guide contains:

- Team name
- Two champions
- Organized resources
- Videos
- Notes

Example:

Ekko + Ahri Guide

Contains:

- Combos
- Mixups
- Oki
- Pressure
- Neutral
- Punishes

---

# MVP Features

## Completed

- Next.js setup
- Champion selection system
- Basic component system
- Resource data model
- Video component foundation


---

# Phase 1 — Team Guide Pages

Goal:

Display a complete team guide.

Features:

- View a team
- Display champions
- Display resources
- Display videos

Example route:

/teams/ekko-ahri


---

# Phase 2 — Resource System

Resources are the main content.

Resource types:

- Combo
- Mixup
- Oki
- Pressure
- Neutral
- Punish


Each resource contains:

- Title
- Champion
- Description
- Tags
- Videos


Example:

Ekko Corner Combo

Type:
Combo

Videos:
- YouTube
- MP4
- Twitter/X


---

# Phase 3 — Resource Management

Make adding resources easier.

Features:

- Create resource
- Edit resource
- Delete resource
- Attach videos


Route:

/resources/create


---

# Phase 4 — Team Creation

Allow users to create guides.

Features:

- Choose two champions
- Name team
- Add resources
- Generate guide page


Route:

/teams/create


---

# Phase 5 — Persistence

Replace local data.

Use:

- Supabase


Add:

- Accounts
- Saved teams
- Public guides


---

# Future Features

Not MVP:

- Likes
- Comments
- Profiles
- Meta rankings
- Discord integration
- Community submissions
- Team recommendations


---

# Development Rule

Do not build features before the core loop works:

1. Create team
2. Add resources
3. View team page
4. Share link

Everything supports this loop.