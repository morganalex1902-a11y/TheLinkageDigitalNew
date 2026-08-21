import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  afterBullets?: string[];
};

type PolicyDocument = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  intro?: string;
  sections: PolicySection[];
  lastUpdated?: string;
  closing?: {
    organization: string;
    contact: string;
  };
};

const LAST_UPDATED = "August 10, 2026";

const TERMS: PolicyDocument = {
  eyebrow: "Legal & Policies",
  title: "Terms and Conditions",
  description: "The terms that govern the purchase and use of The Linkage Digital's website, marketing, creative, and related digital services.",
  path: "/terms-and-conditions",
  intro: "These Terms and Conditions (\"Terms\") govern the purchase and use of services provided by The Linkage Digital (\"The Linkage Digital,\" \"we,\" \"us,\" or \"our\"). Our services may include website design and development, website modifications and add-ons, digital marketing, Google Ads management, strategy, creative services, consulting, and related digital services. By purchasing our services, submitting payment, requesting or authorizing work, or otherwise proceeding with a project, you acknowledge that you have had an opportunity to review these Terms and the policies referenced below.",
  lastUpdated: "August 21, 2026",
  sections: [
    {
      title: "1. Agreement and project communications",
      paragraphs: [
        "The Linkage Digital does not require every Client to sign a separate formal contract or receive a separate contract by email before providing services.",
        "Depending on the project, the details of the services may be documented through a combination of:",
      ],
      bullets: [
        "Invoices",
        "Payment links",
        "Payment records",
        "SMS or business messaging",
        "WhatsApp",
        "Facebook Messenger",
        "Email, where used",
        "Website forms",
        "Written project instructions",
        "Customer requests",
        "Client approvals",
        "Revision requests",
        "Deliverables and project materials",
        "Other written communications concerning the services",
      ],
      afterBullets: [
        "These records may be used to document the services requested, project scope, instructions, approvals, payments, revisions, and other communications between the Client and The Linkage Digital, subject to applicable law.",
        "The absence of a separately signed contract does not by itself mean that no agreement or understanding existed between the parties.",
      ],
    },
    {
      title: "2. Payment and commencement of services",
      paragraphs: [
        "Certain services require an upfront payment before work begins.",
        "Once payment has been received, The Linkage Digital may begin work immediately.",
        "Work may include discovery, planning, research, strategy, design, development, account setup, campaign preparation, content preparation, creative production, marketing setup, or other activities related to the requested service.",
        "An upfront payment is not automatically refundable merely because the Client later decides not to continue with the project.",
        "Refunds and cancellations are governed by our Refund Policy and Cancellation Policy.",
      ],
    },
    {
      title: "3. Scope of services",
      paragraphs: [
        "The services provided will be based on the service purchased and the scope communicated between the Client and The Linkage Digital.",
        "Project scope may be documented through invoices, payment descriptions, payment links, written communications, project instructions, and other records.",
        "Additional work outside the agreed scope may require an additional payment.",
      ],
    },
    {
      title: "4. Client responsibilities",
      paragraphs: [
        "The Client agrees to provide information, content, approvals, access, credentials, materials, and other cooperation reasonably necessary to perform the services.",
        "The Client is responsible for ensuring that information and materials provided to The Linkage Digital are accurate and that the Client has the necessary rights or permissions to use those materials.",
        "Delays caused by missing information, delayed approvals, unavailable access, or other Client-related issues may affect project timelines.",
      ],
    },
    {
      title: "5. Website development services",
      paragraphs: [
        "Website-development services may include design, development, configuration, integrations, content placement, testing, revisions, and launch activities depending on the purchased service.",
        "The exact features and deliverables depend on the scope communicated for the applicable project.",
        "Third-party software, hosting, plugins, themes, domains, integrations, and other services may be subject to separate terms imposed by their respective providers.",
      ],
    },
    {
      title: "6. Marketing and advertising services",
      paragraphs: [
        "Marketing services may include strategy, campaign setup, creative preparation, management, optimization, reporting, and related services.",
        "Advertising platforms such as Google, Meta, or other third parties operate independently from The Linkage Digital.",
        "We do not guarantee specific advertising results, including:",
      ],
      bullets: [
        "Sales",
        "Revenue",
        "Leads",
        "Clicks",
        "Impressions",
        "Conversions",
        "Rankings",
        "Advertising approval",
        "Specific return on advertising spend",
      ],
      afterBullets: [
        "Unless a specific written guarantee has been expressly agreed upon, marketing performance depends on numerous factors outside our control.",
        "Advertising spend paid to third-party platforms is separate from our service fees where applicable.",
      ],
    },
    {
      title: "7. Initial concepts, drafts, and revisions",
      paragraphs: [
        "Where applicable, The Linkage Digital may provide an initial concept, draft, design, demonstration, sample, strategy, campaign setup, or other preliminary work for Client review.",
        "The Client may provide feedback and revision requests within the agreed scope.",
        "Additional revisions or work outside the agreed scope may require an additional charge.",
        "Approval or acceptance communicated through SMS, WhatsApp, Facebook Messenger, email, or another written communication channel may be retained as part of the project record.",
      ],
    },
    {
      title: "8. Client approvals",
      paragraphs: [
        "The Client is responsible for reviewing project materials and providing timely feedback.",
        "When a Client approves a concept, design, draft, content, campaign direction, or other project milestone, The Linkage Digital may proceed based on that approval.",
        "Changes requested after approval may be treated as revisions or additional work depending on the circumstances and agreed scope.",
      ],
    },
    {
      title: "9. Payments",
      paragraphs: [
        "The Client agrees to pay the applicable amount displayed on the invoice, payment link, or other purchase method used for the service.",
        "Payments may be processed through third-party payment processors such as Stripe.",
        "A payment may be treated as authorization to begin the applicable service where the service is intended to commence after payment.",
      ],
    },
    {
      title: "10. Refunds and cancellations",
      paragraphs: [
        "Refunds and cancellations are governed by our current Refund Policy and Cancellation Policy.",
        "The Client should review those policies before purchasing services.",
        "Our Refund Policy generally provides a **7-calendar-day period for submitting refund requests**, subject to the conditions and exceptions described in that policy.",
        "Work that has already been performed, delivered, completed, launched, or substantially performed may be non-refundable.",
        "Third-party expenses may also be non-refundable.",
      ],
    },
    {
      title: "11. Third-party services",
      paragraphs: [
        "We may use or recommend third-party services, platforms, software, hosting providers, advertising platforms, domain registrars, plugins, integrations, contractors, or other providers.",
        "The Linkage Digital is not responsible for outages, policy changes, account suspensions, pricing changes, technical failures, or other actions taken by third-party providers.",
        "Clients may be required to maintain their own accounts with third-party providers where applicable.",
      ],
    },
    {
      title: "12. Client materials and intellectual property",
      paragraphs: [
        "The Client represents that it has the necessary rights or authorization to provide text, images, logos, videos, trademarks, documents, credentials, or other materials supplied to The Linkage Digital.",
        "The Client remains responsible for materials it provides.",
        "Unless otherwise agreed, third-party assets such as stock images, fonts, plugins, themes, software, and licenses remain subject to their respective licensing terms.",
      ],
    },
    {
      title: "13. Website launch and hosting",
      paragraphs: [
        "Where The Linkage Digital assists with hosting, domains, software, or website launch, the Client remains responsible for maintaining any third-party accounts and subscriptions that are registered in the Client's name.",
        "Failure to renew hosting, domains, software, or other third-party services may result in interruption or loss of service.",
      ],
    },
    {
      title: "14. Communications and electronic records",
      paragraphs: [
        "The Client acknowledges that project-related communications may occur through SMS, WhatsApp, Facebook Messenger, email, telephone followed by written confirmation, or other communication platforms.",
        "Where permitted by applicable law, written communications may be retained as business records.",
        "These records may include:",
      ],
      bullets: [
        "Requests",
        "Instructions",
        "Approvals",
        "Revision requests",
        "Payment discussions",
        "Project updates",
        "Deliverable discussions",
        "Cancellation requests",
        "Refund discussions",
        "Other project-related communications",
      ],
    },
    {
      title: "15. Confidentiality",
      paragraphs: [
        "We will use reasonable measures to protect confidential information provided to us for the purpose of performing services.",
        "However, information transmitted through third-party communication platforms may also be subject to the privacy and security practices of those platforms.",
      ],
    },
    {
      title: "16. No guarantee of uninterrupted service",
      paragraphs: [
        "We do not guarantee that websites, marketing campaigns, software, advertising platforms, hosting services, or third-party integrations will operate without interruption.",
        "Technical problems, platform changes, outages, security incidents, third-party restrictions, and other events outside our reasonable control may affect service availability.",
      ],
    },
    {
      title: "17. Limitation of liability",
      paragraphs: [
        "To the extent permitted by applicable law, The Linkage Digital will not be responsible for indirect, incidental, special, consequential, or other losses arising from the use of our services where such liability cannot reasonably be attributed to our direct actions.",
        "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.",
      ],
    },
    {
      title: "18. Force majeure",
      paragraphs: [
        "We are not responsible for delays or failures caused by circumstances beyond our reasonable control, including significant technical outages, third-party platform failures, natural disasters, government actions, internet disruptions, labor disruptions, or other events outside our reasonable control.",
      ],
    },
    {
      title: "19. Disputes and concerns",
      paragraphs: [
        "If you have a concern about a service, payment, deliverable, refund, or cancellation, please contact us directly so that we have an opportunity to review the matter.",
        "We encourage Clients to raise concerns promptly and provide relevant information or documentation so that we can investigate and respond.",
        "Nothing in these Terms prevents a Client from exercising rights available under applicable law.",
      ],
    },
    {
      title: "20. Privacy Policy",
      paragraphs: [
        "Use of our website and services may involve the collection and processing of personal information.",
        "Our Privacy Policy explains how we collect, use, disclose, and protect personal information.",
      ],
    },
    {
      title: "21. Refund Policy",
      paragraphs: [
        "Refunds are governed by our current Refund Policy.",
        "Clients should review the Refund Policy before purchasing services.",
      ],
    },
    {
      title: "22. Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time.",
        "The version of these Terms displayed on our website at the time of a new purchase will generally apply to that purchase, subject to applicable law and any specific written terms that may apply to the relevant service.",
      ],
    },
    {
      title: "23. Severability",
      paragraphs: [
        "If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will remain in effect to the extent permitted by applicable law.",
      ],
    },
    {
      title: "24. Contact",
      paragraphs: [
        "For questions regarding these Terms, please contact:",
        "The Linkage Digital",
        "Email: sales@thelinkagedigital.com",
      ],
    },
  ],
};

