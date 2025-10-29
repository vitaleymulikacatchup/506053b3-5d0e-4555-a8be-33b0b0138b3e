"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Bed, Briefcase, Building2, Calendar, Crown, Gift, Heart, MapPin, MessageCircle, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Events", id: "events" },
            { name: "About", id: "about" }
          ]}
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled comfort and sophistication at Grandeur Hotel. Where every moment becomes an unforgettable memory."
          tag="5-Star Experience"
          tagIcon={Sparkles}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/10812974/pexels-photo-10812974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Welcome to Grandeur"
          description="Since 1925, Grandeur Hotel has been the epitome of luxury hospitality, offering world-class service and unmatched elegance in the heart of the city."
          tag="Our Legacy"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Timeless Elegance",
              description: "Nearly a century of refined hospitality and architectural beauty",
              icon: Building2
            },
            {
              title: "Personalized Service",
              description: "Dedicated concierge team ensuring every detail exceeds expectations",
              icon: Users
            },
            {
              title: "Prime Location",
              description: "Located in the cultural and business heart of the city",
              icon: MapPin
            }
          ]}
          imageSrc="https://images.pexels.com/photos/27675673/pexels-photo-27675673.png?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="left"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and style."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/3755585/pexels-photo-3755585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Family Suite",
              price: "$459/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Special Packages"
          description="Discover our curated packages designed to enhance your stay with exclusive amenities and experiences."
          tag="Best Deals"
          tagIcon={Gift}
          plans={[
            {
              id: "weekend",
              badge: "Popular",
              badgeIcon: TrendingUp,
              price: "$399/night",
              subtitle: "Perfect for romantic getaways",
              features: [
                "Deluxe King Room",
                "Champagne welcome",
                "Late checkout until 2PM",
                "Spa credit $100"
              ]
            },
            {
              id: "business",
              badge: "Executive",
              badgeIcon: Briefcase,
              price: "$549/night",
              subtitle: "Ideal for business travelers",
              features: [
                "Executive Suite",
                "24/7 business center access",
                "Express laundry service",
                "Airport transfers included"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence by Numbers"
          description="Our commitment to exceptional service is reflected in these key achievements and guest satisfaction metrics."
          tag="Awards"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98",
              title: "years",
              description: "Of luxury hospitality excellence",
              icon: Calendar
            },
            {
              id: "2",
              value: "4.9",
              title: "stars",
              description: "Average guest rating across platforms",
              icon: Star
            },
            {
              id: "3",
              value: "95",
              title: "percent",
              description: "Guest satisfaction and return rate",
              icon: Heart
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Our dedicated professionals are passionate about creating exceptional experiences for every guest."
          tag="Excellence Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/5371573/pexels-photo-5371573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Head Concierge",
              imageSrc: "https://images.pexels.com/photos/3770110/pexels-photo-3770110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover why travelers from around the world choose Grandeur Hotel for their most important occasions."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "James Harrison",
              role: "Managing Director",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3781928/pexels-photo-3781928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emma & David Walsh",
              role: "Honeymooners",
              company: "Anniversary Celebration",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2346183/pexels-photo-2346183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Sophia Torres",
              role: "Travel Blogger",
              company: "Wanderlust Weekly",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8829191/pexels-photo-8829191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Stay"
          description="Ready to experience luxury? Contact our reservations team to book your perfect stay or inquire about special packages."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Book Now"
          imageSrc="https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" },
                { label: "Valet Parking", href: "parking" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Reservations", href: "reservations" },
                { label: "Newsletter", href: "newsletter" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grandeur Hotel"
        />
      </div>
    </ThemeProvider>
  );
}