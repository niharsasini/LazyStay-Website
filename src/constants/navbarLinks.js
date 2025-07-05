export const NAV_LINKS_LEFT = [
  { label: "Home", link: "/" },
  { label: "Hotels", scrollId: "hotels" },
  { label: "Amenities", scrollId: "amenities" },
];

export const NAV_LINKS_RIGHT = [
  { label: "Gallery", scrollId: "gallery" },
  { label: "Reviews", scrollId: "testimonials" },
  { label: "About Us", link: "/about" },
  { label: "Contact Us", link: "/contact" },
];

export const MOBILE_NAV_LINKS = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

export const CONTACT_INFO = {
  phone: "+91 8455007723",
  email: "sales@lazystay.com",
  hours: "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
};

export const SOCIAL_ICONS = [
  { icon: "fab fa-facebook-f" },
  { icon: "fab fa-x-twitter" },
  { icon: "fab fa-pinterest-p" },
  { icon: "fab fa-instagram" },
];
