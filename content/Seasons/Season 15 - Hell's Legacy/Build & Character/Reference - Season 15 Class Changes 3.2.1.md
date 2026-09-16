---
title: "Reference - Season 15 Class Changes 3.2.1"
description: "Complete quantified record of Diablo IV patch 3.2.1 / build 73552 for Season 15 — the core stat scalar table, all eight class change sets, item and Talisman updates, crafting costs, endgame reward deltas, World Tier unlocks and the four documented PTR-vs-launch reversals, from Blizzard's launch patch notes plus day-2 patch-mirror and creator cross-checks."
tags:
  - diablo4
  - season15
  - patch-notes
  - class-balance
  - uniques
  - talisman
  - world-tiers
season: 15
expansion: Lord of Hatred
publish: true
date: 2026-09-16
confidence: confirmed
last_refreshed: 2026-09-16
sources_checked: [Blizzard News 3.2.1 notes, Blizzard News PTR 3.2.0, Blizzard D4 forums HOTFIX 1, Wowhead Blue Tracker, vitablo.de, Sportskeeda, allthings.how, Rhykker, Rob2628, wudijo, Maxroll]
---

> [!d4-s15] Class Changes — Patch 3.2.1 (build 73552)
> Four classes gained stat scaling (Druid/Necro/Paladin/Sorcerer 1.25 → 1.625); Barbarian lost it (1.1 → 0.8) · Legendary drop rates up in Torment I–V only, Uniques now drop from level 1 in any difficulty · Whisper Gold Cache ~35M → ~100M at Torment XII, Royal Gems 30 → 10 Forgotten Souls, Occultist enchanting 25 → 10 · Pit T150 bonus XP 1800% → 2700% · Warlock pruned from its PTR dominance (largest bug-fix block in the patch, ~32)

## Patch identity
| Item | Value |
|---|---|
| Patch / build | **3.2.1, Build #73552** (all platforms), September 15, 2026 — the Season 15 launch notes. Lineage: 3.2.0 PTR = #73123 (PC only, Aug 4 2026) · 3.1.3 = #73224 · launch = #73552. Third-party console labels ("update 1.118", "update 2.18") conflict with each other; 3.2.1 is authoritative |
| Where the notes live | Nested in the Season Overview blog (`news.blizzard.com/.../24295394/...#Patch`), **not** in the standing "Diablo IV Patch Notes" article — that one still stops at 3.1.3 and carries no 3.2.x content. The D4 news patch-notes card is a dead end |
| Bug-fix volume by class | Warlock ~32 · Barbarian ~25 · Paladin ~19 · Druid ~13 · Spiritborn ~13 · Necromancer ~12 · Rogue ~12 · Sorcerer ~8 |

Unless a line says otherwise, **every figure below is from Blizzard's 3.2.1 notes** (Sept 15, 2026). The list runs PTR bug fixes · class changes (all eight) · item updates (Aspects, Uniques, Talisman, Resistances) · crafting (Cube, Tempering, Jeweler, Occultist) · game features (Bosses, Dungeons, Helltides, Infernal Hordes, Undercity, Monsters, Quests, The Pit, War Plans, Whispers, World Tiers, UI). Independent mirrors — vitablo.de, Sportskeeda, allthings.how, theclick.gg, mp1st — carry the same scalar table, loot changes and crafting costs, and Wowhead's Blue Tracker reproduces the post verbatim, so these are publish-state numbers and not a partial render.

## Core stat scalar — the single biggest lever in 3.2.1
| Class | Scalar | Stat | Effect |
|---|---|---|---|
| Barbarian | **1.1 → 0.8** | Strength | Damage per 10 Strength 1.1% → 0.8% (~27% less stat-derived damage) |
| Druid | **1.25 → 1.625** | Willpower | Damage per 10 Willpower 1.25% → 1.625% |
| Necromancer | **1.25 → 1.625** | Intelligence | Damage per 10 Intelligence 1.25% → 1.625% |
| Paladin | **1.25 → 1.625** | Strength | Damage per 10 Strength 1.25% → 1.625% |
| Sorcerer | **1.25 → 1.625** | Intelligence | Damage per 10 Intelligence 1.25% → 1.625% |
| Rogue / Spiritborn / Warlock | unchanged | — | No scalar line appears under those three class headers in 3.2.1 |

