/* =========================================================
   ICON PACK GENERATOR — script.js
   Full featured, client-side only
   ========================================================= */

'use strict';

/* ══════════════════════════════════════════════
   0. ICON DATABASE
   ══════════════════════════════════════════════ */
const ICONS = (() => {
  // SVG path data: [name, category, library, svgInnerHTML]
  const lucide = (name, cat, paths) => ({ name, id: name.toLowerCase().replace(/\s+/g,'-'), category: cat, library: 'lucide', svg: paths });
  const hero   = (name, cat, paths) => ({ name, id: 'h-'+name.toLowerCase().replace(/\s+/g,'-'), category: cat, library: 'heroicons', svg: paths });
  const mat    = (name, cat, paths) => ({ name, id: 'm-'+name.toLowerCase().replace(/\s+/g,'-'), category: cat, library: 'material', svg: paths });

  const SVG_DATA = [
    /* ─── UI ─── */
    lucide('Home','ui',`<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`),
    lucide('Settings','ui',`<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34 3.93 3.93M12 20v-2M12 6V4"/>`),
    lucide('User','ui',`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
    lucide('Bell','ui',`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`),
    lucide('Search','ui',`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
    lucide('Menu','ui',`<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>`),
    lucide('X','ui',`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),
    lucide('Check','ui',`<polyline points="20 6 9 17 4 12"/>`),
    lucide('Plus','ui',`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),
    lucide('Minus','ui',`<line x1="5" y1="12" x2="19" y2="12"/>`),
    lucide('Eye','ui',`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`),
    lucide('Eye Off','ui',`<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`),
    lucide('Lock','ui',`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`),
    lucide('Unlock','ui',`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>`),
    lucide('Star','ui',`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`),
    lucide('Heart','ui',`<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`),
    lucide('Bookmark','ui',`<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>`),
    lucide('Filter','ui',`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`),
    lucide('Sliders','ui',`<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>`),
    lucide('Grid','ui',`<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`),
    lucide('List','ui',`<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>`),
    lucide('MoreHorizontal','ui',`<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>`),
    lucide('MoreVertical','ui',`<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>`),
    lucide('Share2','ui',`<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>`),
    lucide('Trash2','ui',`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>`),
    lucide('Edit','ui',`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
    lucide('Copy','ui',`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`),
    lucide('Clipboard','ui',`<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>`),
    lucide('Info','ui',`<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`),
    lucide('AlertCircle','ui',`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`),
    lucide('CheckCircle','ui',`<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`),
    lucide('XCircle','ui',`<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`),

    /* ─── ARROWS ─── */
    lucide('Arrow Up','arrows',`<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>`),
    lucide('Arrow Down','arrows',`<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>`),
    lucide('Arrow Left','arrows',`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`),
    lucide('Arrow Right','arrows',`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`),
    lucide('ChevronUp','arrows',`<polyline points="18 15 12 9 6 15"/>`),
    lucide('ChevronDown','arrows',`<polyline points="6 9 12 15 18 9"/>`),
    lucide('ChevronLeft','arrows',`<polyline points="15 18 9 12 15 6"/>`),
    lucide('ChevronRight','arrows',`<polyline points="9 18 15 12 9 6"/>`),
    lucide('ChevronsUp','arrows',`<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>`),
    lucide('ChevronsDown','arrows',`<polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/>`),
    lucide('Rotate CW','arrows',`<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>`),
    lucide('Rotate CCW','arrows',`<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>`),
    lucide('Move','arrows',`<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><polyline points="19 9 22 12 19 15"/><polyline points="15 19 12 22 9 19"/>`),
    lucide('Repeat','arrows',`<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>`),
    lucide('Shuffle','arrows',`<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>`),
    lucide('Corner Down Right','arrows',`<polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>`),
    lucide('External Link','arrows',`<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`),

    /* ─── SOCIAL ─── */
    lucide('Twitter','social',`<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>`),
    lucide('Github','social',`<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>`),
    lucide('Linkedin','social',`<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`),
    lucide('Instagram','social',`<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>`),
    lucide('Facebook','social',`<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`),
    lucide('Youtube','social',`<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>`),
    lucide('Slack','social',`<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8H3.5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>`),
    lucide('Discord','social',`<circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"/>`),

    /* ─── BUSINESS ─── */
    lucide('Briefcase','business',`<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`),
    lucide('BarChart2','business',`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`),
    lucide('TrendingUp','business',`<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`),
    lucide('PieChart','business',`<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>`),
    lucide('DollarSign','business',`<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`),
    lucide('CreditCard','business',`<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>`),
    lucide('Users','business',`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`),
    lucide('Calendar','business',`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`),
    lucide('Mail','business',`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`),
    lucide('Phone','business',`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2.8h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`),
    lucide('Globe','business',`<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`),
    lucide('Map Pin','business',`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`),
    lucide('Clock','business',`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`),
    lucide('Printer','business',`<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>`),

    /* ─── FILES ─── */
    lucide('File','files',`<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>`),
    lucide('Folder','files',`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>`),
    lucide('Folder Open','files',`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M2 10h20"/>`),
    lucide('Upload','files',`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`),
    lucide('Download','files',`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`),
    lucide('Archive','files',`<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>`),
    lucide('Paperclip','files',`<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>`),
    lucide('Image','files',`<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`),
    lucide('Film','files',`<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>`),
    lucide('Music','files',`<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`),

    /* ─── DEVICES ─── */
    lucide('Smartphone','devices',`<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`),
    lucide('Tablet','devices',`<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`),
    lucide('Monitor','devices',`<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`),
    lucide('Laptop','devices',`<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>`),
    lucide('Cpu','devices',`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`),
    lucide('Battery','devices',`<rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/>`),
    lucide('Wifi','devices',`<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>`),
    lucide('Bluetooth','devices',`<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>`),
    lucide('Camera','devices',`<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>`),
    lucide('Headphones','devices',`<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>`),

    /* ─── CODING ─── */
    lucide('Code','coding',`<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`),
    lucide('Code2','coding',`<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`),
    lucide('Terminal','coding',`<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`),
    lucide('GitBranch','coding',`<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`),
    lucide('GitMerge','coding',`<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>`),
    lucide('GitCommit','coding',`<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>`),
    lucide('Package','coding',`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`),
    lucide('Database','coding',`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`),
    lucide('Server','coding',`<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`),
    lucide('Cloud','coding',`<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>`),
    lucide('Zap','coding',`<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`),

    /* ─── E-COMMERCE ─── */
    lucide('ShoppingCart','ecommerce',`<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>`),
    lucide('ShoppingBag','ecommerce',`<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>`),
    lucide('Tag','ecommerce',`<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>`),
    lucide('Gift','ecommerce',`<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>`),
    lucide('Package2','ecommerce',`<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/>`),
    lucide('Truck','ecommerce',`<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`),
    lucide('Percent','ecommerce',`<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>`),
    lucide('Receipt','ecommerce',`<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8H8"/><path d="M16 12H8"/><path d="M12 16H8"/>`),
    lucide('Wallet','ecommerce',`<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>`),

    /* ─── WEATHER ─── */
    lucide('Sun','weather',`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`),
    lucide('Moon','weather',`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`),
    lucide('Cloud Rain','weather',`<line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>`),
    lucide('Cloud Snow','weather',`<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/>`),
    lucide('Wind','weather',`<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>`),
    lucide('Thermometer','weather',`<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>`),
    lucide('Umbrella','weather',`<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>`),
    lucide('Cloudy','weather',`<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`),
    lucide('Sunrise','weather',`<path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/>`),
    lucide('Tornado','weather',`<path d="M21 4H3"/><path d="M18 8H6"/><path d="M19 12H9"/><path d="M16 16h-6"/><path d="M11 20H9"/>`),

    /* ─── HEROICONS EXTRAS ─── */
    hero('Academic Cap','ui',`<path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>`),
    hero('Adjustments','ui',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>`),
    hero('Annotation','ui',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>`),
    hero('Badge Check','ui',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>`),
    hero('Beaker','coding',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>`),
    hero('Chart Bar','business',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`),
    hero('Collection','files',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>`),
    hero('Color Swatch','ui',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>`),
    hero('Cube','coding',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>`),
    hero('Desktop Computer','devices',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`),
    hero('Document Text','files',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`),
    hero('Fire','weather',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>`),
    hero('Lightning Bolt','weather',`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`),

    /* ─── MATERIAL EXTRAS ─── */
    mat('Notifications','ui',`<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>`),
    mat('Dashboard','ui',`<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>`),
    mat('Explore','ui',`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`),
    mat('Insights','business',`<path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"/>`),
    mat('Inventory','ecommerce',`<path d="M20 2H4v2l8 4.5L20 4V2zM3 6v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6l-9 5-9-5z"/>`),
    mat('Science','coding',`<path d="M6.6 10.8l1.4-2.6V2h4v6.2l1.4 2.6C11.37 10.27 10.54 10 10 10c-.55 0-1.38.27-3.4.8zm11.2 9.2H6.2C5.27 20 5 19.1 5 18.5c0-1.55 1.83-2.7 4.07-3.42L10 13.35l.93 1.73C13.17 15.8 15 16.95 15 18.5c0 .6-.27 1.5-1.2 1.5z"/><path d="M7.6 6H8V2H7l.6 4zm8.8 0L17 2h-1v4h-.4l.8-4z"/>`),

  ];
  return SVG_DATA;
})();

/* ══════════════════════════════════════════════
   1. STATE
   ══════════════════════════════════════════════ */
const state = {
  allIcons: [...ICONS],
  filteredIcons: [...ICONS],
  selectedIds: new Set(),
  favoriteIds: new Set(JSON.parse(localStorage.getItem('ipg_favorites') || '[]')),
  customIcons: JSON.parse(localStorage.getItem('ipg_custom') || '[]'),
  recentDownloads: JSON.parse(localStorage.getItem('ipg_recent') || '[]'),

  // filters
  searchQuery: '',
  activeLib: 'all',
  activeCat: 'all',

  // customizer
  colorMode: 'solid',       // 'solid' | 'gradient'
  iconColor: '#1a1a2e',
  gradStart: '#3b82f6',
  gradEnd: '#8b5cf6',
  gradDir: 'horizontal',
  bgType: 'transparent',    // 'transparent' | 'solid' | 'rounded' | 'circle'
  bgColor: '#3b82f6',
  size: 48,
  strokeWidth: 2,
  padding: 0,
  format: 'svg',
  packName: 'my-icon-pack',
  previewZoom: 1,
  previewBg: 'light',
  theme: localStorage.getItem('ipg_theme') || 'light',

  // pagination
  page: 0,
  perPage: 48,

  // drag
  sortable: null,
};

/* ══════════════════════════════════════════════
   2. DOM REFS
   ══════════════════════════════════════════════ */
const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

const dom = {
  html: document.documentElement,
  themeToggle: $('#themeToggle'),
  navHamburger: $('#navHamburger'),
  navMobile: $('#navMobile'),
  navFavBadge: $('#navFavBadge'),

  searchInput: $('#searchInput'),
  searchClear: $('#searchClear'),
  clearSearchBtn: $('#clearSearchBtn'),
  libraryTabs: $('#libraryTabs'),
  categoryPills: $('#categoryPills'),

  uploadZone: $('#uploadZone'),
  uploadTrigger: $('#uploadTrigger'),
  svgUpload: $('#svgUpload'),

  iconGrid: $('#iconGrid'),
  iconGridEmpty: $('#iconGridEmpty'),
  emptyQuery: $('#emptyQuery'),
  loadMoreWrap: $('#loadMoreWrap'),
  loadMoreBtn: $('#loadMoreBtn'),

  selectedCount: $('#selectedCount'),
  selectAllBtn: $('#selectAllBtn'),
  clearAllBtn: $('#clearAllBtn'),

  // customizer
  colorModeTabs: $$('.color-mode-tab'),
  solidColorPanel: $('#solidColorPanel'),
  gradientColorPanel: $('#gradientColorPanel'),
  colorPresets: $$('.color-preset'),
  colorPicker: $('#colorPicker'),
  colorHex: $('#colorHex'),
  gradStart: $('#gradStart'),
  gradEnd: $('#gradEnd'),
  gradDir: $('#gradDir'),

  bgTypeBtns: $$('.bg-type-btn'),
  bgColorRow: $('#bgColorRow'),
  bgColorPicker: $('#bgColorPicker'),
  bgColorHex: $('#bgColorHex'),

  sizeSlider: $('#sizeSlider'),
  sizeVal: $('#sizeVal'),
  sizeInput: $('#sizeInput'),
  sizePresets: $$('.size-preset'),

  strokeSlider: $('#strokeSlider'),
  strokeVal: $('#strokeVal'),
  strokeInput: $('#strokeInput'),

  paddingSlider: $('#paddingSlider'),
  paddingVal: $('#paddingVal'),
  paddingInput: $('#paddingInput'),

  formatBtns: $$('.format-btn'),

  packInfoCount: $('#packInfoCount'),
  packInfoFormat: $('#packInfoFormat'),
  packInfoSize: $('#packInfoSize'),
  packName: $('#packName'),

  sidebarDownloadBtn: $('#sidebarDownloadBtn'),
  mainDownloadBtn: $('#mainDownloadBtn'),

  previewCanvas: $('#previewCanvas'),
  previewGrid: $('#previewGrid'),
  previewEmpty: $('#previewEmpty'),
  previewZoom: $('#previewZoom'),
  previewBgBtns: $$('.preview-bg-btn'),

  dlSummaryCount: $('#dlSummaryCount'),
  dlSummaryFormat: $('#dlSummaryFormat'),
  dlSummaryDate: $('#dlSummaryDate'),
  dlSummaryName: $('#dlSummaryName'),
  zipFolderName: $('#zipFolderName'),
  zipFileList: $('#zipFileList'),
  recentList: $('#recentList'),

  svgModal: $('#svgModal'),
  modalTitle: $('#modalTitle'),
  svgCodeBlock: $('#svgCodeBlock'),
  copySvgBtn: $('#copySvgBtn'),
  modalClose: $('#modalClose'),
  modalCloseBtn2: $('#modalCloseBtn2'),

  progressOverlay: $('#progressOverlay'),
  progressTitle: $('#progressTitle'),
  progressStatus: $('#progressStatus'),
  progressBar: $('#progressBar'),
  progressPct: $('#progressPct'),

  heroIconGrid: $('#heroIconGrid'),
  toastContainer: $('#toastContainer'),
  resetCustomizer: $('#resetCustomizer'),
  navbar: $('#navbar'),
};

/* ══════════════════════════════════════════════
   3. INIT
   ══════════════════════════════════════════════ */
function init() {
  applyTheme(state.theme);
  buildHeroGrid();
  mergeCustomIcons();
  applyFilter();
  renderRecentDownloads();
  updateFavBadge();
  bindEvents();
  updateSliderTrack(dom.sizeSlider, 16, 256);
  updateSliderTrack(dom.strokeSlider, 0.5, 5);
  updateSliderTrack(dom.paddingSlider, 0, 50);
  updateDownloadSummary();
  dom.dlSummaryDate.textContent = new Date().toLocaleDateString();
}

/* ══════════════════════════════════════════════
   4. THEME
   ══════════════════════════════════════════════ */
function applyTheme(t) {
  state.theme = t;
  dom.html.setAttribute('data-theme', t);
  localStorage.setItem('ipg_theme', t);
}

/* ══════════════════════════════════════════════
   5. HERO GRID
   ══════════════════════════════════════════════ */
function buildHeroGrid() {
  const picks = ICONS.slice(0, 30);
  dom.heroIconGrid.innerHTML = picks.map((ic, i) => `
    <div class="hero-icon-item" style="animation-delay:${i * 40}ms" title="${ic.name}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${ic.svg}
      </svg>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   6. FILTER & RENDER ICONS
   ══════════════════════════════════════════════ */
function mergeCustomIcons() {
  const all = [...ICONS, ...state.customIcons];
  state.allIcons = all;
}

function applyFilter() {
  const q = state.searchQuery.toLowerCase().trim();
  const lib = state.activeLib;
  const cat = state.activeCat;

  let base = state.allIcons;

  if (lib === 'favorites') {
    base = base.filter(ic => state.favoriteIds.has(ic.id));
  } else if (lib === 'custom') {
    base = state.customIcons;
  } else if (lib !== 'all') {
    base = base.filter(ic => ic.library === lib);
  }

  if (cat !== 'all') {
    base = base.filter(ic => ic.category === cat);
  }

  if (q) {
    base = base.filter(ic =>
      ic.name.toLowerCase().includes(q) ||
      ic.category.toLowerCase().includes(q) ||
      ic.library.toLowerCase().includes(q)
    );
  }

  state.filteredIcons = base;
  state.page = 0;
  renderIconGrid(true);
  dom.searchClear.classList.toggle('visible', q.length > 0);
}

function renderIconGrid(reset = false) {
  const start = state.page * state.perPage;
  const end   = start + state.perPage;
  const slice = state.filteredIcons.slice(start, end);

  if (reset) dom.iconGrid.innerHTML = '';

  if (state.filteredIcons.length === 0) {
    dom.iconGridEmpty.hidden = false;
    dom.emptyQuery.textContent = state.searchQuery || 'this filter';
    dom.loadMoreWrap.style.display = 'none';
    return;
  }

  dom.iconGridEmpty.hidden = true;

  const frag = document.createDocumentFragment();
  slice.forEach(ic => {
    const el = buildIconCard(ic);
    frag.appendChild(el);
  });
  dom.iconGrid.appendChild(frag);

  const hasMore = end < state.filteredIcons.length;
  dom.loadMoreWrap.style.display = hasMore ? 'flex' : 'none';
}

function buildIconCard(ic) {
  const div = document.createElement('div');
  div.className = 'icon-card' +
    (state.selectedIds.has(ic.id) ? ' selected' : '') +
    (state.favoriteIds.has(ic.id) ? ' favorited' : '');
  div.dataset.id = ic.id;
  div.setAttribute('role', 'listitem');
  div.title = ic.name;

  const libLabel = { lucide: 'Lucide', heroicons: 'Hero', material: 'MUI', custom: 'Custom' }[ic.library] || ic.library;

  div.innerHTML = `
    <div class="icon-check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
    <div class="icon-fav-star" data-action="fav" title="Favorite">
      <svg viewBox="0 0 24 24" fill="${state.favoriteIds.has(ic.id) ? '#f59e0b' : 'none'}" stroke="${state.favoriteIds.has(ic.id) ? '#f59e0b' : 'currentColor'}" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </div>
    <div class="icon-preview">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${state.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
        ${ic.svg}
      </svg>
    </div>
    <div class="icon-name">${ic.name}</div>
    <div class="icon-lib-badge">${libLabel}</div>
    <div class="icon-actions">
      <button class="icon-action-btn" data-action="code" title="View SVG Code">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </button>
      <button class="icon-action-btn" data-action="copy" title="Copy SVG">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      </button>
    </div>
  `;

  div.addEventListener('click', e => {
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'fav') { toggleFavorite(ic.id); return; }
    if (action === 'code') { showSVGCode(ic); return; }
    if (action === 'copy') { copyIconSVG(ic); return; }
    toggleSelect(ic.id);
  });

  return div;
}

function toggleSelect(id) {
  if (state.selectedIds.has(id)) {
    state.selectedIds.delete(id);
  } else {
    state.selectedIds.add(id);
  }
  updateSelectedUI(id);
  updatePackInfo();
  renderPreview();
  updateDownloadButtons();
  updateDownloadSummary();
  updateZipTree();
}

function updateSelectedUI(id) {
  const card = dom.iconGrid.querySelector(`[data-id="${id}"]`);
  if (card) {
    card.classList.toggle('selected', state.selectedIds.has(id));
  }
}

function toggleFavorite(id) {
  if (state.favoriteIds.has(id)) {
    state.favoriteIds.delete(id);
    showToast(`Removed from favorites`, 'info');
  } else {
    state.favoriteIds.add(id);
    showToast(`Added to favorites ⭐`, 'success');
  }
  localStorage.setItem('ipg_favorites', JSON.stringify([...state.favoriteIds]));
  updateFavBadge();
  // update card
  const card = dom.iconGrid.querySelector(`[data-id="${id}"]`);
  if (card) {
    card.classList.toggle('favorited', state.favoriteIds.has(id));
    const starSvg = card.querySelector('.icon-fav-star svg');
    if (starSvg) {
      const fav = state.favoriteIds.has(id);
      starSvg.setAttribute('fill', fav ? '#f59e0b' : 'none');
      starSvg.setAttribute('stroke', fav ? '#f59e0b' : 'currentColor');
    }
  }
}

function updateFavBadge() {
  const count = state.favoriteIds.size;
  dom.navFavBadge.textContent = count > 0 ? count : '';
  dom.navFavBadge.style.display = count > 0 ? 'flex' : 'none';
}

/* ══════════════════════════════════════════════
   7. PACK INFO
   ══════════════════════════════════════════════ */
function updatePackInfo() {
  const count = state.selectedIds.size;
  dom.selectedCount.textContent = count;
  dom.packInfoCount.textContent = `${count} icon${count !== 1 ? 's' : ''}`;
  dom.packInfoFormat.textContent = state.format.toUpperCase();

  // Rough size estimate
  let estSize = 0;
  if (state.format === 'svg') estSize = count * 0.8;       // ~0.8 KB per SVG
  else if (state.format === 'png') estSize = count * (state.size * state.size * 0.003 / 1024);
  else estSize = count * (state.size * state.size * 0.002 / 1024);
  const kb = Math.max(0.1, estSize);
  dom.packInfoSize.textContent = kb < 1024 ? `~${kb.toFixed(1)} KB` : `~${(kb/1024).toFixed(1)} MB`;
}

function updateDownloadSummary() {
  const count = state.selectedIds.size;
  dom.dlSummaryCount.textContent = count;
  dom.dlSummaryFormat.textContent = state.format.toUpperCase();
  dom.dlSummaryDate.textContent = new Date().toLocaleDateString();
  dom.dlSummaryName.textContent = state.packName || 'my-icon-pack';
}

function updateZipTree() {
  const selected = getSelectedIconObjects();
  dom.zipFolderName.textContent = `${state.packName || 'my-icon-pack'}/`;
  if (selected.length === 0) {
    dom.zipFileList.innerHTML = `<div class="zip-file">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
      Select icons to see files…
    </div>`;
    return;
  }
  const files = selected.slice(0, 8).map(ic => `
    <div class="zip-file">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
      ${ic.id}.${state.format}
    </div>
  `).join('');
  const extra = selected.length > 8 ? `<div class="zip-file" style="color:var(--text3)">… and ${selected.length - 8} more files</div>` : '';
  const readme = `<div class="zip-file"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg> README.txt</div>`;
  dom.zipFileList.innerHTML = files + extra + readme;
}

function updateDownloadButtons() {
  const has = state.selectedIds.size > 0;
  dom.sidebarDownloadBtn.disabled = !has;
  dom.mainDownloadBtn.disabled = !has;
}

/* ══════════════════════════════════════════════
   8. LIVE PREVIEW
   ══════════════════════════════════════════════ */
function renderPreview() {
  const selected = getSelectedIconObjects();

  if (selected.length === 0) {
    dom.previewEmpty.style.display = 'flex';
    dom.previewGrid.style.display = 'none';
    dom.previewGrid.innerHTML = '';
    return;
  }

  dom.previewEmpty.style.display = 'none';
  dom.previewGrid.style.display = 'flex';

  dom.previewGrid.innerHTML = selected.map(ic => {
    const iconSVG = buildStyledSVG(ic);
    const wrapStyle = buildWrapStyle();
    return `
      <div class="preview-item" data-id="${ic.id}" title="${ic.name}">
        <div class="preview-icon-wrap" style="${wrapStyle}" data-previewwrap>
          ${iconSVG}
        </div>
        <div class="preview-item-name">${ic.name}</div>
      </div>
    `;
  }).join('');

  // Apply zoom
  dom.previewGrid.style.transform = `scale(${state.previewZoom})`;
  dom.previewGrid.style.transformOrigin = 'top left';

  // Init sortable
  if (state.sortable) state.sortable.destroy();
  state.sortable = Sortable.create(dom.previewGrid, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: () => { /* order change, could re-sync state */ }
  });
}

function buildStyledSVG(ic) {
  const s = state.size - state.padding * 2;
  const safeSize = Math.max(8, s);
  let strokeColor = state.iconColor;

  if (state.colorMode === 'gradient') {
    const gradId = `grad_${ic.id}`;
    let x1='0%', y1='0%', x2='100%', y2='0%';
    if (state.gradDir === 'vertical') { x1='0%'; y1='0%'; x2='0%'; y2='100%'; }
    if (state.gradDir === 'diagonal') { x1='0%'; y1='0%'; x2='100%'; y2='100%'; }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${safeSize}" height="${safeSize}" viewBox="0 0 24 24" fill="none"
      stroke="url(#${gradId})" stroke-width="${state.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <linearGradient id="${gradId}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
          <stop offset="0%" stop-color="${state.gradStart}"/>
          <stop offset="100%" stop-color="${state.gradEnd}"/>
        </linearGradient>
      </defs>
      ${ic.svg}
    </svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${safeSize}" height="${safeSize}" viewBox="0 0 24 24"
    fill="none" stroke="${strokeColor}" stroke-width="${state.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
    ${ic.svg}
  </svg>`;
}

function buildWrapStyle() {
  const s = state.size;
  let radius = '0px';
  let bg = 'transparent';

  if (state.bgType === 'solid') { bg = state.bgColor; radius = '6px'; }
  else if (state.bgType === 'rounded') { bg = state.bgColor; radius = `${Math.round(s * 0.2)}px`; }
  else if (state.bgType === 'circle') { bg = state.bgColor; radius = '50%'; }

  const pad = state.bgType !== 'transparent' ? `${state.padding}px` : '0px';
  return `width:${s}px;height:${s}px;border-radius:${radius};background:${bg};padding:${pad};display:flex;align-items:center;justify-content:center;box-sizing:border-box;`;
}

/* ══════════════════════════════════════════════
   9. SVG CODE MODAL
   ══════════════════════════════════════════════ */
function showSVGCode(ic) {
  const svgStr = buildStyledSVG(ic);
  dom.modalTitle.textContent = `SVG Code — ${ic.name}`;
  dom.svgCodeBlock.textContent = svgStr.trim();
  dom.svgModal.hidden = false;
  dom.copySvgBtn.onclick = () => { navigator.clipboard.writeText(svgStr.trim()); showToast('SVG code copied!', 'success'); };
}

function copyIconSVG(ic) {
  const svgStr = buildStyledSVG(ic);
  navigator.clipboard.writeText(svgStr.trim()).then(() => showToast(`Copied ${ic.name} SVG ✓`, 'success'));
}

/* ══════════════════════════════════════════════
   10. SELECT ALL / CLEAR ALL
   ══════════════════════════════════════════════ */
function selectAll() {
  state.filteredIcons.forEach(ic => state.selectedIds.add(ic.id));
  refreshAllCards();
  updatePackInfo();
  renderPreview();
  updateDownloadButtons();
  updateDownloadSummary();
  updateZipTree();
  showToast(`Selected ${state.selectedIds.size} icons`, 'success');
}

function clearAll() {
  state.selectedIds.clear();
  refreshAllCards();
  updatePackInfo();
  renderPreview();
  updateDownloadButtons();
  updateDownloadSummary();
  updateZipTree();
}

function refreshAllCards() {
  $$('.icon-card', dom.iconGrid).forEach(card => {
    const id = card.dataset.id;
    card.classList.toggle('selected', state.selectedIds.has(id));
  });
  dom.selectedCount.textContent = state.selectedIds.size;
}

/* ══════════════════════════════════════════════
   11. CUSTOMIZER
   ══════════════════════════════════════════════ */
function applyCustomizer() {
  // re-render icon grid previews (stroke width)
  $$('.icon-preview svg', dom.iconGrid).forEach(svg => {
    svg.setAttribute('stroke-width', state.strokeWidth);
  });
  renderPreview();
  updatePackInfo();
}

function resetCustomizer() {
  state.colorMode = 'solid';
  state.iconColor = '#1a1a2e';
  state.gradStart = '#3b82f6';
  state.gradEnd = '#8b5cf6';
  state.gradDir = 'horizontal';
  state.bgType = 'transparent';
  state.bgColor = '#3b82f6';
  state.size = 48;
  state.strokeWidth = 2;
  state.padding = 0;
  state.format = 'svg';
  syncCustomizerUI();
  applyCustomizer();
  showToast('Customizer reset to defaults', 'info');
}

function syncCustomizerUI() {
  dom.colorPicker.value = state.iconColor;
  dom.colorHex.value = state.iconColor;
  dom.gradStart.value = state.gradStart;
  dom.gradEnd.value = state.gradEnd;
  dom.gradDir.value = state.gradDir;

  dom.sizeSlider.value = state.size;
  dom.sizeInput.value = state.size;
  dom.sizeVal.textContent = state.size + 'px';
  updateSliderTrack(dom.sizeSlider, 16, 256);

  dom.strokeSlider.value = state.strokeWidth;
  dom.strokeInput.value = state.strokeWidth;
  dom.strokeVal.textContent = state.strokeWidth + 'px';
  updateSliderTrack(dom.strokeSlider, 0.5, 5);

  dom.paddingSlider.value = state.padding;
  dom.paddingInput.value = state.padding;
  dom.paddingVal.textContent = state.padding + 'px';
  updateSliderTrack(dom.paddingSlider, 0, 50);

  // size presets
  dom.sizePresets.forEach(b => b.classList.toggle('active', +b.dataset.size === state.size));

  // bg type
  dom.bgTypeBtns.forEach(b => b.classList.toggle('active', b.dataset.bg === state.bgType));
  dom.bgColorRow.style.display = state.bgType !== 'transparent' ? 'flex' : 'none';

  // color mode
  dom.colorModeTabs.forEach(t => t.classList.toggle('active', t.dataset.mode === state.colorMode));
  dom.solidColorPanel.style.display = state.colorMode === 'solid' ? '' : 'none';
  dom.gradientColorPanel.style.display = state.colorMode === 'gradient' ? '' : 'none';

  // format
  dom.formatBtns.forEach(b => b.classList.toggle('active', b.dataset.fmt === state.format));

  // color presets
  dom.colorPresets.forEach(p => p.classList.toggle('active', p.dataset.color === state.iconColor));
}

function updateSliderTrack(slider, min, max) {
  const pct = ((+slider.value - min) / (max - min)) * 100;
  slider.style.setProperty('--pct', pct + '%');
}

/* ══════════════════════════════════════════════
   12. DOWNLOAD / ZIP
   ══════════════════════════════════════════════ */
async function generateZip() {
  const selected = getSelectedIconObjects();
  if (selected.length === 0) { showToast('No icons selected!', 'error'); return; }

  const packName = (dom.packName.value.trim() || 'my-icon-pack').replace(/[^a-z0-9_\-]/gi, '-');
  state.packName = packName;

  showProgress(true, 'Generating ZIP…', 'Preparing icons…');
  setProgress(0);

  const zip = new JSZip();
  const folder = zip.folder(packName);

  for (let i = 0; i < selected.length; i++) {
    const ic = selected[i];
    updateProgressStatus(`Processing ${ic.name} (${i+1}/${selected.length})`);
    setProgress(Math.round((i / selected.length) * 85));

    if (state.format === 'svg') {
      const svgContent = buildFullSVG(ic);
      folder.file(`${ic.id}.svg`, svgContent);
    } else {
      try {
        const dataUrl = await svgToRaster(ic, state.format);
        const base64 = dataUrl.split(',')[1];
        folder.file(`${ic.id}.${state.format}`, base64, { base64: true });
      } catch(e) {
        console.warn(`Failed converting ${ic.name}:`, e);
        // fallback to SVG
        folder.file(`${ic.id}.svg`, buildFullSVG(ic));
      }
    }
    // Let browser breathe
    if (i % 10 === 0) await sleep(1);
  }

  // README
  const readme = buildReadme(selected, packName);
  folder.file('README.txt', readme);

  setProgress(92);
  updateProgressStatus('Compressing…');
  await sleep(30);

  try {
    const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
      meta => setProgress(92 + Math.round(meta.percent * 0.08)));

    setProgress(100);
    await sleep(200);

    saveAs(blob, `${packName}.zip`);

    // Save recent
    addRecentDownload(packName, selected.length, state.format);
    renderRecentDownloads();
    showToast(`✅ ${packName}.zip downloaded! (${selected.length} icons)`, 'success');
  } catch (err) {
    console.error(err);
    showToast('ZIP generation failed: ' + err.message, 'error');
  }

  showProgress(false);
}

function buildFullSVG(ic) {
  const s = state.size;
  const innerSize = s - state.padding * 2;
  const safeInner = Math.max(8, innerSize);

  let strokeDef = `stroke="${state.iconColor}"`;
  let gradDef = '';

  if (state.colorMode === 'gradient') {
    const gradId = `grad`;
    let x1='0%', y1='0%', x2='100%', y2='0%';
    if (state.gradDir === 'vertical') { x1='0%'; y1='0%'; x2='0%'; y2='100%'; }
    if (state.gradDir === 'diagonal') { x1='0%'; y1='0%'; x2='100%'; y2='100%'; }
    gradDef = `<defs><linearGradient id="${gradId}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
      <stop offset="0%" stop-color="${state.gradStart}"/>
      <stop offset="100%" stop-color="${state.gradEnd}"/>
    </linearGradient></defs>`;
    strokeDef = `stroke="url(#${gradId})"`;
  }

  let bgRect = '';
  if (state.bgType !== 'transparent') {
    let rx = '0';
    if (state.bgType === 'rounded') rx = String(Math.round(s * 0.2));
    if (state.bgType === 'circle')  rx = String(s / 2);
    bgRect = `<rect width="${s}" height="${s}" rx="${rx}" fill="${state.bgColor}"/>`;
  }

  const tx = state.padding;
  const ty = state.padding;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  ${gradDef}
  ${bgRect}
  <svg x="${tx}" y="${ty}" width="${safeInner}" height="${safeInner}" viewBox="0 0 24 24" fill="none" ${strokeDef}
    stroke-width="${state.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
    ${ic.svg}
  </svg>
</svg>`;
}

async function svgToRaster(ic, fmt) {
  return new Promise((resolve, reject) => {
    const svgStr = buildFullSVG(ic);
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = state.size;
      canvas.height = state.size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, state.size, state.size);
      URL.revokeObjectURL(url);
      const mimeType = fmt === 'webp' ? 'image/webp' : 'image/png';
      resolve(canvas.toDataURL(mimeType, 0.92));
    };
    img.onerror = reject;
    img.src = url;
  });
}

function buildReadme(icons, packName) {
  const lines = [
    `╔═══════════════════════════════════════╗`,
    `║        ICON PACK GENERATOR            ║`,
    `║   https://iconpackgen.netlify.app     ║`,
    `╚═══════════════════════════════════════╝`,
    ``,
    `Pack Name   : ${packName}`,
    `Total Icons : ${icons.length}`,
    `Format      : ${state.format.toUpperCase()}`,
    `Size        : ${state.size}px`,
    `Stroke Width: ${state.strokeWidth}px`,
    `Generated   : ${new Date().toLocaleString()}`,
    ``,
    `─────────────────────────────────────────`,
    `ICONS INCLUDED:`,
    `─────────────────────────────────────────`,
    ...icons.map((ic, i) => `  ${String(i+1).padStart(3, ' ')}. ${ic.name} (${ic.library})`),
    ``,
    `─────────────────────────────────────────`,
    `LICENSE:`,
    `  Lucide    : ISC License`,
    `  Heroicons : MIT License`,
    `  Material  : Apache 2.0`,
    `  Custom    : Your own SVGs`,
    ``,
    `Generated with Icon Pack Generator`,
    `Built with ❤️ using HTML, CSS & Vanilla JS`,
  ];
  return lines.join('\n');
}

/* ══════════════════════════════════════════════
   13. CUSTOM SVG UPLOAD
   ══════════════════════════════════════════════ */
function handleSVGUpload(files) {
  let count = 0;
  Array.from(files).forEach(file => {
    if (!file.name.endsWith('.svg')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(e.target.result, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');
      if (!svgEl) return;
      const inner = svgEl.innerHTML;
      const name = file.name.replace(/\.svg$/, '').replace(/[-_]/g, ' ');
      const id = 'custom-' + file.name.replace(/\.svg$/, '').toLowerCase().replace(/[^a-z0-9]/g, '-');
      const icon = { name, id, category: 'ui', library: 'custom', svg: inner };

      // avoid duplicates
      if (!state.customIcons.find(c => c.id === id)) {
        state.customIcons.push(icon);
        state.allIcons.push(icon);
        localStorage.setItem('ipg_custom', JSON.stringify(state.customIcons));
        count++;
        if (count === Array.from(files).filter(f => f.name.endsWith('.svg')).length) {
          showToast(`Imported ${count} custom SVG${count > 1 ? 's' : ''} ✓`, 'success');
          applyFilter();
        }
      }
    };
    reader.readAsText(file);
  });
}

/* ══════════════════════════════════════════════
   14. RECENT DOWNLOADS
   ══════════════════════════════════════════════ */
function addRecentDownload(name, count, fmt) {
  state.recentDownloads.unshift({ name, count, fmt, date: new Date().toLocaleDateString() });
  if (state.recentDownloads.length > 5) state.recentDownloads.pop();
  localStorage.setItem('ipg_recent', JSON.stringify(state.recentDownloads));
}

function renderRecentDownloads() {
  if (state.recentDownloads.length === 0) {
    dom.recentList.innerHTML = '<p class="recent-empty">No recent downloads yet.</p>';
    return;
  }
  dom.recentList.innerHTML = state.recentDownloads.map(r => `
    <div class="recent-item">
      <div>
        <div class="recent-item-name">${r.name}.zip</div>
        <div class="recent-item-meta">${r.count} icons · ${r.fmt.toUpperCase()} · ${r.date}</div>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   15. PROGRESS & TOAST
   ══════════════════════════════════════════════ */
function showProgress(visible, title = '', status = '') {
  dom.progressOverlay.hidden = !visible;
  if (title) dom.progressTitle.textContent = title;
  if (status) dom.progressStatus.textContent = status;
}
function setProgress(pct) {
  dom.progressBar.style.width = pct + '%';
  dom.progressPct.textContent = pct + '%';
}
function updateProgressStatus(msg) {
  dom.progressStatus.textContent = msg;
}

function showToast(msg, type = 'info') {
  const icons = {
    success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error:   `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `${icons[type] || icons.info}<span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;
  dom.toastContainer.appendChild(t);
  setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ══════════════════════════════════════════════
   16. HELPERS
   ══════════════════════════════════════════════ */
function getSelectedIconObjects() {
  return state.allIcons.filter(ic => state.selectedIds.has(ic.id));
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ══════════════════════════════════════════════
   17. EVENTS
   ══════════════════════════════════════════════ */
function bindEvents() {

  /* ── THEME ── */
  dom.themeToggle.addEventListener('click', () => applyTheme(state.theme === 'light' ? 'dark' : 'light'));

  /* ── NAV MOBILE ── */
  dom.navHamburger.addEventListener('click', () => dom.navMobile.classList.toggle('open'));
  dom.navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => dom.navMobile.classList.remove('open')));

  /* ── NAVBAR SCROLL ── */
  window.addEventListener('scroll', () => dom.navbar.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

  /* ── SEARCH ── */
  dom.searchInput.addEventListener('input', () => {
    state.searchQuery = dom.searchInput.value;
    applyFilter();
  });
  dom.searchClear.addEventListener('click', () => {
    dom.searchInput.value = ''; state.searchQuery = ''; applyFilter();
  });
  dom.clearSearchBtn?.addEventListener('click', () => {
    dom.searchInput.value = ''; state.searchQuery = ''; applyFilter();
  });

  /* ── LIBRARY TABS ── */
  dom.libraryTabs.addEventListener('click', e => {
    const tab = e.target.closest('.lib-tab');
    if (!tab) return;
    $$('.lib-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.activeLib = tab.dataset.lib;
    applyFilter();
  });

  /* ── CATEGORY PILLS ── */
  dom.categoryPills.addEventListener('click', e => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;
    $$('.cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.activeCat = pill.dataset.cat;
    applyFilter();
  });

  /* ── LOAD MORE ── */
  dom.loadMoreBtn.addEventListener('click', () => {
    state.page++;
    renderIconGrid(false);
  });

  /* ── SELECT ALL / CLEAR ALL ── */
  dom.selectAllBtn.addEventListener('click', selectAll);
  dom.clearAllBtn.addEventListener('click', clearAll);

  /* ── UPLOAD SVG ── */
  dom.uploadTrigger.addEventListener('click', e => { e.stopPropagation(); dom.svgUpload.click(); });
  dom.uploadZone.addEventListener('click', () => dom.svgUpload.click());
  dom.svgUpload.addEventListener('change', e => handleSVGUpload(e.target.files));
  dom.uploadZone.addEventListener('dragover', e => { e.preventDefault(); dom.uploadZone.classList.add('drag-over'); });
  dom.uploadZone.addEventListener('dragleave', () => dom.uploadZone.classList.remove('drag-over'));
  dom.uploadZone.addEventListener('drop', e => {
    e.preventDefault(); dom.uploadZone.classList.remove('drag-over');
    handleSVGUpload(e.dataTransfer.files);
  });

  /* ── COLOR MODE ── */
  dom.colorModeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.colorModeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.colorMode = tab.dataset.mode;
      dom.solidColorPanel.style.display    = state.colorMode === 'solid' ? '' : 'none';
      dom.gradientColorPanel.style.display = state.colorMode === 'gradient' ? '' : 'none';
      applyCustomizer();
    });
  });

  /* ── COLOR PRESETS ── */
  dom.colorPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.colorPresets.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.iconColor = btn.dataset.color;
      dom.colorPicker.value = state.iconColor;
      dom.colorHex.value    = state.iconColor;
      applyCustomizer();
    });
  });

  /* ── COLOR PICKER ── */
  dom.colorPicker.addEventListener('input', () => {
    state.iconColor = dom.colorPicker.value;
    dom.colorHex.value = state.iconColor;
    dom.colorPresets.forEach(b => b.classList.toggle('active', b.dataset.color === state.iconColor));
    applyCustomizer();
  });
  dom.colorHex.addEventListener('input', () => {
    const val = dom.colorHex.value.trim();
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      state.iconColor = val;
      dom.colorPicker.value = val;
      applyCustomizer();
    }
  });

  /* ── GRADIENT ── */
  dom.gradStart.addEventListener('input', () => { state.gradStart = dom.gradStart.value; applyCustomizer(); });
  dom.gradEnd.addEventListener('input', () => { state.gradEnd = dom.gradEnd.value; applyCustomizer(); });
  dom.gradDir.addEventListener('change', () => { state.gradDir = dom.gradDir.value; applyCustomizer(); });

  /* ── BACKGROUND ── */
  dom.bgTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.bgTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.bgType = btn.dataset.bg;
      dom.bgColorRow.style.display = state.bgType !== 'transparent' ? 'flex' : 'none';
      applyCustomizer();
    });
  });
  dom.bgColorPicker.addEventListener('input', () => {
    state.bgColor = dom.bgColorPicker.value;
    dom.bgColorHex.value = state.bgColor;
    $('#bgSolidPreview').style.background = state.bgColor;
    applyCustomizer();
  });
  dom.bgColorHex.addEventListener('input', () => {
    const val = dom.bgColorHex.value.trim();
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      state.bgColor = val;
      dom.bgColorPicker.value = val;
      applyCustomizer();
    }
  });

  /* ── SIZE ── */
  dom.sizeSlider.addEventListener('input', () => {
    state.size = +dom.sizeSlider.value;
    dom.sizeVal.textContent = state.size + 'px';
    dom.sizeInput.value = state.size;
    updateSliderTrack(dom.sizeSlider, 16, 256);
    dom.sizePresets.forEach(b => b.classList.toggle('active', +b.dataset.size === state.size));
    applyCustomizer();
  });
  dom.sizeInput.addEventListener('input', () => {
    const v = Math.min(256, Math.max(16, +dom.sizeInput.value));
    state.size = v;
    dom.sizeSlider.value = v;
    dom.sizeVal.textContent = v + 'px';
    updateSliderTrack(dom.sizeSlider, 16, 256);
    applyCustomizer();
  });
  dom.sizePresets.forEach(btn => {
    btn.addEventListener('click', () => {
      const s = +btn.dataset.size;
      state.size = s;
      dom.sizeSlider.value = s;
      dom.sizeVal.textContent = s + 'px';
      dom.sizeInput.value = s;
      updateSliderTrack(dom.sizeSlider, 16, 256);
      dom.sizePresets.forEach(b => b.classList.toggle('active', +b.dataset.size === s));
      applyCustomizer();
    });
  });

  /* ── STROKE ── */
  dom.strokeSlider.addEventListener('input', () => {
    state.strokeWidth = +dom.strokeSlider.value;
    dom.strokeVal.textContent = state.strokeWidth + 'px';
    dom.strokeInput.value = state.strokeWidth;
    updateSliderTrack(dom.strokeSlider, 0.5, 5);
    applyCustomizer();
  });
  dom.strokeInput.addEventListener('input', () => {
    const v = Math.min(5, Math.max(0.5, +dom.strokeInput.value));
    state.strokeWidth = v;
    dom.strokeSlider.value = v;
    dom.strokeVal.textContent = v + 'px';
    updateSliderTrack(dom.strokeSlider, 0.5, 5);
    applyCustomizer();
  });

  /* ── PADDING ── */
  dom.paddingSlider.addEventListener('input', () => {
    state.padding = +dom.paddingSlider.value;
    dom.paddingVal.textContent = state.padding + 'px';
    dom.paddingInput.value = state.padding;
    updateSliderTrack(dom.paddingSlider, 0, 50);
    applyCustomizer();
  });
  dom.paddingInput.addEventListener('input', () => {
    const v = Math.min(50, Math.max(0, +dom.paddingInput.value));
    state.padding = v;
    dom.paddingSlider.value = v;
    dom.paddingVal.textContent = v + 'px';
    updateSliderTrack(dom.paddingSlider, 0, 50);
    applyCustomizer();
  });

  /* ── FORMAT ── */
  dom.formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.formatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.format = btn.dataset.fmt;
      updatePackInfo();
      updateDownloadSummary();
    });
  });

  /* ── PACK NAME ── */
  dom.packName.addEventListener('input', () => {
    state.packName = dom.packName.value.trim() || 'my-icon-pack';
    dom.dlSummaryName.textContent = state.packName;
    dom.zipFolderName.textContent = state.packName + '/';
    updateZipTree();
  });

  /* ── SECTION TOGGLES ── */
  $$('.section-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const sec = btn.dataset.section;
      const body = $(`#section-${sec}`);
      if (!body) return;
      const collapsed = body.style.display === 'none';
      body.style.display = collapsed ? '' : 'none';
      btn.classList.toggle('collapsed', !collapsed);
    });
  });
  $$('.custom-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const btn = header.querySelector('.section-toggle');
      if (btn) btn.click();
    });
  });

  /* ── DOWNLOAD BUTTONS ── */
  dom.sidebarDownloadBtn.addEventListener('click', generateZip);
  dom.mainDownloadBtn.addEventListener('click', generateZip);

  /* ── PREVIEW CONTROLS ── */
  dom.previewBgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.previewBgBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.previewBg = btn.dataset.pbg;
      dom.previewCanvas.setAttribute('data-pbg', state.previewBg);
    });
  });
  dom.previewZoom.addEventListener('change', () => {
    state.previewZoom = +dom.previewZoom.value;
    dom.previewGrid.style.transform = `scale(${state.previewZoom})`;
    dom.previewGrid.style.transformOrigin = 'top left';
  });

  /* ── MODAL ── */
  dom.modalClose.addEventListener('click', () => dom.svgModal.hidden = true);
  dom.modalCloseBtn2.addEventListener('click', () => dom.svgModal.hidden = true);
  dom.svgModal.addEventListener('click', e => { if (e.target === dom.svgModal) dom.svgModal.hidden = true; });

  /* ── RESET CUSTOMIZER ── */
  dom.resetCustomizer.addEventListener('click', resetCustomizer);

  /* ── KEYBOARD ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dom.svgModal.hidden = true; }
    if ((e.ctrlKey || e.metaKey) && e.key === 'a' && document.activeElement === dom.searchInput) {
      e.preventDefault(); selectAll();
    }
  });

  /* ── HERO CTA SCROLL ── */
  $$('.hero-actions a, [href="#library"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ══════════════════════════════════════════════
   18. START
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', init);
