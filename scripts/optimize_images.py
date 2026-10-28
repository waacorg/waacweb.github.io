#!/usr/bin/env python3
"""
Image Optimization Script for waacweb.github.io
Shrinks images in public/images to web-ready dimensions and reasonable file sizes,
drastically reducing web traffic while maintaining high visual quality on Retina screens.
"""

import os
import shutil
import subprocess
import sys
import tempfile

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES_DIR = os.path.join(BASE_DIR, "public", "images")

# Sensitive or brand assets that should not be touched
PRESERVED_FILES = {
    "waac_logo.png",
    "commen.png",
    "johnjoe.png",
}

def get_dimensions(filepath: str) -> tuple[int, int]:
    try:
        out = subprocess.check_output(
            ["sips", "-g", "pixelWidth", "-g", "pixelHeight", filepath],
            stderr=subprocess.DEVNULL,
        ).decode()
        w, h = 0, 0
        for line in out.splitlines():
            if "pixelWidth:" in line:
                w = int(line.split(":")[1].strip())
            elif "pixelHeight:" in line:
                h = int(line.split(":")[1].strip())
        return w, h
    except Exception:
        return 0, 0

def get_max_dimension(rel_path: str, filename: str) -> int:
    # Media folder
    if rel_path.startswith("media"):
        # Certificates or announcement banners
        if "Academician of the WORLD ACADEMY" in filename or "_ac" in filename or "_co" in filename:
            return 1000
        # Individual portrait avatars (displayed in cards ~180-220px, 600px is ~3x retina)
        return 600

    # News and Conference Photos (article width ~896px, 1200px provides crisp 2x retina display)
    if rel_path.startswith("news") or rel_path.startswith("Annual_Meeting"):
        return 1200

    # Root images
    return 1000

def optimize_file(filepath: str, rel_path: str) -> tuple[bool, int, int]:
    """
    Optimizes a single image in a temporary file.
    Returns (was_optimized, original_size, new_size).
    """
    filename = os.path.basename(filepath)
    if filename in PRESERVED_FILES or filename.startswith("."):
        size = os.path.getsize(filepath)
        return False, size, size

    ext = filename.lower().split(".")[-1]
    if ext not in ["jpg", "jpeg", "png"]:
        size = os.path.getsize(filepath)
        return False, size, size

    orig_size = os.path.getsize(filepath)
    max_dim = get_max_dimension(rel_path, filename)
    w, h = get_dimensions(filepath)

    if w == 0 or h == 0:
        return False, orig_size, orig_size

    # Check if anything needs modification
    needs_resize = max(w, h) > max_dim
    needs_jpg_recompress = ext in ["jpg", "jpeg"]
    needs_png_clean = ext == "png" and (needs_resize or orig_size > 300 * 1024)

    if not (needs_resize or needs_jpg_recompress or needs_png_clean):
        return False, orig_size, orig_size

    with tempfile.NamedTemporaryFile(suffix="." + ext, delete=False) as tmp:
        tmp_path = tmp.name

    try:
        shutil.copy2(filepath, tmp_path)

        if needs_resize:
            subprocess.check_call(
                ["sips", "-Z", str(max_dim), tmp_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )

        if ext in ["jpg", "jpeg"]:
            subprocess.check_call(
                ["sips", "-s", "formatOptions", "80", tmp_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
        elif ext == "png":
            subprocess.check_call(
                ["sips", "-s", "format", "png", tmp_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )

        new_size = os.path.getsize(tmp_path)

        # STRICT SAFETY: Only replace if strictly smaller than original
        if new_size < orig_size:
            shutil.copy2(tmp_path, filepath)
            return True, orig_size, new_size
        else:
            return False, orig_size, orig_size
    except Exception as e:
        print(f"Warning: Failed to optimize {filepath}: {e}", file=sys.stderr)
        return False, orig_size, orig_size
    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)

def main():
    if not os.path.exists(IMAGES_DIR):
        print(f"Images directory not found: {IMAGES_DIR}", file=sys.stderr)
        sys.exit(1)

    print(f"Scanning images in: {IMAGES_DIR}...")
    total_orig = 0
    total_new = 0
    optimized_count = 0
    kept_count = 0

    all_files = []
    for root, _, files in os.walk(IMAGES_DIR):
        for f in files:
            if not f.startswith("."):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, IMAGES_DIR)
                all_files.append((full_path, rel_path))

    total_files = len(all_files)
    print(f"Found {total_files} images. Processing...\n")

    for i, (full_path, rel_path) in enumerate(all_files, 1):
        modified, orig_sz, new_sz = optimize_file(full_path, rel_path)
        total_orig += orig_sz
        total_new += new_sz
        if modified:
            optimized_count += 1
            saved = orig_sz - new_sz
            pct = (saved / orig_sz) * 100
            print(f"[{i}/{total_files}] Optimized: {rel_path} ({orig_sz/1024:.0f}KB -> {new_sz/1024:.0f}KB, -{pct:.1f}%)")
        else:
            kept_count += 1

    saved_mb = (total_orig - total_new) / (1024 * 1024)
    orig_mb = total_orig / (1024 * 1024)
    new_mb = total_new / (1024 * 1024)
    pct_total = ((total_orig - total_new) / total_orig) * 100 if total_orig > 0 else 0

    print("\n" + "=" * 50)
    print("Optimization Complete!")
    print(f"Total images checked: {total_files}")
    print(f"Images shrunk:        {optimized_count}")
    print(f"Images kept as-is:    {kept_count}")
    print(f"Original total size:  {orig_mb:.2f} MB")
    print(f"Optimized total size: {new_mb:.2f} MB")
    print(f"Bandwidth saved:      {saved_mb:.2f} MB (-{pct_total:.1f}%)")
    print("=" * 50)

if __name__ == "__main__":
    main()