const REFUND: PolicyDocument = {
  eyebrow: "Legal & Policies",
  title: "Refund Policy",
  description: "How The Linkage Digital reviews refund requests for custom digital, creative, marketing, and advertising services.",
  path: "/refund-policy",
  intro: "Please read this policy carefully before purchasing or using our services.",
  lastUpdated: "August 21, 2026",
  closing: {
    organization: "The Linkage Digital",
    contact: "sales@thelinkagedigital.com",
  },
  sections: [
    {
      title: "1. Our approach",
      paragraphs: [
        "The Linkage Digital provides custom digital services, including website design and development, website improvements and add-ons, digital marketing, Google Ads management, strategy, creative services, and related services.",
        "Our services are custom, time-based, and may require us to begin work, allocate personnel, purchase third-party services, or make other commitments shortly after payment is received.",
        "Refund eligibility therefore depends on the service purchased, the stage of the project, work already performed or delivered, client approvals or feedback, and costs already incurred or committed.",
        "We review refund requests fairly and in good faith. Submitting a refund request within the applicable 7-day period does not automatically guarantee a refund.",
        "Nothing in this policy limits any rights or remedies that cannot legally be waived under applicable law.",
      ],
    },
    {
      title: "2. 7-day refund request period",
      paragraphs: [
        "Refund requests must generally be submitted within 7 calendar days of the applicable payment date.",
        "To be considered timely, a refund request must be submitted in writing to sales@thelinkagedigital.com within 7 calendar days of the payment for which the refund is being requested.",
        "After the 7-day period has passed, refunds are generally not available, except where we determine an exception is appropriate or where a refund or other remedy is required by applicable law.",
        "The 7-day period is a refund-request period only. It does not mean that every payment is automatically refundable during those seven days.",
        "Refund eligibility remains subject to the service status, work performed, deliverables provided, third-party expenses, and other provisions of this policy.",
      ],
    },
    {
      title: "3. Upfront payments and commencement of work",
      paragraphs: [
        "Certain services require an upfront payment before work begins.",
        "An upfront payment authorizes and enables The Linkage Digital to begin the agreed project or service. Once payment has been received, we may immediately begin activities including discovery, planning, research, strategy, design, development, account setup, campaign preparation, content preparation, production, or other work associated with the agreed scope.",
        "Where applicable, we may provide the Client with an initial concept, design, draft, demonstration, sample, strategy, campaign setup, website work, or other preliminary deliverable for review and feedback.",
        "An upfront payment is not automatically refundable merely because the Client later decides not to continue with the project.",
        "Once work has commenced, any approved refund may be reduced to account for work already performed and costs already incurred or committed.",
      ],
    },
    {
      title: "4. Services not yet started",
      paragraphs: [
        "If a refund is requested within the applicable 7-day period, before work has started, and before we have committed non-refundable third-party expenses, we may approve a refund of amounts paid, less any reasonable administrative, processing, or transaction charges already incurred.",
        "A project is considered started when we begin discovery, planning, research, design, development, account setup, strategy, production, campaign preparation, content preparation, or any other work connected with the agreed scope.",
      ],
    },
    {
      title: "5. Initial concepts, drafts, demonstrations, and client review",
      paragraphs: [
        "For website-development and digital-service projects, we may provide an initial concept, draft, mockup, design, demonstration, campaign setup, strategy, or other preliminary work for the Client's review.",
        "The purpose of providing an initial deliverable is to allow the Client to review the direction of the project and provide feedback or requested revisions in accordance with the agreed scope.",
        "The presentation of an initial concept, draft, demonstration, or other project work does not create an automatic right to a full refund.",
        "If the Client requests cancellation after work has commenced or after project materials have been prepared or presented, any refund will be evaluated based on the work performed and costs incurred through the cancellation date.",
        "Where the agreed scope includes revisions, reasonable revisions will be handled in accordance with that scope.",
      ],
    },
    {
      title: "6. Partially completed services",
      paragraphs: [
        "When work has started but is not complete, any refund will be assessed based on the value of work performed and expenses incurred through the cancellation date.",
        "This may include, without limitation:",
      ],
      bullets: [
        "Discovery and project planning",
        "Client meetings and consultations",
        "Research and strategy",
        "Website architecture and planning",
        "Design concepts and mockups",
        "Website development",
        "Website customization and add-ons",
        "Content preparation",
        "Search engine optimization work",
        "Google Ads or other advertising campaign setup",
        "Marketing strategy and campaign preparation",
        "Account and platform setup",
        "Creative production",
        "Reporting and analysis",
        "Project management",
        "Revisions or other work performed at the Client's request",
      ],
      afterBullets: [
        "If a refund is approved, we will communicate the applicable calculation and any amount remaining after completed work and non-refundable costs are deducted.",
      ],
    },
    {
      title: "7. Completed, delivered, or substantially performed services",
      paragraphs: [
        "Fees for services that have been completed, delivered, launched, published, or substantially performed are generally non-refundable.",
        "This includes, without limitation:",
      ],
      bullets: [
        "Completed website-development milestones",
        "Completed website designs",
        "Delivered website pages or features",
        "Website add-ons or integrations that have been completed",
        "Completed strategy work",
        "Completed marketing work",
        "Advertising campaign setup or management already performed",
        "Completed creative assets",
        "Delivered reports",
        "Completed video or other media work",
        "Services that have already been provided or consumed",
      ],
      afterBullets: [
        "If you believe a delivered item does not match the agreed scope, please contact us promptly so that we can review the concern against the written scope and, where appropriate, address it through the applicable revision, correction, or remediation process.",
      ],
    },
    {
      title: "8. Client approvals and feedback",
      paragraphs: [
        "Clients are responsible for reviewing project materials and providing timely feedback, approvals, content, access credentials, and other information reasonably necessary for completion of the agreed services.",
        "Where a Client approves a concept, design, draft, campaign direction, or other project milestone, work may proceed based on that approval.",
        "Delays caused by missing Client information, approvals, feedback, content, or access do not automatically create a right to a refund.",
      ],
    },
    {
      title: "9. Third-party costs",
      paragraphs: [
        "Third-party costs are non-refundable once purchased, committed, or used, unless the relevant third party independently provides a refund.",
        "These costs may include:",
      ],
      bullets: [
        "Domain registration, renewal, transfer, and redemption fees",
        "Hosting, email, software, subscription, and platform fees",
        "Paid plugins, themes, stock assets, fonts, and software licenses",
        "Advertising spend",
        "Google Ads or other media purchases",
        "Sponsored placements",
        "External contractors",
        "Third-party services and integrations",
        "Transaction or payment-processing fees",
        "Other third-party expenses approved by the Client",
      ],
      afterBullets: [
        "Where these costs have already been incurred or committed on the Client's behalf, they may be deducted from any approved refund.",
      ],
    },
    {
      title: "10. Marketing and advertising services",
      paragraphs: [
        "Payments for marketing services may cover planning, strategy, campaign setup, account configuration, creative preparation, management, optimization, reporting, and other work performed by The Linkage Digital.",
        "Advertising spend paid to Google, Meta, or another advertising platform is separate from our service fees where applicable.",
        "Advertising results, including leads, sales, clicks, impressions, conversions, or revenue, are not guaranteed unless expressly stated in a separate written agreement.",
        "Once marketing work or campaign management has been performed, the corresponding service fees are generally non-refundable.",
        "Unused third-party advertising funds may be subject to the policies and refund procedures of the relevant advertising platform.",
      ],
    },
    {
      title: "11. Cancellation after work has started",
      paragraphs: [
        "If the Client chooses to cancel a project or service after work has started, cancellation does not automatically entitle the Client to a full refund.",
        "We may retain or deduct amounts corresponding to:",
      ],
      bullets: [
        "Work already performed",
        "Deliverables already created or provided",
        "Services already delivered",
        "Approved revisions or additional work",
        "Third-party costs already incurred or committed",
        "Advertising or media spend already used or committed",
        "Reasonable administrative or transaction costs already incurred",
      ],
      afterBullets: [
        "Any approved refund will be calculated in accordance with this policy.",
      ],
    },
    {
      title: "12. Requesting a refund",
      paragraphs: [
        "Refund requests must be submitted in writing to sales@thelinkagedigital.com.",
        "Please include:",
      ],
      bullets: [
        "Your full name",
        "Business name, if applicable",
        "Project or service name",
        "Invoice or payment reference",
        "Date of payment",
        "Amount paid",
        "A short explanation of the refund request",
      ],
      afterBullets: [
        "We may request additional information or documentation necessary to review the request.",
        "We aim to acknowledge refund requests within five business days and will provide a decision or status update as soon as reasonably possible.",
        "Approved refunds are returned to the original payment method where practical and are typically processed within 10 business days after approval.",
        "Your bank, card issuer, or financial institution may require additional time to post the refund.",
      ],
    },
    {
      title: "13. Payment disputes and billing concerns",
      paragraphs: [
        "If you have a concern about a payment, service, deliverable, or project, please contact us directly at sales@thelinkagedigital.com so that we have an opportunity to review and resolve the matter.",
        "We are committed to reviewing legitimate billing and service concerns fairly and in good faith.",
        "Nothing in this section prevents a Client from exercising any rights available under applicable law.",
      ],
    },
    {
      title: "14. Separate written agreements",
      paragraphs: [
        "If a separate written agreement, proposal, statement of work, order form, or service agreement contains specific refund, cancellation, or payment terms that expressly apply to the purchased service, those terms may govern to the extent they conflict with this general Refund Policy.",
      ],
    },
    {
      title: "15. Policy changes",
      paragraphs: [
        "We may update this Refund Policy from time to time to reflect changes to our services, business practices, or applicable requirements.",
        "The version of this policy displayed on our website at the time of a new purchase will generally apply to that purchase, subject to applicable law and any separate written agreement governing the services.",
      ],
    },
  ],
};

