import os
import shutil
from PIL import Image

def process_images():
    source_dirs = [
        "/Users/shreyasjadhav/Documents/College Work/drive-download-20260502T181516Z-3-001",
        "/Users/shreyasjadhav/Documents/College Work/drive-download-20260502T181611Z-3-001"
    ]
    target_dir = "/Users/shreyasjadhav/Documents/College Work/www.gpsspindles.net/images/gallery"
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    # Let's pick a few images with varying sizes as representatives
    # From folder 1
    files_1 = ["IMG_7867.JPG", "IMG_7868.JPG", "IMG_7876.JPG", "IMG_7878.JPG"]
    # From folder 2
    files_2 = ["IMG_5330.JPG", "IMG_5336.JPG", "IMG_5350.JPG", "IMG_5354.JPG"]
    
    all_files = [(source_dirs[0], f) for f in files_1] + [(source_dirs[1], f) for f in files_2]
    
    for idx, (s_dir, f) in enumerate(all_files):
        src = os.path.join(s_dir, f)
        if os.path.exists(src):
            try:
                img = Image.open(src)
                # Resize keeping aspect ratio, max width/height 800
                img.thumbnail((800, 800), Image.Resampling.LANCZOS)
                # Save as optimized JPEG
                dst = os.path.join(target_dir, f"gallery_{idx+1}.jpg")
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                img.save(dst, "JPEG", quality=85)
                print(f"Processed {f} -> {dst}")
            except Exception as e:
                print(f"Error processing {f}: {e}")
        else:
            print(f"File not found: {src}")

def copy_video():
    src_video = "/Users/shreyasjadhav/Documents/College Work/IMG_5140.MOV"
    target_video = "/Users/shreyasjadhav/Documents/College Work/www.gpsspindles.net/images/IMG_5140.MOV"
    if os.path.exists(src_video):
        shutil.copy2(src_video, target_video)
        print(f"Copied video to {target_video}")
    else:
        print("Video not found.")

if __name__ == "__main__":
    process_images()
    copy_video()
