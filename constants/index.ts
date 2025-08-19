import { Bell, Cable, Eye, Lock, Phone, Scan, ScanEye, SquareActivityIcon, User2, Video } from "lucide-react";

type NavLinkType = {
  id: string;
  title: string;
  link:string;
};
export type Feature = {
  icon: React.ElementType;
  name: string;
  detail: string;
};

export type DoorViFeature = {
  id: number;
  img:string;
  titleHead:string;
  title: string;
  description: string;
  features: Feature[];
};
const navLinks:NavLinkType[] = [
 {
	id: "home",
	title: "Home",
  link:"/",
 },
//  {
// 	id: "shop",
// 	title: "Shop",
//  },
 {
	id: "blog",
	title: "Blog",
  link:"https://www.doorvi.co/blogs",
 },
 {
	id: "contact",
	title: "Contact",
  link:"https://www.doorvi.co/contact"
 },
//  {
// 	id: "privacy policy",
// 	title: "Privacy Policy",
//  },
//  {
// 	id: "term and condition",
// 	title: "Term & Condition",
//  },
//  {
// 	id: "refer and earn",
// 	title: "Refer & Earn",
//  },
//  {
// 	id: "faq",
// 	title: "FAQ",
//  },
];
// type sectionNav = {
// 	id:number,
// 	title:string
// }
// const homePageSection3Nav:sectionNav[] = [
// 	{id:0,title:'Wireless Access Control'},
// 	{id:1,title:'Visitor Management'},
// 	{id:2,title:'Intercome Integration'},
// ]

const doorViFeatures:DoorViFeature[] = [
    {
      id:0,
      img:"/assets/business/img2.jpg",
      titleHead:"Wireless Access Control",
      title: "Wireless Access Control with Video & Audio Verification",
      description:
        "DoorVi combines access control with smart video and audio features for seamless and secure visitor entry.",
      features: [
        {
          icon:Bell,
          name: "Get Notified",
          detail:
            "When a visitor scans the QR code, the host gets an instant notification with the visitor's details.",
        },        
        {
          icon:Video,
          name: "Video Security",
          detail:
            "Hosts can see who’s at the door before granting access for added safety.",
        },
        {
          icon:Eye,
          name: "Easy Access",
          detail:
            "Hosts can unlock doors remotely with just a tap, ensuring secure and smooth entry.",
        },
        {
          icon:Phone,
          name: "Real-Time Communication",
          detail:
            "Audio calls make it easy to verify visitors or give instructions instantly.",
        },
      ],
    },
    {
      id:1,
      img:"/assets/business/4.png",
      titleHead:"Visitor Management",
      title: "Visitor Management with Video & Audio Calling",
      description:
        "Make visitor check-ins quick and easy with DoorVi’s smart QR code system and calling features.",
      features: [
        {
          icon:Scan,
          name: "Scan & Select",
          detail:
            "Visitors scan the QR code (for the whole society or specific towers like Tower A or B) and choose the flat and member they want to contact.",
        },
        {icon:Video,
          name: "Audio/Video Call",
          detail:
            "Visitors can start a video or audio call with the host or any authorized member.",
        },
        {icon:User2,
          name: "Add Members",
          detail:
            "Multiple members can join the call for flexibility, making communication easier.",
        },
        {icon:ScanEye,
          name: "Customizable",
          detail:
            "The system can be tailored to fit the unique needs of your society.",
        },
      ],
    },
    {
      id:2,
      img:"/assets/business/2.jpg",
      titleHead:"Intercom Integration",
      title: "DoorVi Intercom",
      description:
        "DoorVi connects easily to existing intercom systems, offering a complete solution for access control and visitor management.",
      features: [
        {
          icon:Cable,
          name: "Stay Connected",
          detail:
            "Talk with your neighbour’s using the intercom feature—no hardware needed.",
        },
        {icon:Video,
          name: "Seamless Video and Audio Calls",
          detail:
            "Make both video and audio calls directly through the DoorVi app.",
        },
        {icon:Lock,
          name: "Privacy for Secure Communication",
          detail: " Keep your phone number private for secure communication.",
        },
        {icon:SquareActivityIcon,
          name: "Effortless Connections at Your Fingertips",
          detail: "Enjoy easy, hassle-free connections with just a tap.",
        },
      ],
    },
  ];

export{navLinks,doorViFeatures}