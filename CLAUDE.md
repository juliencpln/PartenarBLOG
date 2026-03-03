# CLAUDE.md — PartenarBLOG

## Structure des fichiers

- Articles en draft : `draft/`
- Articles publiés : `_posts/`
- Chaque article existe en **deux formats** : `.md` (Markdown) et `.html` (WordPress)
- Nommage : `YYYY-MM-DD-slug-de-larticle.md` / `.html`

## Format des articles Markdown

### Frontmatter YAML

```yaml
---
title: "Titre de l'article"
excerpt: "Résumé court avec les chiffres clés du top 3, terminé par 'propulsés par les données Partenar.'"
coverImage: /assets/nom-image.png
date: YYYY-MM-DDT08:00:00.000Z
author:
  name: Julien C.
ogImage:
  url: /assets/nom-image.png
---
```

### Structure type d'un article TOP 10

1. **Intro** (2-3 paragraphes) : stats globales (nb partenariats, nb créateurs), tendances du mois, stratégies marques
2. **Séparateur** `---`
3. **Titre section** `## TOP 10 des partenariats du mois`
4. **Sous-titre** `*Classés par taux d'engagement, hors jeux-concours.*`
5. **10 entrées** avec pour chacune :
   - `### N. Nom Créateur x Marque`
   - Embed du contenu (Instagram ou YouTube)
   - Ligne stats : `**Plateforme :** X | **Engagement :** X% | **XK likes** | **date**`
   - 2-3 phrases de description/analyse
   - Séparateur `---`
6. **Conclusion/CTA** (voir section dédiée)

### Structure type d'un article thématique (ex: 8 mars)

Même structure que TOP 10, avec en plus une section **"Ce qu'on retient"** avant le CTA :
- 3-4 bullet points en gras + explication
- Format : `**Point clé.** Développement.`

## Classement / Méthodologie

- **Métrique principale** : taux d'engagement (`engagement_rate` de `placement_view_v2`)
- **Filtre de qualité** : ne garder que les placements dépassant la moyenne des likes sur la période
  - Calculer la moyenne des likes sur la période concernée
  - Ne retenir que les placements >= cette moyenne
- **Exclusion jeux-concours** : `comments_count / like_count > 0.5` = probable concours, exclu
- **Un seul placement par créateur** : `ROW_NUMBER() OVER (PARTITION BY creator_pseudonym ORDER BY engagement_rate DESC)`
- **Ne PAS filtrer par vues** (>500K vues etc.) : les posts Instagram ont `view_count=0`, seuls les Reels et YouTube ont des vues — ce filtre exclut injustement des créateurs importants
- **Ne PAS trop détailler la méthodologie dans l'article** : le sous-titre suffit (*"Classés par taux d'engagement, hors jeux-concours."*)

### Requête SQL type

```sql
WITH avg_likes AS (
  SELECT AVG(like_count) as avg_lc
  FROM placement_view_v2
  WHERE published_at >= 'YYYY-MM-01' AND published_at < 'YYYY-MM+1-01'
    AND platform_name IN ('Instagram', 'YouTube')
),
ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY creator_pseudonym ORDER BY engagement_rate DESC) as rn
  FROM placement_view_v2, avg_likes
  WHERE published_at >= 'YYYY-MM-01' AND published_at < 'YYYY-MM+1-01'
    AND like_count >= avg_likes.avg_lc
    AND (comments_count::float / NULLIF(like_count, 0)) <= 0.5
    AND platform_name IN ('Instagram', 'YouTube')
)
SELECT creator_pseudonym, company_names, engagement_rate, like_count, content_url, platform_name, published_at
FROM ranked WHERE rn = 1
ORDER BY engagement_rate DESC
LIMIT 10;
```

## Embeds

### Instagram (format complet obligatoire)

Utiliser le **format HTML complet** avec :
- `data-instgrm-captioned`
- `data-instgrm-permalink` avec `?utm_source=ig_embed&amp;utm_campaign=loading`
- `data-instgrm-version="14"`
- SVG du logo Instagram
- Placeholder divs (skeleton)
- Texte "Voir cette publication sur Instagram"

Ne PAS utiliser le format court `<blockquote class="instagram-media" data-instgrm-permalink="URL" data-instgrm-version="14"></blockquote>` — il ne rend pas correctement.

Ajouter en fin d'article : `<script async src="//www.instagram.com/embed.js"></script>`

### YouTube (iframe responsive)

```html
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
</div>
```

## CTA / Conclusion (uniforme entre tous les articles)

### Paragraphe méthodologie

```
Ce [baromètre/classement] a été réalisé grâce à **[Partenar](https://partenar.com)**, la plateforme qui analyse les partenariats entre créateurs et marques. [Stats spécifiques : nb partenariats, nb créateurs, période]. Les jeux-concours ont été exclus du classement afin de ne refléter que l'engagement organique.
```

### Paragraphe CTA (identique pour tous les articles)

```
Vous êtes un professionnel du secteur et vous souhaitez suivre les partenariats de votre marché, identifier les créateurs qui performent ou analyser la stratégie de vos concurrents ? Pendant que vous lisez ceci, de nouveaux partenariats se signent dans votre secteur. Ne passez pas à côté.

**[Essayer gratuitement Partenar →](https://app.partenar.com/register)**
```

## Format HTML (WordPress)

- Fichier `.html` = contenu body uniquement (pas de `<html>`, `<head>`, `<body>`)
- Pas de frontmatter YAML
- Conversions : `## h` → `<h2>`, `### h` → `<h3>`, `---` → `<hr />`, paragraphes → `<p>`, `**text**` → `<strong>`, `*text*` → `<em>`, `[text](url)` → `<a href="url" target="_blank" rel="noopener">`
- Les blocs HTML (embeds, iframes, scripts) passent tels quels

## Ton et style

- Professionnel mais accessible
- Phrases courtes et percutantes
- Chiffres mis en avant en **gras**
- Analyses concises (2-3 phrases par placement)
- Pas de langue de bois, aller droit au point
- Pas de détails techniques sur la méthodologie dans le corps de l'article
