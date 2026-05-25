---
title: "Guide - Gear Crafting from Temis Vendors"
description: "Complete guide to crafting a full set of endgame gear entirely within Temis city — vendor sourcing, affix crafting pipeline, masterwork-before-temper trick, and per-slot strategies."
tags:
  - diablo4
  - season13
  - crafting
  - horadric-cube
  - guide
  - gear
season: 13
expansion: Lord of Hatred
publish: true
date: 2026-05-25
---

# Guide – Gear Crafting from Temis Vendors

> **Goal:** Build a Pit-120-capable character without leaving Temis. Acquire ancestral bases from vendors, craft them through the full Horadric Cube pipeline, and end up with gear that can blast T12 content.

---

## Vendor Sources in Temis

You never need to step outside the city to gear up. Four vendor types provide the raw materials:

### 1. Sigil Vendor (Bing)
Located near the War Plans table. Sells **two caches** for gold that refresh periodically:

| Cache | Contains | Best For |
|---|---|---|
| Resource Cache | Items that can roll resource aspects (rings, etc.) | Resource-focused bases |
| Defensive Cache | Helmets, chest, pants | Armor slot bases |

Both caches can drop **ancestral items with Greater Affixes**. Always buy them on cooldown — they're cheap and can yield a starting GA base.

### 2. Purveyor of Curiosities (Obol Gambling)
Standard obol vendor. Gamble for specific slot types. **Best source for gloves** (only cost 25 obols/roll) and weapons.

### 3. Southern Gear Vendors
A cluster of vendors in the south of Temis. They sell **850 and 900 item power** items. These refresh on a timer. Key targets:
- **Ancestral items** (900+ IP) — can roll with Greater Affixes, and are the best bases for Upgrade to Unique since they retain ancestral quality
- **850 IP items** — cheaper to spam, but cannot roll unique power when upgraded to unique; use only as a fallback for build-defining uniques

### 4. Druuses (Ring Vendor)
Sells a specific ring that you can strip down and rebuild. The stats on it don't matter — what matters is it's a 900 IP ring base.

---

## The Full Crafting Pipeline

This is the order of operations to go from a vendor ancestral base to a finished item. **Do not skip steps or reorder them** — the sequence matters.

```
Vendor Base → Strip Affixes → Add Affixes → Reroll → 
Masterwork (first!) → Temper → Socket → Aspect → Transfigure
```

### Step 1: Acquire Ancestral Base
Get a 900+ IP ancestral item from any Temis vendor. The affixes don't matter — you'll strip them off.

### Step 2: Strip Affixes (Remove Affix)
At the Horadric Cube, use **Remove Affix** with the appropriate Tuning Prism to strip each unwanted affix until the item is Common (no affixes).

**Cost:** 1 Refined Primordial Dust + 15 Raw Primordial Dust + 1 Tuning Prism per affix removed.

> For items with only 1-2 good affixes: lock the good ones via the Enchanter first (see Cube Tips & Tricks), then strip the bad ones.

### Step 3: Add Affixes
Starting from a Common base, use **Add Affix** (Coarse Dust + Tuning Prism) to build up 4 affixes. The Tuning Prism biases the category:
- Aggressive → offensive stats (crit chance, crit damage, vulnerable, attack speed)
- Adept → skill ranks, core stats
- Resource → cooldown reduction, resource gen
- Defensive → max life, armor, resistances

### Step 4: Focus Reroll / Chaotic Reroll
Use **Focused Reroll** (with Tuning Prism) to target a specific affix on a slot you want to improve. If you're starting fresh (all bad affixes), it's often faster to strip back to Common and rebuild than to roll each slot individually.

> **Clean slate trick:** If most of your affixes are bad, rather than trying to reroll each one individually, just remove all affixes back to Common and start again. This costs the same but gives you full control over the rebuild order.

### Step 5: Masterwork FIRST (Critical Trick)
**This is the most important trick in the video that most players miss.**

Normally you'd masterwork after tempering. But if you masterwork **before** tempering, the masterwork crit pool has one fewer affix to hit — making your desired stat **more likely to crit**.