const CANCELLATION: PolicyDocument = {
  eyebrow: "Legal & Policies",
  title: "Cancellation Policy",
  description: "How The Linkage Digital handles cancellations for custom digital, creative, marketing, and advertising services.",
  path: "/cancellation-policy",
  intro: "This Cancellation Policy explains how cancellations of services provided by The Linkage Digital (\"The Linkage Digital,\" \"we,\" \"us,\" or \"our\") are handled. Our services include website development, website design, website modifications and add-ons, digital marketing, Google Ads management, strategy, creative services, and other related digital services. This policy should be read together with our Refund Policy and Terms and Conditions.",
  lastUpdated: "August 21, 2026",
  sections: [
    {
      title: "1. Cancellation requests",
      paragraphs: [
        "A Client may request cancellation of a service by contacting us in writing.",
        "Cancellation requests may be submitted through the communication channel normally being used for the project, including:",
      ],
      bullets: [
        "SMS or business messaging",
        "WhatsApp",
        "Facebook Messenger",
        "Email",
        "Other written communication channels used by The Linkage Digital",
      ],
      afterBullets: [
        "For clarity, The Linkage Digital does not require every customer to sign a separate formal contract or receive a separate contract by email for a service to be purchased or for project communications to occur.",
        "Invoices, payment records, payment links, written communications, project instructions, approvals, revisions, and other documented communications may be used to establish and document the services requested and the parties' communications concerning the project, subject to applicable law.",
      ],
    },
    {
      title: "2. Seven-day refund request period",
      paragraphs: [
        "Refund requests are generally subject to the **7-calendar-day refund request period** described in our Refund Policy.",
        "The 7-day period begins on the applicable payment date.",
        "A cancellation request submitted within seven days does not automatically result in a full refund.",
        "Please refer to our Refund Policy for the detailed rules governing refund eligibility.",
      ],
    },
    {
      title: "3. Cancellation before work begins",
      paragraphs: [
        "If a Client requests cancellation before work has started and before non-refundable third-party expenses have been incurred or committed, we may approve a refund in accordance with our Refund Policy.",
        "Reasonable administrative or transaction costs already incurred may be deducted where applicable.",
      ],
    },
    {
      title: "4. Cancellation after work begins",
      paragraphs: [
        "Our services are often custom and may begin shortly after payment.",
        "Once we begin discovery, planning, research, design, development, account setup, marketing preparation, campaign setup, content preparation, production, or other project work, cancellation does not automatically entitle the Client to a full refund.",
        "The amount, if any, that may be refunded will be determined based on:",
      ],
      bullets: [
        "Work already performed",
        "Deliverables already prepared or delivered",
        "Client-requested revisions or additional work",
        "Project management and consultation time",
        "Third-party expenses",
        "Advertising or media expenses",
        "Other reasonable costs incurred or committed for the project",
      ],
    },
    {
      title: "5. Initial concepts and project demonstrations",
      paragraphs: [
        "Where appropriate, we may provide an initial concept, design, draft, demonstration, sample, website work, campaign setup, strategy, or other preliminary work for Client review.",
        "Once such work has been prepared or performed, the Client's decision not to continue with the project does not automatically create a right to a full refund.",
        "The Client may provide feedback or request revisions according to the agreed scope communicated for the project.",
      ],
    },
    {
      title: "6. Completed services",
      paragraphs: [
        "Services that have been completed, delivered, launched, published, or substantially performed are generally non-refundable.",
        "This includes completed website work, completed designs, completed marketing work, campaign management already performed, delivered creative assets, reports, strategy work, and other services already provided.",
      ],
    },
    {
      title: "7. Third-party costs",
      paragraphs: [
        "Third-party expenses are generally non-refundable once purchased, committed, or used.",
        "These may include:",
      ],
      bullets: [
        "Domains",
        "Hosting",
        "Email services",
        "Software subscriptions",
        "Plugins",
        "Themes",
        "Stock assets",
        "Fonts",
        "Software licenses",
        "Advertising spend",
        "Google Ads or other media purchases",
        "Sponsored placements",
        "External contractors",
        "Third-party integrations",
        "Other approved third-party services",
      ],
      afterBullets: [
        "If a third party independently provides a refund, we may pass that refund through to the Client where appropriate.",
      ],
    },
    {
      title: "8. Client inactivity",
      paragraphs: [
        "Clients are expected to provide timely feedback, approvals, content, access, credentials, and other information necessary for project completion.",
        "If a Client becomes unresponsive or fails to provide necessary information for an extended period, project timelines may be delayed.",
        "Client inactivity does not automatically create a right to a refund for work already performed or costs already incurred.",
      ],
    },
    {
      title: "9. Marketing and advertising cancellations",
      paragraphs: [
        "If marketing or advertising services are cancelled after campaign setup, management, optimization, creative preparation, strategy, or other work has begun, fees for services already performed are generally non-refundable.",
        "Advertising spend already paid to advertising platforms may also be non-refundable depending on the applicable platform's policies.",
      ],
    },
    {
      title: "10. Cancellation confirmation",
      paragraphs: [
        "When a cancellation is approved, we may confirm the cancellation and any applicable refund amount through the communication channel used for the project.",
        "The Client should retain the cancellation confirmation for their records.",
      ],
    },
    {
      title: "11. Payment disputes",
      paragraphs: [
        "If a Client has a concern regarding a payment, cancellation, refund, or service, we encourage the Client to contact us directly so that we have an opportunity to review and resolve the matter.",
        "Nothing in this policy prevents a Client from exercising rights available under applicable law.",
      ],
    },
    {
      title: "12. Contact",
      paragraphs: [
        "Cancellation and refund requests may be submitted to:",
        "sales@thelinkagedigital.com",
        "or through the written communication channel being used for the relevant project.",
      ],
    },
  ],
};

