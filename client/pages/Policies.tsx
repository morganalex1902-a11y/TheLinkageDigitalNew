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
  title: "Terms & Conditions",
  description: "The terms that apply when you engage The Linkage Digital for digital, creative, and marketing services.",
  path: "/terms-and-conditions",
  sections: [
    {
      title: "1. Acceptance and services",
      paragraphs: [
        "These Terms & Conditions apply to services provided by The Linkage Digital (\"we\", \"us\", or \"our\"). By accepting a proposal, statement of work, invoice, or other written agreement, you (\"Client\") agree to these terms together with any project-specific terms we provide.",
        "Our services may include website design and development, website maintenance, branding and graphic design, search engine optimization, social media marketing and management, digital advertising, video editing, creative services, domain registration, hosting, and other digital or creative services agreed in writing.",
      ],
    },
    {
      title: "2. Purchasing services and project scope",
      paragraphs: [
        "Services are purchased through an accepted proposal, statement of work, service package, or written confirmation from us. The agreed document will identify the scope, deliverables, fees, payment schedule, and any project-specific assumptions.",
        "Work outside the agreed scope is a change request. We will explain the expected impact on fees, timing, and deliverables before beginning that additional work. We are not required to perform out-of-scope work until the change is approved in writing.",
      ],
    },
    {
      title: "3. Client responsibilities",
      paragraphs: [
        "A successful project depends on timely collaboration. Client is responsible for supplying accurate content, images, brand materials, credentials, platform access, approvals, and other information reasonably needed for the work. Client represents that it has the necessary rights to all materials it provides.",
        "Client will designate an authorized contact who can give consolidated feedback and approvals. Delayed, incomplete, or changing information may affect the project schedule and may require a revised scope or timeline.",
      ],
    },
    {
      title: "4. Timelines and approvals",
      paragraphs: [
        "Project dates are estimates unless a written agreement expressly states otherwise. We will use reasonable efforts to meet agreed milestones, but delivery depends on timely Client feedback, third-party services, and other factors outside our control.",
        "If approvals, content, access, or feedback are delayed, we may pause the work and adjust delivery dates. Work may also be delayed by technical issues, third-party platform changes, force majeure events, or requests that materially alter the original scope.",
      ],
    },
    {
      title: "5. Revisions and change requests",
      paragraphs: [
        "Any included revision rounds will be described in the applicable proposal or statement of work. Revisions should address the approved direction and scope. Requests for a new direction, additional features, new pages, or materially different creative work may be treated as change requests.",
        "We may quote additional fees or timelines for change requests. Feedback delivered after a milestone has been approved may require rework and may be billed separately.",
      ],
    },
    {
      title: "6. Fees and payment",
      paragraphs: [
        "Client will pay the fees and deposits stated in the accepted proposal or invoice. Deposits reserve project capacity and allow work to begin. Unless otherwise agreed in writing, invoices are due on receipt and final deliverables may be withheld until all outstanding balances are paid.",
        "Client is responsible for applicable taxes, bank charges, and approved third-party costs. If an invoice remains unpaid, we may pause work, suspend access to services we manage, or require payment before resuming. Late payments may delay delivery.",
      ],
    },
    {
      title: "7. Ownership and intellectual property",
      paragraphs: [
        "Client retains ownership of materials it supplies. Upon full payment of all amounts due, Client receives ownership of the final project-specific deliverables identified in the agreement, excluding third-party materials and our pre-existing tools, methods, templates, code libraries, processes, and know-how.",
        "We retain ownership of our pre-existing and reusable materials. To the extent they are incorporated into a final deliverable, Client receives a non-exclusive right to use them only as part of that deliverable. We may display completed work in our portfolio unless Client and we agree otherwise in writing.",
      ],
    },
    {
      title: "8. Third-party services and platforms",
      paragraphs: [
        "Websites and campaigns may rely on third-party services such as hosting providers, domain registrars, payment processors, plugins, software licenses, stock assets, analytics tools, advertising platforms, and integrations. Their availability, policies, pricing, and performance are controlled by the applicable third party.",
        "Where Client purchases or approves third-party services, Client is responsible for their ongoing fees and compliance with their terms. We are not responsible for outages, data loss, policy changes, account suspensions, or other actions by third parties.",
      ],
    },
    {
      title: "9. Launch and delivery",
      paragraphs: [
        "Before launch, Client is responsible for reviewing the final deliverables and confirming that content, functionality, and legal notices meet Client's requirements. Client remains responsible for its business operations, product claims, accessibility obligations, privacy disclosures, and regulatory compliance.",
        "After a website or campaign is launched, requests for updates are handled under the agreed maintenance or support arrangement, if any. Delivery, launch, or handover does not include ongoing support unless it is expressly included in writing.",
      ],
    },
    {
      title: "10. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, The Linkage Digital is not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, lost business opportunities, or interruption of business arising from our services.",
        "Our total liability for a claim related to services is limited to the fees actually paid by Client for the specific services giving rise to that claim during the three months before the event giving rise to the claim. Nothing in these terms limits liability that cannot legally be limited.",
      ],
    },
    {
      title: "11. Refusal, suspension, and termination",
      paragraphs: [
        "We may refuse, pause, or end services where a request is unlawful, unsafe, abusive, infringes another person's rights, creates a conflict of interest, requires undisclosed work, or where Client materially breaches these terms or fails to pay amounts due.",
        "Either party may end an ongoing project by written notice, subject to payment for work completed, committed costs, and any applicable cancellation terms. Sections intended to survive termination, including payment, intellectual property, and liability provisions, will continue to apply.",
      ],
    },
    {
      title: "12. Governing law and resolving concerns",
      paragraphs: [
        "These terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any dispute will first be addressed through good-faith discussion. If it cannot be resolved informally, the parties agree to the exclusive jurisdiction of the state and federal courts located in Texas, unless applicable law requires otherwise.",
        "For questions, concerns, or disputes, please contact us at sales@thelinkagedigital.com or call (512) 200-3815. Please include enough information for us to identify the relevant project and respond promptly.",
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
  description: "How project cancellations, deposits, completed work, and committed expenses are handled.",
  path: "/cancellation-policy",
  sections: [
    {
      title: "1. How to request cancellation",
      paragraphs: [
        "To request cancellation, contact us in writing at sales@thelinkagedigital.com. Please include the project name, the services you wish to cancel, and the effective date you are requesting. A cancellation request is not complete until we confirm receipt.",
        "We will review the current project status, work completed, payment history, and third-party commitments, then explain the next steps and any amounts that remain due or may be eligible for review under our Refund Policy.",
      ],
    },
    {
      title: "2. Cancellation before work begins",
      paragraphs: [
        "If cancellation is received before work begins and before third-party commitments are made, we will review any deposit under our Refund Policy. Any administrative, payment-processing, or committed third-party expenses may be deducted where applicable.",
      ],
    },
    {
      title: "3. Cancellation after work starts",
      paragraphs: [
        "If a project is cancelled after work has started, Client remains responsible for fees covering work completed through the effective cancellation date, together with approved expenses and third-party costs. We will not be required to continue work after cancellation.",
        "Deposits are applied to completed work and committed capacity. Whether any unused portion is refundable depends on the project stage and the value of work already performed.",
      ],
    },
    {
      title: "4. Cancellation after substantial completion",
      paragraphs: [
        "When substantial work has been completed, including approved milestones, delivered concepts, built functionality, launched assets, or performed campaign services, payments for that work are generally non-refundable. Any remaining unpaid balance for completed work remains due.",
        "Where appropriate, we may provide completed, paid-for deliverables in their current state after all amounts due have been received, subject to the ownership terms in the applicable agreement.",
      ],
    },
    {
      title: "5. Third-party expenses",
      paragraphs: [
        "Domains, hosting, software, paid plugins, licenses, advertising spend, stock assets, and other external services are subject to their own provider terms. Costs already paid, committed, or used are not refundable by us unless the provider returns them.",
      ],
    },
    {
      title: "6. Suspension or cancellation by The Linkage Digital",
      paragraphs: [
        "We may suspend or cancel a project if Client fails to provide required materials or approvals, does not pay invoices when due, becomes unresponsive for an extended period, asks us to undertake unlawful or inappropriate work, or materially breaches an agreement with us.",
        "If we suspend a project, delivery dates may change. If a project remains inactive or unpaid, we may close it after reasonable notice. Client remains responsible for completed work and committed costs.",
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
  const parts = text.split(email);

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <a href="mailto:sales@thelinkagedigital.com" className="font-medium text-[#8B0AB4] underline underline-offset-2 hover:text-[#121212]">
          {email}
        </a>
      )}
    </span>
  ));
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
