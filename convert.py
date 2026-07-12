#!/usr/bin/env python3
import re
from pathlib import Path

PUBLIC = Path("public")
PAGES = Path("src/pages")
PAGES.mkdir(parents=True, exist_ok=True)

page_map = {
    "index.html": "/",
    "truck-repair.html": "/truck-repair/",
    "rebuilds.html": "/rebuilds/",
    "roadside-service.html": "/roadside-service/",
    "medium-duty.html": "/medium-duty/",
    "parking.html": "/parking/",
    "freight.html": "/freight/",
    "fleet-service.html": "/fleet-service/",
    "about.html": "/about/",
    "contact.html": "/contact/",
    "privacy.html": "/privacy/",
    "terms.html": "/terms/",
    "disclaimer.html": "/disclaimer/",
    "parking-terms.html": "/parking-terms/",
    "sms-consent.html": "/sms-consent/",
}

include_forms_js_pages = {
    "contact",
    "roadside-service",
    "parking",
    "freight",
}

use_netlify_identity = {"index"}  # only add identity script to homepage

for file in sorted(PUBLIC.glob("*.html")):
    html = file.read_text(encoding="utf-8")

    title_match = re.search(r"<title>(.*?)</title>", html)
    title = title_match.group(1).strip() if title_match else "BOSSEN INC"

    desc_match = re.search(r'<meta name="description" content="(.*?)">', html)
    description = desc_match.group(1).strip() if desc_match else ""

    main_match = re.search(r'<main id="main">(.*?)</main>', html, re.DOTALL)
    if not main_match:
        print(f"No main content in {file.name}")
        continue
    content = main_match.group(1).strip()

    # Convert internal .html links to directory-style
    content = re.sub(r'href="index\.html"', 'href="/"', content)
    content = re.sub(r'href="([^"/]+)\.html"', lambda m: f'href="{page_map.get(m.group(1)+".html", "/"+m.group(1)+"/")}"', content)

    # Convert asset paths to absolute
    content = re.sub(r'(src|href)="assets/', r'\1="/assets/', content)

    # Convert tel placeholder to dynamic template? Keep as is for now.

    slug = file.stem
    permalink = page_map.get(file.name, f"/{slug}/")
    canonical = f"https://bosseninc.com{permalink}"

    frontmatter = f"""---
layout: layout
permalink: {permalink}
title: {title}
description: {description}
canonical: {canonical}
"""
    if slug in include_forms_js_pages:
        frontmatter += "include_forms_js: true\n"
    if slug in use_netlify_identity:
        frontmatter += "use_netlify_identity: true\n"
    frontmatter += "---\n\n"

    md_file = PAGES / f"{slug}.md"
    md_file.write_text(frontmatter + content, encoding="utf-8")
    print(f"Wrote {md_file}")

print("Done.")