const PRIVACY: PolicyDocument = {
  eyebrow: "Legal & Policies",
  title: "Privacy Policy",
  description: "How The Linkage Digital respects, uses, shares, and protects the information provided through our website and services.",
  path: "/privacy-policy",
  intro: "The Linkage Digital respects your privacy and is committed to protecting the information you provide when you visit our website, contact us, purchase our services, or communicate with our team. This Privacy Policy explains what information we may collect, how we use it, how we may share it, and the choices available to you.",
  lastUpdated: "August 21, 2026",
  sections: [
    {
      title: "1. Information we collect",
      paragraphs: [
        "Depending on how you interact with us, we may collect information such as:",
      ],
      afterBullets: [
        "We do not intentionally collect more personal information than reasonably necessary to provide our services and operate our business.",
      ],
      bullets: [
        "Name",
        "Business name",
        "Email address",
        "Telephone or mobile number",
        "Billing information",
        "Payment and transaction information",
        "Website or domain information",
        "Information about your business or project",
        "Project requirements and specifications",
        "Information you voluntarily provide to us",
        "Messages and communications exchanged with our team",
        "Files, images, documents, logos, content, and other materials provided for a project",
        "Information submitted through forms on our website",
        "Information collected through cookies, analytics, and similar technologies",
      ],
    },
    {
      title: "2. Communications and customer records",
      paragraphs: [
        "We may communicate with customers through channels including:",
      ],
      afterBullets: [
        "Communications may contain information about project requirements, approvals, revisions, instructions, payments, services, deliverables, or other matters related to the customer relationship.",
        "Where permitted by applicable law, we may retain these communications as business records for purposes including providing services, documenting customer instructions and approvals, resolving disputes, maintaining accounting records, preventing fraud, and responding to payment disputes or chargebacks.",
      ],
      bullets: [
        "SMS and business messaging systems",
        "WhatsApp",
        "Facebook Messenger",
        "Email",
        "Telephone",
        "Website forms",
        "Other communication platforms used by the Client or The Linkage Digital",
      ],
    },
    {
      title: "3. How we use information",
      paragraphs: [
        "We may use information we collect to:",
      ],
      bullets: [
        "Provide and manage our services",
        "Communicate with customers",
        "Understand project requirements",
        "Prepare and deliver websites and digital services",
        "Provide marketing and advertising services",
        "Process payments",
        "Send invoices and payment links",
        "Respond to inquiries",
        "Manage customer accounts and projects",
        "Provide customer support",
        "Process refund or cancellation requests",
        "Maintain business and accounting records",
        "Prevent fraud and unauthorized transactions",
        "Respond to disputes, chargebacks, or payment investigations",
        "Improve our website and services",
        "Comply with legal and regulatory obligations",
      ],
    },
    {
      title: "4. Payment information",
      paragraphs: [
        "Payments may be processed by third-party payment processors, including Stripe or other payment providers we may use.",
        "We generally do not directly store complete payment-card numbers on our own systems. Payment information may be collected and processed by the applicable payment provider according to its own privacy policy and security practices.",
        "We may retain transaction information such as payment amount, payment date, invoice or transaction reference, payment status, and related customer information for business, accounting, customer-service, fraud-prevention, and dispute-resolution purposes.",
      ],
    },
    {
      title: "5. Third-party services",
      paragraphs: [
        "We may use third-party services to operate our business and provide services to customers.",
        "These may include, depending on the service:",
      ],
      afterBullets: [
        "These providers may process information according to their own terms and privacy policies.",
      ],
      bullets: [
        "Payment processors",
        "Website hosting providers",
        "Domain registrars",
        "Advertising platforms",
        "Analytics providers",
        "Communication platforms",
        "Customer-management or business software",
        "Software and technology providers",
        "Cloud storage providers",
        "Contractors or service providers assisting with project delivery",
      ],
    },
    {
      title: "6. Advertising and marketing information",
      paragraphs: [
        "Where we provide digital marketing services, information may be shared with advertising or marketing platforms as necessary to perform the requested services.",
        "For example, a Client may authorize us to work with advertising platforms such as Google or Meta.",
        "The information processed by those platforms is subject to their respective policies and terms.",
      ],
    },
    {
      title: "7. Cookies and analytics",
      paragraphs: [
        "Our website may use cookies, analytics tools, pixels, or similar technologies to understand website traffic, improve functionality, measure advertising performance, and improve the user experience.",
        "You may be able to control certain cookies through your browser or device settings.",
        "Disabling certain cookies may affect some website functionality.",
      ],
    },
    {
      title: "8. Information sharing",
      paragraphs: [
        "We do not sell your personal information as a business practice.",
        "We may share information with service providers, contractors, payment processors, technology providers, advertising platforms, professional advisers, or other parties when reasonably necessary to operate our business or provide requested services.",
        "We may also disclose information when reasonably necessary to:",
      ],
      bullets: [
        "Comply with applicable law",
        "Respond to lawful requests",
        "Protect our rights or property",
        "Investigate fraud or unauthorized activity",
        "Resolve payment disputes or chargebacks",
        "Protect customers, employees, contractors, or others",
        "Enforce applicable agreements or policies",
      ],
    },
    {
      title: "9. Customer-provided content",
      paragraphs: [
        "If you provide us with photographs, logos, text, videos, credentials, documents, business information, or other materials for a project, we may use those materials as reasonably necessary to provide the requested services.",
        "You are responsible for ensuring that you have the necessary rights or authorization to provide materials to us for use in the project.",
      ],
    },
    {
      title: "10. Data retention",
      paragraphs: [
        "We may retain information for as long as reasonably necessary for legitimate business purposes, including providing services, maintaining financial and accounting records, resolving disputes, preventing fraud, complying with legal obligations, and maintaining appropriate business records.",
        "The length of retention may vary depending on the type of information and the reason it was collected.",
      ],
    },
    {
      title: "11. Security",
      paragraphs: [
        "We take reasonable measures designed to protect information against unauthorized access, misuse, loss, or disclosure.",
        "However, no method of electronic transmission or storage can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "12. Children's information",
      paragraphs: [
        "Our services are intended for businesses and adults. We do not knowingly seek personal information from children who are not legally able to use our services.",
        "If you believe a child has provided personal information to us, please contact us so that we can review and address the matter.",
      ],
    },
    {
      title: "13. Your choices and requests",
      paragraphs: [
        "Depending on applicable law, you may have rights concerning your personal information, including rights to request access, correction, deletion, or other treatment of your information.",
        "Requests may be submitted to:",
        "sales@thelinkagedigital.com",
        "We may need to verify the identity of the person making a request before providing or modifying information.",
      ],
    },
    {
      title: "14. Third-party websites",
      paragraphs: [
        "Our website or communications may contain links to third-party websites or services.",
        "We are not responsible for the privacy practices, security, or content of third-party websites.",
        "You should review the privacy policies of third-party services before providing them with personal information.",
      ],
    },
    {
      title: "15. Changes to this Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time.",
        "When we make changes, we may update the \"Last updated\" date shown at the beginning of this policy.",
      ],
    },
    {
      title: "16. Contact us",
      paragraphs: [
        "If you have questions about this Privacy Policy or how we handle personal information, contact:",
        "The Linkage Digital",
        "Email: sales@thelinkagedigital.com",
      ],
    },
  ],
};

