export type StatusTone = "live" | "active" | "launching" | "development";

export type Product = {
  id: string;
  slug: string;
  name: string;
  strapline: string;
  summary: string;
  positioning: string;
  sector: string;
  status: string;
  statusTone: StatusTone;
  ownership: string;
  availability: string;
  regions?: string[];
  capabilities: string[];
  implementationIds: string[];
  primaryCta: string;
  secondaryCta: string;
};

export type Implementation = {
  id: string;
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  built: string[];
  productId: string;
  industrySlug: string;
};

export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  problem: string;
  audience: string[];
  builds: string[];
  workflows: string[];
  benefits: string[];
  industrySlugs: string[];
  productIds?: string[];
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  problems: string[];
  capabilities: string[];
  solutionSlugs: string[];
  productIds?: string[];
  implementationIds?: string[];
};

export const products: Product[] = [
  {
    id: "motix", slug: "motix", name: "MOTIX™", strapline: "Automotive operations, connected.",
    summary: "Connected garage management software linking customer websites and booking requests with reception, vehicle, workshop and technician operations.",
    positioning: "Run your garage from one connected system.",
    sector: "Automotive", status: "Live", statusTone: "live", ownership: "VertexIQ Systems product",
    availability: "Live platform", regions: ["United Kingdom"],
    capabilities: ["Customers and vehicles", "Bookings, reception and walk-ins", "Quotes and job cards", "Workshop board and technician workflows", "Invoices, payments and customer handover", "MOT lookup and intelligence", "Reporting and customer communication"],
    implementationIds: ["atech"], primaryCta: "Request a MOTIX Demo", secondaryCta: "Discuss automotive technology",
  },
  {
    id: "fields-os", slug: "fields-os", name: "Fields OS™", strapline: "Structured technology for field operations.",
    summary: "A field-service operations platform for organisations coordinating customers, services and work across the field.",
    positioning: "Fields OS brings structure to distributed service operations, helping teams organise customer registration, service workflows and operational tracking.",
    sector: "Field Services", status: "Active implementation", statusTone: "active", ownership: "VertexIQ Systems product",
    availability: "Active client implementation", regions: ["Ghana"],
    capabilities: ["Customer registration", "Structured service workflows", "Field operations", "Zone-based operations", "Payment and service management", "Operational tracking"],
    implementationIds: ["ecoclean"], primaryCta: "Discuss field-service technology", secondaryCta: "Explore EcoClean implementation",
  },
  {
    id: "medlink", slug: "medlink", name: "MedLink", strapline: "Healthcare technology built for accessible operations.",
    summary: "A VertexIQ-owned healthcare technology platform starting operations in Ghana.",
    positioning: "MedLink is being developed to support clearer digital healthcare workflows for clinics, doctors and consultations in Ghana.",
    sector: "Healthcare", status: "Starting operations in Ghana", statusTone: "launching", ownership: "Owned by VertexIQ Systems",
    availability: "Launching in Ghana", regions: ["Ghana"],
    capabilities: ["Appointments and consultation status", "Payment state", "Video and voice consultation options", "Clinic management", "Doctor management", "Consultation fees", "Doctor availability"],
    implementationIds: [], primaryCta: "Discuss MedLink", secondaryCta: "Discuss healthcare technology",
  },
  {
    id: "xmor-care-os", slug: "xmor-care-os", name: "XMOR Care OS™", strapline: "The Operating System for Modern Care.",
    summary: "A modular care-sector SaaS platform in advanced development for modern care and support organisations.",
    positioning: "XMOR Care OS is being engineered around connected care operations, workforce processes and compliance-conscious service delivery.",
    sector: "Care & Support Services", status: "Advanced development", statusTone: "development", ownership: "Owned by VertexIQ Systems",
    availability: "Not commercially live", regions: ["United Kingdom"],
    capabilities: ["Care operations architecture", "Service-user workflow architecture", "Staff and workforce operations", "Finance capability architecture", "Compliance-oriented architecture", "Modular multi-tenant SaaS direction"],
    implementationIds: [], primaryCta: "Register interest", secondaryCta: "Discuss care technology",
  },
];

export const implementations: Implementation[] = [
  {
    id: "atech", slug: "atech-services-uk", client: "ATECH Services UK", sector: "Automotive",
    title: "Automotive digital transformation and operations implementation",
    summary: "A connected public and operational technology implementation for a UK automotive business, powered by MOTIX™.",
    challenge: "Bring customer-facing journeys and day-to-day automotive operations into a more connected digital system.",
    approach: "VertexIQ connected the public website and booking journey with the operational workflows used to receive, manage and complete vehicle work.",
    built: ["Public website and bookings", "Customer and vehicle management", "Reception and walk-ins", "Quotes and job cards", "Workshop and technician workflows", "Invoicing, payments and handover", "MOT intelligence and reporting"],
    productId: "motix", industrySlug: "automotive-garages",
  },
  {
    id: "ecoclean", slug: "ecoclean-ghana", client: "EcoClean Ghana", sector: "Environmental, Waste & Field Services",
    title: "Digital and operational field-service infrastructure",
    summary: "A client implementation supporting EcoClean Ghana's field-service operation, connected to Fields OS™.",
    challenge: "Create clearer digital infrastructure for customer registration and structured services delivered across field operations.",
    approach: "VertexIQ connected the public service experience with operational workflows designed around field and zone-based delivery.",
    built: ["Customer registration", "Structured service workflows", "Field operations support", "Zone-based operations", "Payment and service-management capability", "Operational tracking"],
    productId: "fields-os", industrySlug: "cleaning-field-services",
  },
];

