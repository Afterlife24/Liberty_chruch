# Image Dimensions Guide

This document outlines the required image dimensions and aspect ratios for all graphics used throughout the church website.

## Main Scrolling Sections

### "Be A Part Of The Story" Section
- **Aspect Ratio**: 16:9 (horizontal)
- **Recommended Dimensions**: 
  - Standard: 800px × 450px
  - High-res (2x): 1600px × 900px
  - Retina (3x): 2400px × 1350px
- **Format**: JPG or PNG
- **File Size**: Aim for under 200KB per image for optimal loading
- **Number of Images**: 6 tiles

**Current tiles:**
1. Join A Group
2. Get Involved
3. Worship With Us
4. Coffee House
5. Global Impact (links to /exploring-faith)
6. The Life Of Liberty

### "Growing Disciples" Section
- **Aspect Ratio**: 16:9 (horizontal)
- **Recommended Dimensions**: 
  - Standard: 800px × 450px
  - High-res (2x): 1600px × 900px
  - Retina (3x): 2400px × 1350px
- **Format**: JPG or PNG
- **File Size**: Aim for under 200KB per image for optimal loading
- **Number of Images**: 4 image tiles + 2 dark text cards

**Current image tiles:**
1. Sunday Messages
2. Teaching Service
3. More Resources
4. Help Finance Our Work

**Dark text cards (no images needed):**
- Prayer - "Can We Pray For You?"
- Praise - "How Is God Working?" (with "give thanks" accent)

## Other Sections

### Hero Section
- **Aspect Ratio**: 21:9 or similar ultra-wide
- **Recommended Dimensions**: 
  - Standard: 1920px × 800px
  - High-res: 2560px × 1070px
- **Format**: JPG (for photo backgrounds)
- **File Size**: Under 500KB
- **Current**: Uses `/public/Screenshot_2026-06-04_000211.png`

### "New Here?" Section Cards
- **Aspect Ratio**: 1:1 (square)
- **Recommended Dimensions**: 
  - Standard: 400px × 400px
  - High-res: 800px × 800px
- **Format**: JPG or PNG
- **File Size**: Under 150KB per image
- **Number of Images**: 4 tiles

**Current tiles:**
1. Sunday Services
2. Get Connected
3. Join A Group
4. Volunteer

### Events Section
- **Aspect Ratio**: 3:2 (landscape)
- **Recommended Dimensions**: 
  - Standard: 600px × 400px
  - High-res: 1200px × 800px
- **Format**: JPG or PNG
- **File Size**: Under 200KB per image
- **Number of Images**: Varies based on events

### Internal Content Pages (e.g., Exploring Faith)

#### Hero Banner
- **Aspect Ratio**: 21:9 or 16:9
- **Recommended Dimensions**: 
  - Standard: 1600px × 900px (16:9)
  - Wide: 1920px × 800px (21:9)
- **Format**: JPG
- **File Size**: Under 400KB

## File Organization

Store images in the `/public` folder with descriptive names:

```
/public
  /hero
    - main-hero.jpg
  /be-part-story
    - join-group.jpg
    - get-involved.jpg
    - worship.jpg
    - coffee-house.jpg
    - global-impact.jpg
    - life-of-liberty.jpg
  /growing-disciples
    - sunday-messages.jpg
    - teaching-service.jpg
    - more-resources.jpg
    - help-finance.jpg
  /new-here
    - sunday-services.jpg
    - get-connected.jpg
    - join-group.jpg
    - volunteer.jpg
  /content-pages
    - exploring-faith-hero.jpg
    - [other-page-names].jpg
```

## Image Optimization Tips

1. **Compress all images** before uploading using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (macOS)
   - Squoosh (https://squoosh.app)

2. **Use appropriate formats**:
   - JPG for photographs
   - PNG for graphics with transparency
   - WebP for modern browsers (with JPG fallback)

3. **Provide multiple resolutions** for different screen sizes using srcset

4. **Use descriptive alt text** for accessibility

5. **Lazy load** images below the fold for better performance

## Technical Implementation

The 16:9 tiles in the scrolling sections are implemented with:
- `aspect-video` Tailwind class (16:9 ratio)
- `min-w-[calc(33.333%-0.5rem)]` to show exactly 3 tiles
- Smooth horizontal scrolling with hidden scrollbars
- Hover effects with scale transforms
- Gradient overlays for text readability

## Notes

- All images should be properly licensed for use
- Consider accessibility: ensure text over images has sufficient contrast
- Test images on both light and dark mode if implementing theme switching
- The Netflix-style scroll shows 3 tiles at a time with smooth horizontal scrolling
- Navigation arrows appear on hover for desktop users
- Mobile users can swipe to scroll through tiles
