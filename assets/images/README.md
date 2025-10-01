# Profile Image Setup

## How to Add Your Profile Photo

### Option 1: Local Image (Recommended ✅)

1. **Download your photo** from Google Photos:
   - Open the photo: https://photos.google.com/photo/AF1QipOAGuzy7HtW9x-SCS9euDIqMaYOlI4sqxi0TbQw
   - Click the three dots (⋮) menu
   - Select "Download"
   - Save as `profile.jpg` (or any name you prefer)

2. **Place the image here**:
   ```
   assets/images/profile.jpg
   ```

3. **Update the slide**:
   Edit `slides/03-about-me.md` and uncomment line 9:
   ```html
   <img src="assets/images/profile.jpg" alt="Srdjan Strbanovic" class="avatar-image" />
   ```
   Comment out or remove line 12 (the URL version)

### Option 2: Use Direct URL from Your Website

If you already have your photo hosted on your website (https://srdjan.github.io/):

1. Upload the photo to your website as `avatar.jpg`
2. The slide will automatically use it from: `https://srdjan.github.io/avatar.jpg`

### Option 3: Convert Google Photos Link

To get a direct link from Google Photos:

1. Open your photo in Google Photos
2. Click Share → Create link
3. Copy the link
4. Use a service like [Google Photos Direct Link Generator](https://www.labnol.org/embed/google/photos/)
5. Get the direct image URL
6. Replace line 12 in `slides/03-about-me.md` with the direct URL

### Current Setup

Currently configured to:
- ✅ Try loading from `https://srdjan.github.io/avatar.jpg`
- ✅ Fallback to initials "SS" if image fails to load
- ✅ Shows professional gradient background with colored border

### Image Requirements

**Recommended specs:**
- Format: JPG or PNG
- Size: 400x400px (minimum)
- Aspect ratio: 1:1 (square)
- File size: < 200KB

**The image will be:**
- Displayed at 120x120px
- Cropped to circle
- Animated on slide entrance
- Surrounded by rotating rainbow glow (once)

---

**Quick Test:**

After adding your image, run:
```bash
deno task dev
# Navigate to slide 3 to see your photo
```