export const solutions: Solution[] = [
  { slug: "websites-digital-growth", name: "Websites & Digital Growth", eyebrow: "Turn attention into action", summary: "Conversion-conscious websites and digital journeys that make it easier for the right customers to understand, trust and contact your business.", problem: "A weak or unclear digital presence can make a capable business difficult to discover and difficult to trust.", audience: ["Established businesses repositioning online", "Service companies that need better enquiries", "New ventures building a credible first presence"], builds: ["Corporate and service websites", "Conversion landing pages", "Booking and enquiry journeys", "Technical SEO foundations"], workflows: ["Discovery to enquiry", "Campaign landing to qualification", "Service research to booking"], benefits: ["Clearer market positioning", "More useful customer journeys", "A platform that can grow with the business"], industrySlugs: ["professional-services", "training-education", "startups-growing-businesses"] },
  { slug: "crm-business-systems", name: "CRM & Business Systems", eyebrow: "Bring work into one clear system", summary: "Purpose-built customer and operational systems that reduce scattered information and give teams a more reliable way to work.", problem: "Customer details, follow-ups and operational tasks often become fragmented across inboxes, spreadsheets and disconnected tools.", audience: ["Teams outgrowing spreadsheets", "Businesses with repeat customer workflows", "Operations that need clearer visibility"], builds: ["Customer management systems", "Operational dashboards", "Workflow and status tools", "Internal administration portals"], workflows: ["Enquiry to customer", "Booking to delivery", "Follow-up and service history"], benefits: ["One clearer source of operational truth", "Less duplicated administration", "Better visibility across work"], industrySlugs: ["automotive-garages", "cleaning-field-services", "professional-services"], productIds: ["motix", "fields-os"] },
  { slug: "custom-software", name: "Custom Software Development", eyebrow: "Software shaped around your operation", summary: "Web applications and internal platforms designed for workflows that off-the-shelf tools do not handle well.", problem: "Generic software can force a distinctive operation into processes that do not fit.", audience: ["Businesses with specialist workflows", "Teams replacing fragile manual processes", "Organisations connecting customer and staff experiences"], builds: ["Web applications", "Client and staff portals", "Operational platforms", "Reporting and administration tools"], workflows: ["Role-based operational journeys", "Multi-step service delivery", "Structured data and reporting"], benefits: ["Technology aligned to the real workflow", "A maintainable foundation", "Room to evolve deliberately"], industrySlugs: ["healthcare", "care-support-services", "startups-growing-businesses"] },
  { slug: "saas-development", name: "SaaS Development", eyebrow: "Build a product, not just an interface", summary: "Product strategy and engineering for scalable software services, from a focused first release to a more mature platform.", problem: "A software idea needs more than screens: it needs a coherent product model, architecture and route to reliable delivery.", audience: ["Founders building software products", "Companies productising internal expertise", "Teams modernising an existing platform"], builds: ["SaaS product foundations", "Multi-role applications", "Subscription-ready architecture", "Product administration systems"], workflows: ["Idea to validated scope", "Core journey to release", "Release to measured improvement"], benefits: ["A clearer product scope", "Reduced avoidable complexity", "An architecture designed to evolve"], industrySlugs: ["startups-growing-businesses", "care-support-services", "healthcare"], productIds: ["xmor-care-os", "medlink"] },
  { slug: "mobile-applications", name: "Mobile Applications", eyebrow: "Put essential workflows within reach", summary: "Mobile experiences for customers and teams when the work needs to happen beyond a desktop browser.", problem: "Important services and field workflows can break down when the technology is not usable where the work happens.", audience: ["Field-based operations", "Platforms with on-the-go users", "Services needing accessible mobile journeys"], builds: ["Customer mobile applications", "Field-team interfaces", "Cross-platform product experiences", "Mobile-first service journeys"], workflows: ["On-site task completion", "Mobile booking and consultation", "Status capture in the field"], benefits: ["Better access at the point of work", "More consistent data capture", "Connected mobile and back-office journeys"], industrySlugs: ["cleaning-field-services", "healthcare", "automotive-garages"] },
  { slug: "ai-automation", name: "AI & Automation", eyebrow: "Use automation where it genuinely helps", summary: "Practical automation and AI-assisted workflows designed to reduce repetitive work without obscuring business control.", problem: "Teams lose time copying information, chasing routine updates and repeating decisions that can be structured.", audience: ["Operations with repetitive administration", "Teams handling high enquiry volumes", "Businesses connecting several routine workflows"], builds: ["Workflow automation", "Assisted triage and routing", "Document and data processing", "Operational notifications"], workflows: ["Enquiry classification", "Routine follow-up", "Structured information extraction"], benefits: ["Less repetitive effort", "Faster routine processing", "Human oversight where it matters"], industrySlugs: ["professional-services", "training-education", "startups-growing-businesses"] },
  { slug: "systems-integration", name: "Systems Integration", eyebrow: "Make essential systems work together", summary: "Integration work that connects business-critical tools and reduces duplicated data entry across operational journeys.", problem: "Disconnected systems create repeated work, inconsistent records and blind spots between teams.", audience: ["Businesses using several specialist tools", "Operations with duplicated data entry", "Teams modernising in stages"], builds: ["API integrations", "Data synchronisation", "Workflow connections", "Integration monitoring foundations"], workflows: ["Booking to operations", "Operations to invoicing", "Customer record synchronisation"], benefits: ["Fewer disconnected hand-offs", "More consistent information", "A phased path to modernisation"], industrySlugs: ["automotive-garages", "care-support-services", "professional-services"] },
];

