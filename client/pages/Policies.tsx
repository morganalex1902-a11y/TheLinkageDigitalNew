import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PolicyDocument = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  sections: PolicySection[];
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
  description: "A clear explanation of how we review refund requests for digital and creative services.",
  path: "/refund-policy",
  sections: [
    {
      title: "1. Our approach",
      paragraphs: [
        "Digital agency work is custom, time-based, and often begins with planning, research, design, technical setup, or platform commitments. Refund decisions therefore depend on the service purchased, the project stage, work already completed, and costs already committed.",
        "We review requests fairly and in good faith. This policy does not guarantee a refund for every service or circumstance.",
      ],
    },
    {
      title: "2. Services not yet started",
      paragraphs: [
        "If you request a refund before work has started and before we have committed non-refundable third-party expenses, we will review the request and may refund amounts paid, less any reasonable administrative or transaction charges already incurred.",
        "A project is considered started when we begin discovery, planning, research, design, development, account setup, strategy, production, or any other work connected with your scope.",
      ],
    },
    {
      title: "3. Partially completed services",
      paragraphs: [
        "When work has started but is not complete, any refund is assessed based on the value of work performed and expenses incurred through the cancellation date. This can include discovery, meetings, research, concepts, design, development, content preparation, campaign setup, reporting, and project management.",
        "If a refund is approved, we will communicate the calculation and any amount remaining after completed work and non-refundable costs are deducted.",
      ],
    },
    {
      title: "4. Completed services",
      paragraphs: [
        "Fees for completed, delivered, launched, published, or otherwise performed services are generally non-refundable. This includes completed design or development milestones, strategy work, completed creative assets, launched websites, campaign management already performed, and delivered reports or video work.",
        "If you believe a delivered item does not match the agreed scope, please contact us promptly. We will review the concern against the written scope and, where appropriate, address it through the agreed revision process.",
      ],
    },
    {
      title: "5. Third-party costs",
      paragraphs: [
        "Third-party costs are non-refundable once purchased, committed, or used, unless the third party independently provides a refund. These may include:",
      ],
      bullets: [
        "Domain registration, renewal, transfer, and redemption fees",
        "Hosting, email, software, subscription, and platform fees",
        "Paid plugins, themes, stock assets, fonts, and software licenses",
        "Advertising spend, media purchases, and sponsored placements",
        "External contractors, services, integrations, or transaction fees approved by Client",
      ],
    },
    {
      title: "6. Requesting a refund",
      paragraphs: [
        "Send refund requests in writing to sales@thelinkagedigital.com with your name, business name, project name, invoice or payment reference, and a short explanation of the request. We may request further information to complete our review.",
        "We aim to acknowledge refund requests within five business days and will provide a decision or a status update as soon as reasonably possible. Approved refunds are returned to the original payment method where practical and are typically processed within 10 business days after approval; your financial institution may take additional time to post the funds.",
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
  description: "How The Linkage Digital may collect, use, store, and share information through our website and services.",
  path: "/privacy-policy",
  sections: [
    {
      title: "1. Information we may collect",
      paragraphs: [
        "We may collect information you provide when you contact us, request a proposal, use our website, or engage our services. This may include your name, email address, phone number, business information, website and project information, communications, and other details relevant to your inquiry or project.",
        "Payment-related information may be handled by payment processors or financial institutions. We do not intentionally collect more payment information than is necessary to process or manage a transaction.",
      ],
    },
    {
      title: "2. Website usage, cookies, and analytics",
      paragraphs: [
        "When you use our website, we may receive technical and usage information such as IP address, browser type, device information, pages viewed, referring pages, approximate location, and interaction data. We may use cookies and similar technologies to help our website function, understand usage, and improve our services.",
        "Your browser may allow you to limit or disable cookies. Some website features may not work as intended if cookies are disabled.",
      ],
    },
    {
      title: "3. How we use information",
      paragraphs: [
        "We may use information to respond to inquiries, prepare proposals, provide and support services, manage projects, process payments, communicate about service-related matters, improve our website and operations, protect our rights, and comply with legal obligations.",
        "Where appropriate, we may use contact information to share relevant service updates or marketing communications. You can opt out of marketing emails by following the unsubscribe instructions in the message or by contacting us.",
      ],
    },
    {
      title: "4. Service providers and third parties",
      paragraphs: [
        "We may share information with trusted service providers that help us operate our website, manage projects, host services, process payments, communicate with customers, provide analytics, or manage advertising. These providers may process information only as needed to provide their services to us or as otherwise permitted by their own terms.",
        "We may also disclose information where required by law, to protect rights and safety, or in connection with a business transaction such as a merger, acquisition, or sale of assets.",
      ],
    },
    {
      title: "5. Advertising and analytics platforms",
      paragraphs: [
        "We may use analytics and advertising platforms to understand website performance, measure campaigns, and show or manage advertising. These platforms may use their own cookies, identifiers, and privacy practices. Your interactions with third-party platforms are subject to their applicable policies.",
      ],
    },
    {
      title: "6. Data security and retention",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational measures intended to protect information from unauthorized access, loss, misuse, or alteration. No system or transmission can be guaranteed completely secure.",
        "We retain information for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining records, resolving disputes, enforcing agreements, and meeting legal or accounting obligations.",
      ],
    },
    {
      title: "7. Your choices and requests",
      paragraphs: [
        "You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable legal and business recordkeeping requirements. You may also ask questions about our information practices or request to stop receiving marketing communications.",
        "To make a request, email sales@thelinkagedigital.com. We may need to verify your identity before acting on a request.",
      ],
    },
    {
      title: "8. Children's privacy",
      paragraphs: [
        "Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can review and take appropriate action.",
      ],
    },
    {
      title: "9. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable requirements. The updated version will be posted on this page with a revised last updated date.",
      ],
    },
    {
      title: "10. Contact us about privacy",
      paragraphs: [
        "For privacy questions or requests, contact The Linkage Digital at sales@thelinkagedigital.com, call (512) 200-3815, or write to 5900 Balcones Dr Ste 10429, Austin, TX 78731, United States.",
      ],
    },
  ],
};

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
            <p className="font-kanit text-[#555] text-sm md:text-base">Please read this policy carefully before using our services.</p>
            <p className="font-kanit text-[#555] text-sm md:text-base"><span className="font-medium text-[#121212]">Last updated:</span> {LAST_UPDATED}</p>
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
                      {paragraph}
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
              </article>
            ))}
          </div>
        </section>
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