function renderPolicyText(text: string) {
  const email = "sales@thelinkagedigital.com";
  const parts = text.split(/(\*\*[^*]+\*\*|sales@thelinkagedigital\.com)/g);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part === email) {
      return (
        <a key={`${part}-${index}`} href="mailto:sales@thelinkagedigital.com" className="font-medium text-[#8B0AB4] underline underline-offset-2 hover:text-[#121212]">
          {email}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function PolicyPage({ document }: { document: PolicyDocument }) {
  useSEO({
    title: `${document.title} | The Linkage Digital`,
    description: document.description,
    keywords: `The Linkage Digital, ${document.title.toLowerCase()}, digital agency policies`,
    ogTitle: `${document.title} | The Linkage Digital`,
    ogDescription: document.description,
    canonicalUrl: `https://thelinkagedigital.com${document.path}`,
  });

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />
      <main>
        <section className="bg-[#171717] pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-[1100px] mx-auto px-6">
            <p className="font-kanit text-[#d79bea] text-xs md:text-sm font-medium uppercase tracking-[0.2em] mb-5">
              {document.eyebrow}
            </p>
            <h1 className="font-teko font-bold text-white uppercase text-5xl leading-[0.9] md:text-7xl lg:text-8xl max-w-3xl">
              {document.title}
            </h1>
            <div className="w-28 h-1 bg-[#8B0AB4] mt-7 mb-6" />
            <p className="font-kanit text-white/75 text-base leading-relaxed md:text-lg max-w-2xl">
              {document.description}
            </p>
          </div>
        </section>

        <section className="bg-[#F9F9F9] py-10 md:py-14">
          <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-kanit text-[#555] text-sm md:text-base">{document.intro ?? "Please read this policy carefully before using our services."}</p>
            <p className="font-kanit text-[#555] text-sm md:text-base"><span className="font-medium text-[#121212]">Last updated:</span> {document.lastUpdated ?? LAST_UPDATED}</p>
          </div>
        </section>

        <section className="py-14 md:py-20 lg:py-24">
          <div className="max-w-[900px] mx-auto px-6 space-y-7 md:space-y-9">
            {document.sections.map((section) => (
              <article key={section.title} className="bg-white border border-[#ECECEC] rounded-xl p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgba(18,18,18,0.04)]">
                <h2 className="font-teko font-bold text-[#121212] uppercase text-[26px] leading-none md:text-[32px] mb-5">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-kanit text-[#555] text-[15px] leading-[1.75] md:text-base">
                      {renderPolicyText(paragraph)}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-kanit text-[#555] text-[15px] leading-[1.65] md:text-base">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8B0AB4]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.afterBullets && (
                  <div className="mt-5 space-y-4">
                    {section.afterBullets.map((paragraph) => (
                      <p key={paragraph} className="font-kanit text-[#555] text-[15px] leading-[1.75] md:text-base">
                        {renderPolicyText(paragraph)}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {document.closing && (
          <section className="bg-[#F9F9F9] border-t border-[#ECECEC] py-12 md:py-16">
            <div className="max-w-[900px] mx-auto px-6">
              <p className="font-teko font-bold text-[#121212] uppercase text-3xl leading-none md:text-4xl">{document.closing.organization}</p>
              <p className="font-teko font-bold text-[#8B0AB4] uppercase text-2xl leading-none mt-2 md:text-3xl">{document.title}</p>
              <p className="font-kanit text-[#555] text-[15px] mt-5 md:text-base"><span className="font-medium text-[#121212]">Last updated:</span> {document.lastUpdated ?? LAST_UPDATED}</p>
              <p className="font-kanit text-[#555] text-[15px] mt-2 md:text-base"><span className="font-medium text-[#121212]">Refund requests:</span> <a href="mailto:sales@thelinkagedigital.com" className="font-medium text-[#8B0AB4] underline underline-offset-2 hover:text-[#121212]">{document.closing.contact}</a></p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export function TermsAndConditions() {
  return <PolicyPage document={TERMS} />;
}

export function RefundPolicy() {
  return <PolicyPage document={REFUND} />;
}

export function CancellationPolicy() {
  return <PolicyPage document={CANCELLATION} />;
}

export function PrivacyPolicy() {
  return <PolicyPage document={PRIVACY} />;
}
