#!/usr/bin/env python3
"""
Convert photographic PNG images in public/images to JPEG,
and safely update all references across JSON, TSX, TS, HTML, and Markdown files.
Brand logo (waac_logo.png) is preserved.
"""

import os
import subprocess
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images")

PRESERVE = {
    "waac_logo.png",
    "commen.png",
    "johnjoe.png",
}

IGNORED_DIRS = {".git", "node_modules", ".next", "out"}

def find_pngs_to_convert():
    pngs = []
    for root, dirs, files in os.walk(IMAGES_DIR):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
        for f in files:
            if f.lower().endswith(".png") and f not in PRESERVE:
                pngs.append(os.path.join(root, f))
    return pngs

def find_code_files():
    code_files = []
    for root, dirs, files in os.walk(BASE_DIR):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
        for f in files:
            if f.endswith((".json", ".ts", ".tsx", ".html", ".md", ".js", ".jsx")):
                code_files.append(os.path.join(root, f))
    return code_files

def update_references(replacements):
    code_files = find_code_files()
    updated_files_count = 0

    for cf in code_files:
        try:
            with open(cf, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            for old_ref, new_ref in replacements:
                if old_ref in new_content:
                    new_content = new_content.replace(old_ref, new_ref)
                old_no_slash = old_ref.lstrip("/")
                new_no_slash = new_ref.lstrip("/")
                if old_no_slash in new_content:
                    new_content = new_content.replace(old_no_slash, new_no_slash)

            if new_content != content:
                with open(cf, "w", encoding="utf-8") as f:
                    f.write(new_content)
                updated_files_count += 1
        except Exception as e:
            print(f"Error updating {cf}: {e}", file=sys.stderr)

    return updated_files_count

def main():
    # Detect converted files from git status if already converted
    out = subprocess.check_output(["git", "status", "--short"]).decode()
    replacements = []
    
    # 1. First convert any remaining PNGs
    pngs = find_pngs_to_convert()
    if pngs:
        print(f"Found {len(pngs)} PNG images to convert to JPEG...")
        for png_path in pngs:
            jpg_path = os.path.splitext(png_path)[0] + ".jpg"
            try:
                subprocess.check_call(
                    ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "80", png_path, "--out", jpg_path],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                )
                if os.path.exists(jpg_path) and os.path.getsize(jpg_path) > 0:
                    os.remove(png_path)
                    rel_png = "/" + os.path.relpath(png_path, PUBLIC_DIR)
                    rel_jpg = "/" + os.path.relpath(jpg_path, PUBLIC_DIR)
                    replacements.append((rel_png, rel_jpg))
            except Exception as e:
                print(f"Error converting {png_path}: {e}", file=sys.stderr)

    # 2. Also pick up any deleted PNGs that have a corresponding .jpg
    for line in out.splitlines():
        if "D public/images/" in line:
            raw = line.split("public/images/")[1].strip().strip('"')
            if raw.endswith(".png"):
                png_rel = "/images/" + raw
                jpg_rel = "/images/" + os.path.splitext(raw)[0] + ".jpg"
                jpg_full = os.path.join(PUBLIC_DIR, jpg_rel.lstrip("/"))
                if os.path.exists(jpg_full):
                    replacements.append((png_rel, jpg_rel))

    print(f"Total replacements to apply: {len(replacements)}")

    # Update references across codebase
    updated = update_references(replacements)
    print(f"Updated references in {updated} files.")

if __name__ == "__main__":
    main()

