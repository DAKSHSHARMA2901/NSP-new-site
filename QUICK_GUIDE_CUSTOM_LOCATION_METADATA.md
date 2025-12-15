# Quick Reference - Adding Custom Location Metadata

## File to Edit
`src/app/locations/[location]/layout.tsx`

## Steps to Add Custom Metadata

### 1. Find the customLocationMetadata object (around line 10)

### 2. Add your location following this format:

```typescript
const customLocationMetadata: Record<string, { title: string; description: string }> = {
  'luton-seo-agency': {
    title: 'Luton SEO Agency | Boost Rankings with NSP Global Services',
    description: 'NSP Global Services is a top SEO agency in Luton, delivering proven strategies to enhance visibility & grow your business online.',
  },
  'london-seo-agency': {
    title: 'London SEO Agency | #1 SEO Services in London',
    description: 'Top-rated London SEO agency driving results for UK businesses.',
  },
  'new-york-seo-agency': {
    title: 'New York SEO Agency | Expert SEO Services NYC',
    description: 'Premier NYC SEO agency helping businesses dominate search results.',
  },
  // Add more locations here...
}
```

### 3. Key Format Rules
- **Key must match URL exactly**: For `/locations/luton-seo-agency`, use `'luton-seo-agency'`
- **Title**: 50-60 characters recommended
- **Description**: 150-160 characters recommended
- **Include location name** in both title and description
- **Include brand** (NSP Global Services) in title or description

### 4. Test Your Changes
1. Restart dev server: `npm run dev`
2. Visit: `http://localhost:3000/locations/your-location`
3. View source (Ctrl+U)
4. Check `<title>`, `<meta name="description">`, and `<link rel="canonical">`

## Available Locations (120+)

All locations from `/locations/page.tsx` can have custom metadata:

### UK Cities
luton, london, manchester, birmingham, liverpool, bristol, edinburgh, leeds, glasgow, cardiff, sheffield, newcastle, nottingham, brighton, leicester, southampton, reading, oxford, cambridge, portsmouth, york, chester, bath, and 40+ more

### US Cities
new-york, los-angeles, chicago, houston, miami, san-francisco, boston, seattle, denver, austin, philadelphia, washington-DC, and 30+ more

### International
sydney, melbourne, toronto, vancouver, auckland, singapore, dubai, and 20+ more

## Examples

### High-Priority UK Locations
```typescript
'london-seo-agency': {
  title: 'London SEO Agency | #1 SEO Services in London UK',
  description: 'Award-winning London SEO agency. Expert strategies for UK businesses. Boost rankings & drive growth.',
},
'manchester-seo-agency': {
  title: 'Manchester SEO Agency | Expert SEO Services Manchester',
  description: 'Top Manchester SEO agency delivering exceptional results for North West businesses.',
},
'birmingham-seo-agency': {
  title: 'Birmingham SEO Agency | Professional SEO Birmingham',
  description: 'Leading Birmingham SEO services. Drive traffic & increase sales with proven strategies.',
},
```

### High-Priority US Locations
```typescript
'new-york-seo-agency': {
  title: 'New York SEO Agency | Top SEO Services NYC',
  description: 'Premier New York SEO agency. Dominate NYC search results with expert SEO strategies.',
},
'los-angeles-seo-agency': {
  title: 'Los Angeles SEO Agency | Expert SEO Services LA',
  description: 'Top-rated LA SEO agency. Drive growth for Southern California businesses.',
},
```

---

**For Full Documentation:** See `COMPLETE_METADATA_COVERAGE_REPORT.md`