**Example (gloves):**
1. Build: Crit Chance, Crit Damage, Attack Speed, Vulnerable Damage
2. Masterwork → 3 chances to crit on any of these 4 affixes
3. Temper → Add **Crit Damage as a Greater Affix** (this new affix wasn't in the masterwork pool)
4. The masterwork already landed its crits; the temper GA is bonus on top

**When NOT to do this:** If your temper is a build-defining stat you absolutely need to crit (e.g. max life on chest), masterwork after tempering instead so the temper is in the pool.

### Step 6: Temper
Use the Blacksmith to temper on Greater Affixes. Equipment with more affixes already on it can roll higher temper values than the native affix version of that stat.

### Step 7: Add Socket
Go to the Jeweler and punch a socket in the item. **Do this before transfiguring** — if you forget, you can't add a socket to an unmodifiable item.

### Step 8: Imprint Aspect
Apply your aspect at the Occultist. Finalise this before transfiguring — you cannot change it afterward.

### Step 9: Transfigure (Final Step)
Use the Horadric Cube's **Transfigure Item** recipe. This is the final step on a completed item. See the [[Reference - Horadric Cube Transfiguration]] note for outcome details.

---

## Masterwork-Before-Temper — Detailed Explanation

The standard crafting order is **Temper → Masterwork** because tempering adds new stats you want to crit on. The inverted order works specifically when:

1. You care more about **existing affixes** (crit skills, crit damage, etc.) landing on masterwork crits than the temper stat
2. The temper stat gives a flat bonus (like a GA) that doesn't gain as much from masterwork scaling

**The inverted order:** Masterwork first → then temper → the temper roll adds as an extra GA on top.

**When to masterwork first:**
- Gloves / Rings / Weapons where native affix values (crit chance, crit damage) are more important than the temper
- The temper is a "nice to have" bonus, not build-defining

**When to masterwork after tempering:**
- Chest / Pants where max life temper is the most important stat to crit
- Any slot where the temper stat is the primary scaling vector
- Items where you're fishing for a specific GA temper roll

---

## Per-Slot Crafting Strategy

### Gloves (Easiest Slot)
- Gamble at the Purveyor (25 obols/roll) until you hit ancestral
- Strip to Common → add affixes targeting: Attack Speed / Crit Chance / Crit Damage / Vulnerable Damage
- Masterwork first → temper on Crit Damage GA
- Aspect + Socket → Transfigure

### Rings
- Buy from Druuses or gamble at Purveyor
- Priority stats: Cooldown Reduction (resource prism), Crit Damage / Vuln / All Damage (aggressive)
- Cooldown reduction is an Utility affix, making it easy to lock while you roll offensive stats around it
- Masterwork first, then temper cooldown reduction GA

### Chest
- Use **Upgrade to Unique** from an ancestral rare base (always yields an ancestral unique)
- Best targets: Raiment of the Infinite (sorc) — chest only has a few unique outcomes
- Temper on max life GA (this can roll higher than native max life)
- Masterwork **after** tempering if you want max life to crit

### Boots
- Upgrade to Unique from ancestral rare bases
- **Hardest slot** — boots have the most unique outcomes (many possible uniques in the pool)
- Budget option: use 850 IP items if you just need the unique effect to work and can accept lower rolls
- Fallback: don't waste too many resources here; settle for a functional pair

### Pants
- Gamble or buy from southern vendors
- Defensive focus: Max Life, Armor, Resistances (or All Resist), +Skill Ranks
- Use the Occultist to reroll dodge chance or unwanted defensive affixes into all-resist or skill ranks
- Temper on max life GA, masterwork after tempering
- Transfigure last

### Weapon
- Buy ancestral from southern vendors or gamble at Purveyor
- Priority: Weapon Damage (high base roll), Crit Damage, Vulnerable Damage / Elemental Damage, Intelligence
- Masterwork first (target: crit damage), then temper crit damage GA
- **Crit damage higher on weapons** — 25% per roll vs 10-13% on ring — makes weapons the priority slot for crit damage stacking
- Socket is critical before transfiguring — Gem Strength outcome is wasted without it

### Offhand / Focus
- Gamble at Purveyor or buy from southern vendors
- Target: Weapon Damage, Crit Chance, Max Life (or All Damage), Crit Damage / Vuln
- Can use Chaotic Reroll on native defensive affix (e.g. max life) to convert it to a damage stat
- Same masterwork-before-temper approach

### Helmet
- Gamble at Purveyor or buy from southern vendors
- Upgrade to Unique for Godslayer Crown / Crown of Lucion / other helmet uniques
- Sources are limited — may need multiple attempts
- Fallback: craft a solid rare/legendary helm with good defensive stats

### Amulet (Hardest Slot)
- **Only upgrade GA ancestral bases** — the unique outcome pool for amulets is large, so you need the best possible base to make it worth the mats
- High-value targets: Isidor's Overflowing Cameo, Banish Lord's Talisman
- Alternative: turn a failed amulet craft into a **Unique Charm** via the Cube (Craft Unique Charm recipe)
- Be prepared for failed rolls — amulets are the most expensive slot to craft

---

## Vendor Refresh & Supply Loop

1. Buy every **Bing cache** you can afford — they're cheap gold sinks
2. Cycle between **southern vendors** and the **Purveyor** — by the time you've stripped and rebuilt a few items, they've refreshed
3. Run **Opal Reserve NMDs** to stock up on obols for large gambling sessions (see [[Reference - Horadric Cube Recipes]] aspect farming route)
4. Use **3-to-1 Transmutation** on duplicate non-ancestral items for a chance at ancestral output

---

## 850 IP vs 900+ IP Tradeoffs

| | 850 IP (Non-Ancestral) | 900+ IP (Ancestral) |
|---|---|---|
| Upgrade to Unique | Works, **but unique power cannot be rerolled** | Can reroll unique power values |
| Aspect Range | Lower max % rolls | Max % rolls possible |
| Cost | Cheaper (vendor price) | More expensive |
| Best Use | Build-defining uniques you just need to equip (temporary) | BiS gear you'll keep |
| Transfigure | Works fine (item quality still rolls) | Same |

**Rule:** If you just need the unique effect to enable a build, 850 works. If you want the item to be endgame-viable, use 900+ IP.

---

## Quick Reference: Temis Vendor Map

| Vendor | Location | What They Sell | Price |
|---|---|---|---|
| Bing | Near War Plans table | Resource / Defensive caches | Gold |
| Purveyor of Curiosities | Central Temis | Slot gambling | Obols |
| Southern gear vendors | South of city map | 850/900 IP items | Gold |
| Druuses | Ring vendor | Rings (always 900 IP) | Gold |

---

## Related Notes

- [[Reference - Horadric Cube Recipes]] — Detailed recipes and material costs
- [[Reference - Horadric Cube Transfiguration]] — Transfiguration outcomes and strategy
- [[Advanced - Weapon Transfigure Gambling]] — GA weapon Transfigure lottery method
- [[Guide - Damage Multipliers and Affix Strategy]] — Affix priority by slot