- **Barbarian dev note, verbatim:** "This change reduces Damage per 10 points of Strength from **1.1% to 0.8%**." Blizzard: "Barbarians have been strong for the past couple seasons, so we're going to adjust the class while improving some Core skills."
- **Correction to day-1 summaries:** the cut is **1.1 → 0.8**, not "1 → 0.8" — the pre-patch starting value is 1.1 (patch mirrors vitablo.de and Sportskeeda both quote the dev note).
- Net effect: Barbarian is nerfed but not dead — Whirlwind Barb still sits S-tier on Maxroll (Sep 15), wudijo calls the old "complete barb dominance" removed while Whirlwind remains up top, and Rob2628: "with a heavy heart, it got nerfed, guys, but Whirlwind is still a true powerhouse." Rhykker (Sep 15) rates the patch "probably one of the best states of class balance we've had in a while" with no class below B. Tier placement: [[Seasons/Season 15 - Hell's Legacy/Build & Character/Guide - Season 15 Tier List & Starters|Season 15 Tier List & Starters]].

## Barbarian — scalar cut, Core skills lifted
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | 1.1 → 0.8 (see above) |
| Skills | Rallying Cry: Madawc Variant 200% → 100% · Call of the Ancients: Madawc 240% → 120% · Two-Handed Sword Expertise Bleeding 30%[x] → 15%[x] |
| Paragon | Disembowel Glyph 20%[x] → 15%[x] · Crusher Glyph 20%[x] → 15%[x] · Hemorrhage Node 75%[x] → 60%[x] · Blood Rage Node 60%[x] → 45%[x] · Flawless Technique Node 50%[x] → 45%[x] |
| Aspects | Writhing 7.5–12.5%[x] → 6–9%[x] · Battle-Mad 15–20% → 10–15% · **Raid Leader's** now also grants 7–10% Damage Reduction (buff) |
| Uniques | Ring of the Ravenous — applies only 1 stack of Rend, cooldown 1s → 0.5s, Scorching Variant now a fire wave instead of Bleeding · **Ring of Red Furor** Fury requirement 100 → 30, plus +1%[x] Crit Damage per Fury above 30 (reopens HotA / big-hit builds) · Nomad's Longing Heart double-damage also vs Healthy · Ramaladni's Magnum Opus drains 7% Maximum Fury (was 10 Fury/sec) and only in combat · Rage of Harrogath CDR 1s → 0.5s · **~25 bug fixes** (Bul'Kathos' Pride extra Ancient · The Third Blade interactions: Death Blow Fury cost, Mighty Throw, Steel Grasp cooldown · Mantle of Mountain's Fury not granting Earthquake skill points) |

## Druid — net buff
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | 1.25 → 1.625 Willpower |
| Skills | **Human Form reworked** — was 5 Spirit/sec + 15% CDR → now 15% Resource Regeneration + 15% CDR, plus damage up to 10%[x] on applicable skills · **Grizzly Rage** — Cornered Beast baked into the base skill at max 150%[x]; the Cornered Beast Variant raises the cap to 200%[x] · Lightning Storm no longer forced to land in confined spaces · **~13 bug fixes**, incl. "Fixed an issue where Druid could become unkillable" and Legendary Totems not obtainable from the Purveyor of Curiosities |
| Aspects | Shifter's Aspect now grants 7–10% Damage Reduction for 5s when shifting into any form |
| Uniques | Greatstaff of the Crone 60–80%[x] → 120–150%[x] · Fleshrender applies to **all** Tornadoes (not just returning ones), 40–50%[x] → 100–135%[x] · Gathlen's Birthright also grants Cyclone Armor's passive (DR only in Human form) · **Might of the Ursine nerfed** 10–13%[x] → 7–9%[x] and now Werebear-only · Airidah's Inexorable Will 7–10%[x] → 30–45%[x] · Dolmen Stone 75–90%[x] → 113–135%[x] · Wildheart Hunger — Bosses always take the max damage bonus |
| Talisman sets | **Storm Shepherd's Call** 2-pc per consumed Spirit 0.5% → 0.25%, max bonus 60% → 80%, duration 2s → 4s, no longer stacks (refreshes); 5-pc adds a 100%[x] multiplier but double/triple-cast damage 500%[x] → 350%[x] · **Nafain's Bestiary** 2-pc Battle Roar cooldown to 5s and bonus 60%[x] → 90%[x]; 5-pc also +250%[x] Companion Damage · **Might of the Den Mother** 2-pc Stoicism to 20 stacks, 3%[x] → 4%[x] per stack, stacks removed on direct damage; 5-pc Rampage lasts forever above 15 stacks · **Rush of the Red Wolf Moon** 2-pc 50%[x] → 60%[x] and applies to all targets; 5-pc adds 25%[x] Movement and Cast Speed · **Song of the Old Mountain** 2-pc no longer requires Earth skills |

## Necromancer — net buff, largest Core-skill pass
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | 1.25 → 1.625 Intelligence. Dev note: top builds were Blood Wave and Bone Spirit Core variants, so base Core skills are lifted |
| Skills | Army of the Dead spawns additional Volatile Skeletons and **stacks up to 5 times** on recast · Unyielding Commander "50%[x] increased Summon damage" → "Minions deal 30% increased damage" (rank-scaling) · Blight: Piercing Darkness +75% vs Bosses, Whirlpool −10 Essence · Blood Surge nova 100% → 125% (Bloodbath too) · Blood Lance 130% → 160% · Blood Seeker 45%[x] → 50%[x] plus an extra 50%[x] to the first enemy hit · Festering Wound 80% → 100% and stacks to 5 · Blood Wave Path of Darkness Desecrated Ground 600% → 800% · Hematolagnia cost 50 → 70 Essence · Bone Prison Plunging Darkness Desecrated Ground 300% → 450% · Bone Spear 130% → 160% · Bone Spikes 43% → 53% · Blood Spear 130% → 160% · **Corpse Explosion 110% → 180%**, Miasma 210% → 350%, Shrapnel 110% → 180% · Sever Reaping Lotus 40% → 60% · **Soulrift 300% → 350%**, cooldown 50s → 40s, Soul Vortex additionally −15s · Damage Bonus and Distilled Anima upgrades **swapped** (Distilled Anima now grants 30%[x] Darkness damage while active) |
| Paragon | Blood-drinker Glyph gains 15%[x] Blood damage · Exhumation Glyph reworked to 10% DR for 8s + Lucky Hit up to 15% chance to form a Corpse · Sacrificial Glyph 10%[x] → 20%[x] · Blood Begets Blood max damage 60%[x] → 75%[x] |
| Aspects | Debilitating Darkness 15–25% → 30–40% · Gloom 10–15%[x] → 15–20%[x] · Necrotic Carapace gains 10–15% DR · Rapid Ossification also +20%[x] Bone Skill damage · Shielding Bones All Resistance 20–30% → 30–40% · Embalmer Blood Orb Healing 30–45% → 60–75% |
| Uniques | Ebonpiercer 40–50% → 60–70% · The Unmaker 200–250% → 300–350% · **Red Blessing reworked** — Blood Skills consume 1 Overpower stack for 130–150%[x] increased damage (was 8–10% per stack) · Deathless Visage echo 40–50%[x] → 60–70%[x] · Hangman's Hand 10–15%[x] → 35–50%[x] · Will of Rathma 40%[x] → 60%[x] |
| Talisman | **Peace of the Black Shroud** 2-pc duration 30s → 10s (**nerf**) · Radamant's Desecration 2-pc 30% → 50%, 5-pc 225% → 250% · Word of the Blood Binder 5-pc 75%[x] → 100%[x] · **Rathma's Waking Touch reworked** into a general Summoning set — 2-pc 60%[x] Summoning Damage with 0.25s AotD cooldown reduction per Minion hit; 5-pc 200%[x] Summoning Damage (was 450%[x] AotD damage) · **~12 bug fixes** (Mortacrux not salvageable · Aspect of Gloom incorrectly converting base Bone Skills to Darkness) |

## Paladin — net buff, rises off the floor
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | 1.25 → 1.625 Strength. **Judgement damage now scales with the Rank of the Skill that applied Judgement** (new scaling vector). Dev note: "Paladin has fallen behind other classes in the late game." |
| Skills | Holy Bolt's "Judgement" upgrade renamed "Damage Increase" and now grants 20%[x] damage · Blessed Shield Shield of Justice Variant also grants +50%[x] Judgement damage for 5s · Divine Lance 90% → 110% · Tip of the Spear 35% → 39% · Zealous Joust 74% → 91% · Divine Javelin initial 99% → 121%, burst 495% → 605% · Zeal additional strike 20% → 35% · Shield Bash Lay Siege 246% → 349% · Smite initial 287% → 451%, secondary 102% → 307% |
| Oaths | Judicator Oath gains "if Judgement only hits 1 enemy, it deals 100% increased damage" · Disciple Oath 80% → 100% · Juggernaut's Oath 80% → 100% · Zealot Oath damage per Fervor stack 25% → 35% |
| Aspects | Watkin's Law reworked — consuming and reapplying Judgement can occur once per 3 seconds per enemy · Aspect of the Judicator 40–60% → 60–80% · **Cathedral Song reworked** — consuming Judgement 100 times calls down Spear of the Heavens (Judgement on Bosses counts as 10) · **X'Fal's Corroded Signet can no longer be equipped by Paladins** (also removed from Banished Lord's Talisman's eligible classes) |
| Talisman | Heaven's Radiant Fire 5-pc "Judgement Day max stacks to 40" → 25%[x] bonus and max stacks to 20, Judging a Boss grants 5 stacks · Cathan's Righteous Will 5-pc duration 10s → 15s · **~19 bug fixes**, incl. "Damage Over Time affixes no longer usable and no longer appear on items for Paladins" |

## Rogue — lightest class pass, no scalar change
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | unchanged (no scalar line in the 3.2.1 Rogue section) |
| Skills | Dash's Shadow Play Variant renamed "Echo" · Smoke Grenade Shade Grenade Variant now gains Combo Point and Shade damage bonuses · Flurry Encircling Blades 294% → 343% weapon damage |
| Paragon | Surgical Rare Node Cutthroat Damage → **All Damage** · Focused Rare Node Marksman Damage → **Damage to Elites** · Tricks of the Trade reworked — enemies damaged by your Marksman, Cutthroat, Mobility or Trap Skills take 20%[x] increased damage each (now states the bonus only applies in combat) |
| Aspects | Grenadier's 35–50%[x] → 45–60%[x] (52.5–75%[x] → 75–100%[x] vs CC'd) · Artful Initiative 25–30%[x] → 40–50%[x] · Poisonous Clouds gains "Poisoned enemies deal 7–10%[x] less damage to you" |
| Uniques | Pitfighter's Gull 7.5–10%[x] → 15–20%[x] · Condemnation gains a Combo Point persistence effect (1.5s) · Deathmask of Nirmitruq grants Flurry the Transporter Variant free |
| Talisman / Tempering | Applied Alchemy 5-pc 200%[x] → 250%[x] · Spellbound Steel Lucky Hit 9% → 50% and Imbued Skills +60%[x] damage · **Offensive Temper "Damage per Combo Point Spent" 3–4.5% → 10–15%** · **~12 bug fixes** (Aspect of Corruption additive → multiplicative · Dance of Knives Combo Points · Poison Trap not contributing to Tricks of the Trade) |

## Sorcerer — Cold archetype buff
| Area | 3.2.1 change |
|---|---|
| Core stat scalar | 1.25 → 1.625 Intelligence. Dev note: "We are buffing the Cold archetype for Sorcerer, since Lightning and Fire have been dominating the past couple of seasons." |
| Skills | Ball Lightning Orbital Variant castable while moving · Deep Freeze Frigid Ward also creates Ice Spikes for 39% weapon damage · **Fireball Frostball Variant nerfed** — no longer requires Frozen, spikes 5 → 3, damage 170% → 85% · Firewall Ring of Fire now only affected by Direct Damage from Pyromancy Skills · Frozen Orb Great Orbs of Fire consumes only 1 Overpower stack to explode 3 times · Ice Blades Blazing Variant now 20 Mana instead of a cooldown, Mana Drain removed · Ice Shards Piercing Cold also +50%[x] damage · **Meteor buffed across the board** — impact 180% → 240%, Shooting Star 306% → 408%, Air Burst 45% → 88%, Comet 270% → 360% · **~8 bug fixes** |
| Paragon | Pyromaniac Glyph max 18%[x] → 15%[x] (**nerf**) · Eliminator Glyph 10% → 18% · Elemental Summoner Node 50%[x] → 60%[x] · Icefall Node 50%[x] → 60%[x] · **Enchantment Master Node reworked** — 100%[x] → 60%[x], different-element bonus removed, added "if both elements are the same, deal 75%[x] with their elements" |
| Aspects | Shivering 60–90%[x] → 90–120%[x] · Frozen Wake 2–3%/60–90%[x] → 3–4%/90–120%[x] · Blasting 60–90%[x] → 80–100%[x] · **Elemental Constellation nerfed** 80–120%[x] → 45–60%[x] · Lingering 20–30%[x] → 30–40%[x] |
| Uniques / Talisman | Blue Rose 40–60%[x] → 80–100%[x] · Shanar's Resonance also grants the Glacier Variant of Deep Freeze · Tirahj's Uncanny Insight 2-pc adds a 60%[x] Conjuration multiplier, 5-pc 175%[x] → 200%[x] · Breath of the Frozen Sea 3-pc 20% → 30% Life/Barrier Generation, 5-pc also −30% Mana cost on Frost skills |

## Spiritborn — large buff pass offsetting two nerfs
| Area | 3.2.1 change |
|---|---|
| Headline nerfs | **Tzic Rune bug fixed** (it had been granting a massive global damage increase) · **Aspect of Supremacy cap 30 → 15 total stacks**. Blizzard frames the rest of the section as offsetting these |
| Systemic | "All variants which previously changed the base Spirit of a skill instead now grant the new Spirit as an additional Skill Tag" (fixes inconsistency with Spirit Hall bonuses) |
| Skills | Rock Splitter 80% → 110%, Inner Ferocity 75% → 100% · Thunderspike 65% → 90%, Infected Ground 40% → 60% · Thrash 70% → 100% · Storm Conjure Variant 100% → 135%, Spirit Storm 100% → 200% · Withering Fist poison 65% → 85%, Fist of the Forest 50% → 150% · **Counterattack of the Swarm Pestilent Swarm nerfed** 150% → 75% · Rake initial 40% → 50%, secondary 60% → 75% · Stinger 115% → 140% · Quill Volley 20% → 25%, Claw Volley 35% → 44% · Crushing Hand 75% → 90% (100 Crushing Hands 300% → 360%) · Payback Wrath of the Gorilla 275% → 325% · Touch of Death 300% → 400% · Razor Wings 95% → 120%, Brutal Blast 100% → 200% |
| New Paragon board | **Swarm of Storms** — Legendary Node: "Skills that create Pestilent Swarms and Spirit Storms deal 80%[x] increased damage. Your Storm Feathers deal 150% increased damage." Rare nodes: Avian (+10% Eagle Skill Damage, +10 Dex) · Flash Fire (+10% Damage, +1.3% Attack Speed) · Haven (+3.0% Total Armor, +4.0% Max Life) |
| Paragon nodes | Bitter Medicine 80%[x] → 140%[x] · Convergence max 60%[x] → 100%[x] · Drive per stack 6%[x] → 10%[x] · In-Fighter 45%[x] → 70%[x] · Revealing 30%[x] → 60%[x] · Spiney Skin Thorns 60% → 100% · Viscous Shield now 1%[x] damage per 1% Max Life in Barrier · Talon Glyph Eagle Crit 15% → 25% · Jagged Plume MS per Storm Feather 5% → 2% but max stacks 5 → 10 |
| Aspects / Talisman | Endless Talons 80–100% → 100–120% · Fleet Wings 20–30% → 25–35% · Combined Strikes 25–35% → 30–40% · Raider's Aspect gains +50%[+] Poison Resistance · Aspect of Supremacy cap 30 → 15 · Spiritborn Talisman 2-pc also grants 60%[x] increased Thorns · Rezoka's Rage 5-pc now allows Prowess to be refreshed |
| Uniques | Sunbird's Gorget duration 8s → 12s · Sepazontec 140–180% → 180–220% · Rod of Kepeleke damage per Vigor 0.85–1.05% → 1–1.2% · Sunstained War-crozier per-stack 40–50% → 60–70%, max 200–250% → 300–350% · Wushe Nak Pa Spirit Hall Potency 250–300% → 350–400% · **~13 bug fixes** (Thorns bonuses not factored into Thorns-scaling skills · Crushing Blow increasing unrelated skills · Tzic Rune) |

## Warlock — still strong, pruned; PTR powerhouse brought down
| Area | 3.2.1 change |
|---|---|
| Dev note | "Warlock is performing well with many of their newly improved options… pruning unintuitive or oppressive scalars… the Overwhelming Aspect was scaling up too much and Metamorphosis was interacting with several stacking mechanics in unintended ways… redistributing power out of Demonform." Core stat scalar unchanged |
| Skills (net buffs) | Blazing Scream Brimstone Hunger cap 25% → 50% · Bombardment now a Summon Skill, base 40% → 55%, impact radius +16%, Endless Barrage castable while moving · Dark Prison Calamity Variant 30% → 200% and now a Sigil Skill · Doom Doomfire Ritual burst 175% → 250%, damage upgrade 1%/s → 2%/s with cap 60% → 200% · Dread Claws now a Greater Demon Skill, base 50% → 70%, Ravenous Jaws Eviscerate 125% → 500% · Fiend of Abaddon 280% → 350% · Infernal Breath 20% → 30%, Explosive Death 100% → 200% and radius +66%, Abyssal Torrent 150% → 200% · Sigil of Chaos 30% → 50% · Sigil of Summons 60% → 80% · Terror Swarm 100% → 130%/s and burst 500% → 650% |
| Metamorphosis | Basic Skill Dominance Generation 2 → 5 · Damage Scaling Max Life threshold 1000 → 1200 · "Skills can no longer remain or become Volatile when they are swapped off the skill bar" · Sin Demon Variant fully reworked (+50% Maximum Wrath and Dominance during Metamorphosis, +5% damage per rank per active Demon Summon) |
| Soul Shards | Summon Valloch cost 10 → 5 Dominance · Command Abodian bite 155% → 245% · **Vanguard Shard: Rampage Brute 13% → 128%, Infernal Breath Head 8% → 30%, Profane Sentinel Eye 36% → 180%** · Legion Shard Eviscerate chance 2% → 5% and damage 200% → 1000% of Lesser Demon damage |
| Paragon | New Glyph **Superiority** (+30% to all magic Nodes in range; 10% DR and Dominance Regeneration 2.0%; legendary +5.5% damage) · Dynamism Node damage per Dominance in Demonform 3% → 2.5%, but also grants 85% increased Summon Skill damage while NOT in Demonform · Control Glyph reworked |
| Aspects | **Overwhelming reworked** — was "each hit vs Elites deals 80–120%[x] increased damage but consumes 4 Overpower" → now "Occult Skills deal 5–7% increased damage vs Elites per Overpower stack, doubled if Hexed" · Cauterization converts all incoming Direct Damage into Fire while Volatile (40% Fortify chance) · Enfeebling always Weakens on Vulnerable · Misanthropic reworked to 25–45% Damage Reduction · Nefarious converts incoming Direct Damage to Shadow and can steal Unstoppable |
| Uniques | Bridle of Tor'baalos 120–160% → 160–200% · **Cowl of Malefic Torment reworked** — Doom damage 80–100% → 140–175%, deals 100–200% of Doom's damage per second until death · **Scepter of the Three reworked** — "You can equip all base Ultimate Skills and gain 15 Ranks"; bonus build-up 4–5%[x] up to 80–100%[x] → 1.7–2.5% up to 170–250% · Hellhound's Sabatons Abodian 80–100%[x] → 200–280% · The Hemat Stone Occult damage 20–30%[x] → 40–60%[x] and Potency 100%[+] → 200% · Hands of Apotheosis — "Any Demonform grants all Metamorphosis Upgrades free… 50–100% more potent" · **~32 bug fixes**, the largest block in the patch, mostly tooltip/variant interaction corrections |

## Item updates — loot, Uniques, Aspects, Resistances
| Area | 3.2.1 change |
|---|---|
| Legendary drop rates | **Increased in Torment I through Torment V; Torment VI and above are unchanged.** Dev note: the goal is to reduce reliance on upgrading random Legendaries through the Horadric Cube to complete the Codex of Power |
| Unique drop gating | **All Unique items are now available to drop at level 1, and in any Difficulty** |
| Mythic sourcing | Mythics dropped by Initiate and Greater Lair Bosses, and those picked from Belial's Hoard, now only include Mythics from that boss's Unique pool (generic random loot can still yield off-pool Mythics at a small chance) · Greater Lair Boss Mythic rate slightly increased · **Initiate Lair Boss Mythic rate increased to match Greater Lair Bosses** · Belial's Mythic rate slightly increased · chance for Mythics from random sources increased · **Echo of Mephisto loot quality increased with a guaranteed Mythic drop** |
| Legendary Aspects (global) | Aspect of Heavenly Strength DR 30–40% → 20–30% and now available to Spiritborn · Eluding now triggers on any Crowd Control (not just while Injured) and grants 10–15% DR, cooldown fixed to 6s · Aspect of Audacity stun 3–5s → 5s plus 10–15% DR vs Close · Rallying Reversal now guaranteed (was 60–80% chance) plus 10–15% DR for 4s · Aspect of the Expectant 4–6% → 6–8% per Basic attack, stacking to 10 · Wyward's gains +50%[+] Lightning Resistance · Embattled Fortify Drain 100–150% → 150–200% |
| Unique items | Azurewrath no longer explodes enemies, damage 100–120% → 120–150% · **Banished Lord's Talisman reworked** — consuming Overpower now grants 130–150%[x] Critical Strike damage for 8s (was 8–10%[x] per stack) and it "no longer dropped for or usable by Paladin, Spiritborn, or Warlock" · Melted Heart of Selig Primary Resource 102–154% → 58–77% · Razorplate Thorns proc 10% → 30%, bonus 180–200% → 200–250% · Tibault's Will Resource Regeneration 50% → 25% · Wendigo Brand grants 1% Attack Speed instead of Maximum Health |
| Unique Charms craftable | 16 existing Uniques (Ae'grom's Schism, Eye of Baal, Gospel of the Devotee, Grasp of Shadow, Hand of Apotheosis, Hellhound's Sabatons, Infernal Homunculus, Rictus of Terror, Shard of Verathiel, Signet of Pelghain, The Basilisk, The Hemat Stone, The Mortacrux, The Third Blade, Thundergod's Blessing, Vox Omnium) plus **7 new legacy Uniques** — Arioc's Needle, Henri's Perquisition, In-Geom, Nemesis Bracers, Squirt's Blouse, Stone of Jordan, The Furnace |
| Resistances | Single Resistance affixes on equipment, Charms and Tempering significantly increased — **single Resistance affixes are now 7× the value of All Resistance affixes**; All Resistance Tempering values re-tuned |

Mythic routes (Cube 1:1 upgrade vs Jeweler Rune Crafting vs Blacksmith Forge) and the two-cache Iconic setup are covered in [[Seasons/Season 15 - Hell's Legacy/Loot & Economy/Guide - Season 15 Mythic Crafting & Loot Economy|Season 15 Mythic Crafting & Loot Economy]].

## Crafting & economy costs
| System | 3.2.1 change |
|---|---|
| Jeweler | Royal Gems Forgotten Soul cost **30 → 10** · Grand Gems **300 → 50** |
| Occultist | Enchanting Ancestral Items **25 → 10** Forgotten Souls · random Magic Tribute **200 → 100** Sigil Powder · Infernal Horde Compass **666 → 500** Sigil Powder |
| Sigil Powder returned on salvage | Nightmare Dungeon Sigil 25 → 20 · **Escalation Sigil 25 → 100** · **Infernal Horde Compass 25 → 100** · Magic Tribute 25 → 20 · Rare Tribute 25 → 100 · Legendary Tribute 25 → 500 · **Mythic Tribute 25 → 2500** |
| Horadric Cube material rates | Overall drop weighting of Pure Primordial Dust reduced (baseline Legendary drop rates went up) · Coarse Primordial Dust becomes less common with difficulty · Refined/Volatile/Pure/Enhanced/Attuned Primordial Dust become more common with difficulty |
| Horadric Cube fixes | Unique Charms and Unique Items can now have their powers rerolled · Mythic Amulets no longer get a non-maximum Unique Affix value on first Transfiguration · Maximum Resolve Stacks was uncapped when Tempering (fixed) |

Sigil Powder salvage returns feed straight into the Nightmare Dungeon and Undercity economy — see [[Mechanics/Nightmare Dungeon Affixes|Nightmare Dungeon Affixes]].

## Endgame reward sources
| Source | 3.2.1 change |
|---|---|
| Whispers / Caches | Experience Orbs from Whisper Caches **3–5 → 4–6**, plus an additional 2–4 in Torment X and above · **Gold Cache rewards roughly 3× — at Torment XII from ~35 million Gold to ~100 million Gold** · Gem Fragment rewards about doubled · Gem Caches now drop 1 Royal or Grand Gem (was a Flawless Gem) · Horadric Cube materials from Cube Materials Caches up ~2–3× · all salvage materials from Salvage Caches up ~2–3× with a larger Forgotten Soul increase at higher Torment · Keys Caches grant 2× the random Tributes and 5× the Sigil Dust, and now have a small chance at a Mephisto Key or Trace of Echoes |
| War Plans | Experience rewards increased and scale heavily with Torment level · baseline Experience Orbs for completing any War Plans node in Torment X+ **2 → 4** · Magic/Rare/Legendary/Mythic experience nodes' orbs **doubled** — see [[Seasons/Season 15 - Hell's Legacy/Endgame Systems/Guide - Season 15 War Plans & Progression|Season 15 War Plans & Progression]] |
| The Pit | Experience from Progress Orbs **doubled** while the Choron's Soul Pit node is active · bonus experience from higher Pit tiers increased — **Pit Tier 150 from 1800% → 2700%** |
| Kurast Undercity | Forgotten Souls added to Tribute of Refinement and Greater Tribute of Refinement rewards · Experience Orbs from the Jade Epiphany node doubled |
| Monsters | Gem Fragment drops from Elites significantly increased in Torment X and above · chance for Elites to drop a random Royal Gem significantly increased in Torment X+ · fixed Life Link monsters giving the experience of one enemy |
| Helltides | Reduced Experience Orb drops from Hellmouth Helltide-node Plague Maggot Young · Portent of Pain and Plague Devourers now drop 1–2 Experience Orbs instead of always 2 |
| Explicitly unchanged | No change to the Pit tier cap · no new Torment levels · no Infernal Hordes reward-scaling change beyond a Grim Favor bug fix |

Reward deltas land on the activities the three splinters amplify — see [[Seasons/Season 15 - Hell's Legacy/Endgame Systems/Guide - Season 15 Prime Evils & Splinter Lanes|Season 15 Prime Evils & Splinter Lanes]] and [[Seasons/Season 15 - Hell's Legacy/Endgame Systems/Guide - Season 15 Waking Nightmares|Season 15 Waking Nightmares]]; leveling routes reshaped by the XP changes are in [[Seasons/Season 15 - Hell's Legacy/Build & Character/Guide - Season 15 Leveling 1-70|Season 15 Leveling 1-70]].

## World Tiers
| Change | Value |
|---|---|
| Difficulty unlocks | **Expert and Penitent are now unlocked upon completion of the Prologue**, instead of requiring campaign completion |
| Torment X bonus XP | 1200% → **1300%** |
| Torment XI bonus XP | 1300% → **1500%** |
| Torment XII bonus XP | 1400% → **1700%** |

## PTR (3.2.0) vs launch (3.2.1) — the four documented deltas
| Item | PTR → launch |
|---|---|
| Iconic Mythics | PTR introduced Unique-quality versions of Iconic Mythic items; **reverted at launch after player feedback — "Iconic Mythics will remain Mythic-quality only."** Live rule = Mythic-only, as it was in Season 14 |
| Blacksmith Mythic cache | PTR's single cache rolled a chance at both class-appropriate Mythic Uniques and Iconic Mythics; at launch Blizzard **added a second Blacksmith Cache option that only rolls for Iconic Mythics, at the same cost as the Mythic Uniques cache.** Live = two caches |
| Storm Shepherd's Call | Deliberately nerfed from its PTR iteration — the official Druid note says the "redesign resulted in a nerf from its previous iteration," and Blizzard "will continue to monitor its performance" |
| Warlock Demonform | PTR-dominant class brought down at launch — power redistributed out of Demonform, Metamorphosis stacking interactions pruned. Rhykker day 1: "the warlock on the test server was looking to be the best class by far. It got hit with some nerfs in the patch notes, so it's being brought down" |

- **PTR anchor:** 3.2.0 PTR Build #73123, PC only, August 4, 2026; PTR window Aug 4–11, 2026. Any PTR figure not restated in the 3.2.1 list should be treated as **superseded**. Launch itself was not clean — announced 9:30 a.m. PT (= 18:30 CEST) Sept 15, delayed mid-day by login failures (errors 300008/300006/300202), restored the same day via HOTFIX 1; no hotfix news article was published, only the forum thread, and no HOTFIX 2 was found as of day 2.
- **Reading caveat — PTR blue highlighting does not survive text extraction.** Blizzard's blog marks PTR-changed lines in blue, but that formatting is lost in any text copy or mirror, so a PTR-sourced line and a launch-final line are **indistinguishable** in the extracted body of the list. Only the four Developer's Notes above state a PTR→launch delta in prose. Treat any other PTR number from the Aug 4–11 preview as **unverified against launch** unless it is restated in the 3.2.1 notes.
- **No PTR-vs-launch number exists for the Whisper Gold Cache.** The only hard figure is post-patch: ~100 million Gold at Torment XII, up from ~35 million. No pre-launch PTR gold value was published.

## Sources

- [Blizzard News — "Celebrate 30 Years of Diablo in Season of Hell's Legacy" (24295394 — the full 3.2.1 Build #73552 patch notes inside the Season Overview)](https://news.blizzard.com/en-us/article/24295394/celebrate-30-years-of-diablo-in-season-of-hell-s-legacy)
- [Blizzard News — "The 3.2.0 PTR: What You Need to Know" (24292852 — PTR build #73123)](https://news.blizzard.com/en-us/article/24292852/)
- [Blizzard News — standing "Diablo IV Patch Notes" (24287406 — stale; 3.1.0–3.1.3 only, no 3.2.x)](https://news.blizzard.com/en-us/article/24287406/diablo-iv-patch-notes)
- [Blizzard D4 Forums — "HOTFIX 1 – September 15, 2026 – 3.2.1"](https://us.forums.blizzard.com/en/d4/t/hotfix-1-september-15-2026-321/267056)
- [Wowhead Blue Tracker — verbatim mirror of the Season Overview blog](https://www.wowhead.com/diablo-4/blue-tracker/news/us/celebrate-30-years-of-diablo-in-season-of-hells-legacy-diablo-iv-blizzard-news-24295394)
- [vitablo.de — Season 15 patch 3.2.1 (quotes the Barbarian scalar dev note)](https://vitablo.de/diablo-4-news/season-15-patch-3-2-1/)
- [Sportskeeda — Diablo 4 Season 15 patch notes 3.2.1](https://www.sportskeeda.com/mmo/diablo-4-season-15-patch-notes-update-3-2-1)
- [allthings.how — S15 patch notes: update 3.2.1 class and loot changes](https://allthings.how/diablo-4-season-15-patch-notes-update-3-2-1-class-and-loot-changes/)
- [Rhykker — "Diablo 4 Season 15 Best Class Tier List (Guide)" (Sep 15, 2026)](https://www.youtube.com/watch?v=N4wnTvZbOzw)
- [Rob2628 — Season 15 tier list / patch reaction (Sep 15, 2026)](https://www.youtube.com/watch?v=tH6ouWJZtIM)
- [wudijo — Season 15 patch-impact video (Sep 15, 2026)](https://www.youtube.com/watch?v=gFAWg3WjiV8)
- [Maxroll — D4 Endgame Builds Tier List, Season 15 (updated Sep 15, 2026)](https://maxroll.gg/d4/tierlists/endgame-tier-list)

---

← Back to [[Seasons/Season 15 - Hell's Legacy/index|Season 15 Index]]
