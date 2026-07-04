# 2XKO Guides — Product Plan

This project is a structured learning + resource system for fighting game teams (2v2 format).  
Users can select champions, build “boards” (teams), and browse curated combo / mixup / okizeme resources with video support.

---

# 🧭 Core Vision

Turn fighting game knowledge into:

- searchable resources
- team-based boards
- video-driven explanations
- shareable setups between players

---

# 🏗 Architecture Principles

- Data lives in `/data`
- Types live in `/types`
- Logic lives in `/hooks` and `/lib`
- UI lives in `/components`
- Pages only compose components
- No business logic in pages

---

# 📌 MVP Milestones

## Phase 1 — Foundation (DONE / IN PROGRESS)
- Project structure setup
- Champion system
- Selection hook
- Basic homepage

---

## Phase 2 — UI Component System
Break UI into reusable components:

- ChampionCard
- ChampionGrid
- SelectedChampions
- TeamSidebar
- OpenGuideButton
- Shared UI primitives (Button, Card, Modal)

Goal: page.tsx becomes a composition layer only.

---

## Phase 3 — Resource System (Core Feature)

Build the fighting game knowledge system:

- Resource types:
  - combo
  - mixup
  - oki
  - neutral
  - pressure
  - punish

Features:
- filter by champion
- filter by tags
- filter by type
- search resources
- attach multiple videos per resource

---

## Phase 4 — Video System

Support multiple video sources:

- YouTube embeds
- MP4 playback
- Twitter/X embeds

Features:
- unified VideoPlayer component
- timestamp support
- autoplay toggle (optional later)

---

## Phase 5 — Boards System (CORE PRODUCT FEATURE)

Boards = team-based knowledge collections.

Each board contains:
- title
- description
- team (2 champions)
- resources
- notes (later)
- public/private toggle

Features:
- create board
- view board
- edit board
- share board URL
- duplicate board

---

## Phase 6 — Search + Filtering System

Global resource discovery:

- search bar
- tag filtering
- type filtering
- champion filtering
- combined filters

---

## Phase 7 — Persistence Layer

Replace mock data with backend:

- Supabase (recommended)
- or Firebase alternative

Features:
- save boards
- save resources
- user accounts

---

## Phase 8 — Social Layer

- user profiles
- public boards
- likes/favorites
- comments
- shared meta builds

---

# 🧠 Long Term Vision

This becomes:

> “Liquipedia for fighting game team combos + coaching tool”

with:
- curated setups
- matchup knowledge
- duo synergy exploration
- community boards