export const industries: Industry[] = [
  { slug: "automotive-garages", name: "Automotive & Garages", summary: "Connected customer, vehicle and workshop technology for modern automotive operations.", problems: ["Bookings disconnected from workshop planning", "Customer and vehicle information spread across tools", "Limited visibility from reception to handover"], capabilities: ["Customer-facing websites and bookings", "Workshop operations systems", "Customer, vehicle and payment workflows"], solutionSlugs: ["crm-business-systems", "systems-integration", "websites-digital-growth"], productIds: ["motix"], implementationIds: ["atech"] },
  { slug: "care-support-services", name: "Care & Support Services", summary: "Care technology architecture designed around connected operations, people and accountable workflows.", problems: ["Complex staff and service-user workflows", "Operational information split across systems", "Need for compliance-conscious architecture"], capabilities: ["Care operations platforms", "Workforce and finance workflow architecture", "Connected operational systems"], solutionSlugs: ["saas-development", "custom-software", "systems-integration"], productIds: ["xmor-care-os"] },
  { slug: "cleaning-field-services", name: "Cleaning & Field Services", summary: "Operational technology for services delivered across customers, teams, zones and locations.", problems: ["Field work is hard to coordinate", "Customer registration is disconnected from delivery", "Operational progress is difficult to track"], capabilities: ["Field-service platforms", "Customer registration journeys", "Structured service and payment workflows"], solutionSlugs: ["crm-business-systems", "mobile-applications", "custom-software"], productIds: ["fields-os"], implementationIds: ["ecoclean"] },
  { slug: "healthcare", name: "Healthcare", summary: "Restrained, workflow-led healthcare technology for access, consultations and clinical administration.", problems: ["Appointments and consultation states are hard to coordinate", "Digital and clinic workflows become fragmented", "Availability and fee information needs structure"], capabilities: ["Healthcare platform engineering", "Appointment and consultation workflows", "Clinic and doctor management architecture"], solutionSlugs: ["custom-software", "mobile-applications", "saas-development"], productIds: ["medlink"] },
  { slug: "professional-services", name: "Professional Services", summary: "Credible digital experiences and connected client operations for expertise-led businesses.", problems: ["Strong expertise is not clearly communicated", "Enquiries and follow-ups are inconsistent", "Client administration consumes too much time"], capabilities: ["High-trust websites", "CRM and client workflow systems", "Appropriate automation"], solutionSlugs: ["websites-digital-growth", "crm-business-systems", "ai-automation"] },
  { slug: "training-education", name: "Training & Education", summary: "Digital journeys and systems that make programmes easier to discover, administer and access.", problems: ["Programme information is difficult to navigate", "Enquiries and enrolment steps are manual", "Learner administration spans disconnected tools"], capabilities: ["Programme and training websites", "Enquiry and enrolment workflows", "Administration platforms"], solutionSlugs: ["websites-digital-growth", "custom-software", "ai-automation"] },
  { slug: "startups-growing-businesses", name: "Startups & Growing Businesses", summary: "Focused technology foundations for businesses turning an idea or working process into a scalable operation.", problems: ["The first product scope is too broad", "Manual processes are starting to break", "Technology decisions are being made without a roadmap"], capabilities: ["Product discovery and SaaS foundations", "Growth websites", "Custom operational systems"], solutionSlugs: ["saas-development", "websites-digital-growth", "custom-software"] },
];

export const productById = (id: string) => products.find((item) => item.id === id);
export const implementationById = (id: string) => implementations.find((item) => item.id === id);
export const solutionBySlug = (slug: string) => solutions.find((item) => item.slug === slug);
export const industryBySlug = (slug: string) => industries.find((item) => item.slug === slug);

export const site = {
  name: "VertexIQ Systems",
  domain: "https://www.vertexiqsystems.com",
  email: "kenneth@vertexiqsystems.com",
  calendlyUrl: "https://calendly.com/kennethking4u78/30min",
  ukWhatsapp: "https://wa.me/447376174981",
  ghWhatsapp: "https://wa.me/233534177839",
};
