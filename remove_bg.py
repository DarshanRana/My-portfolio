from rembg import remove
from PIL import Image

input_path = 'e:/Backup/Portfolio/public/assets/profile.jpg'
output_path = 'e:/Backup/Portfolio/public/assets/profile_nobg.png'

print("Opening image...")
input_img = Image.open(input_path)

print("Removing background...")
output_img = remove(input_img)

print("Saving image...")
output_img.save(output_path)
print("Done!")
