/**
 * MOTIX marketing/demo evidence only.
 * Every record in this module is fictional. Never insert production data here,
 * and never copy customer, vehicle, staff, job or financial data from ATECH.
 */

export const motixWorkflowStages = [
  "Waiting",
  "Assigned",
  "In Workshop",
  "Paused / Parts",
  "Quality Check",
  "Reception Review",
  "Ready / Collected",
] as const;

export type MotixWorkflowStage = (typeof motixWorkflowStages)[number];

export type MotixDemoJob = {
  id: string;
  customer: string;
  vehicle: string;
  registration: string;
  service: string;
  status: MotixWorkflowStage;
  technician?: string;
};

export const motixDemoGarage = {
  name: "Northstar Motor Works",
  strapline: "Independent care for every journey.",
  location: "Sample UK service area",
  openingHours: "Monday–Friday · 08:00–17:30",
} as const;

export const motixDemoServices = ["MOT & Service", "Brake Inspection", "Diagnostics", "Tyre Replacement", "Air Conditioning", "General Service"] as const;

export type MotixBookingStatus = "New Request" | "Pending Review" | "Confirmed" | "Arrived / Checked In" | "Converted to Workshop" | "Completed";

export type MotixDemoBooking = {
  id: string;
  customer: string;
  vehicle: string;
  registration: string;
  service: (typeof motixDemoServices)[number];
  requestedSlot: string;
  message: string;
  status: MotixBookingStatus;
};

export const motixDemoTechnicians = ["Alex Morgan", "Jamie Wilson", "Chris Taylor"] as const;

export const motixDemoJobs: MotixDemoJob[] = [
  { id: "DEMO-JOB-1001", customer: "Daniel Harper", vehicle: "Ford Focus", registration: "DEMO-01", service: "MOT & Service", status: "Waiting" },
  { id: "DEMO-JOB-1002", customer: "Sarah Mitchell", vehicle: "Volkswagen Golf", registration: "DEMO-02", service: "Brake Inspection", status: "Assigned", technician: "Alex Morgan" },
  { id: "DEMO-JOB-1003", customer: "James Carter", vehicle: "BMW 3 Series", registration: "DEMO-03", service: "Diagnostics", status: "In Workshop", technician: "Jamie Wilson" },
  { id: "DEMO-JOB-1004", customer: "Olivia Bennett", vehicle: "Toyota Yaris", registration: "DEMO-04", service: "Tyre Replacement", status: "Paused / Parts", technician: "Chris Taylor" },
  { id: "DEMO-JOB-1005", customer: "Michael Reed", vehicle: "Mercedes A-Class", registration: "DEMO-05", service: "Air Conditioning", status: "Quality Check", technician: "Alex Morgan" },
  { id: "DEMO-JOB-1006", customer: "Priya Shah", vehicle: "Honda Civic", registration: "DEMO-06", service: "General Service", status: "Reception Review", technician: "Jamie Wilson" },
  { id: "DEMO-JOB-1007", customer: "Elliot Brooks", vehicle: "Nissan Qashqai", registration: "DEMO-07", service: "MOT & Service", status: "Ready / Collected", technician: "Chris Taylor" },
];

export const motixDemoBookings: MotixDemoBooking[] = [
  { id:"DEMO-BOOK-2001", customer:"Daniel Harper", vehicle:"Ford Focus", registration:"DEMO-01", service:"MOT & Service", requestedSlot:"Tuesday · Morning", message:"Please check the front brakes during the service.", status:"New Request" },
  { id:"DEMO-BOOK-2002", customer:"Sarah Mitchell", vehicle:"Volkswagen Golf", registration:"DEMO-02", service:"Brake Inspection", requestedSlot:"Wednesday · 10:30", message:"A light vibration can be felt under braking.", status:"Pending Review" },
  { id:"DEMO-BOOK-2003", customer:"James Carter", vehicle:"BMW 3 Series", registration:"DEMO-03", service:"Diagnostics", requestedSlot:"Thursday · Afternoon", message:"Dashboard warning requires diagnosis.", status:"Confirmed" },
  { id:"DEMO-BOOK-2004", customer:"Olivia Bennett", vehicle:"Toyota Yaris", registration:"DEMO-04", service:"Tyre Replacement", requestedSlot:"Today · 09:00", message:"Two front tyres requested.", status:"Arrived / Checked In" },
  { id:"DEMO-BOOK-2005", customer:"Michael Reed", vehicle:"Mercedes A-Class", registration:"DEMO-05", service:"Air Conditioning", requestedSlot:"Today · 08:30", message:"Air conditioning performance check.", status:"Converted to Workshop" },
];
