/* AfriCyberCore — shared "glass CTA card" footer.
   Replaces the existing <footer> on every page with one consistent design
   that borrows the hero's glass language (rounded card, dimmed glass video,
   frosted pills), tuned to sit on the dark pages.
   Also provides Privacy Policy / Terms of Service modal popups. */
(function () {
  var GLASS_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4';

  function pill(href, label, svg) {
    return '<a href="' + href + '" aria-label="' + label + '" class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all">' + svg + '</a>';
  }

  var iLinkedIn = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  var iX = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  var iMail = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';
  var chevron = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

  function link(href, text) {
    return '<li><a href="' + href + '" class="text-white/70 hover:text-white transition-colors">' + text + '</a></li>';
  }

  // ==================== Legal content ====================

  var PRIVACY_POLICY = '' +
    '<h2>Privacy Policy</h2>' +
    '<p class="acc-date">Effective Date: 1 January 2025 &nbsp;|&nbsp; Last Updated: 22 June 2026</p>' +

    '<h3>1. Introduction</h3>' +
    '<p>AfriCyberCore ("we", "us", "our") is a technology company registered and operating in Lagos, Nigeria, providing cybersecurity consulting, business automation, no-code web development, artificial intelligence products, and professional training services. We are committed to protecting your personal data in compliance with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong>, the <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong> as issued by the National Information Technology Development Agency (NITDA), and all other applicable Nigerian legislation governing data privacy.</p>' +
    '<p>This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you interact with our website, services, and products.</p>' +

    '<h3>2. Data Controller</h3>' +
    '<p>The data controller responsible for your personal data is:</p>' +
    '<p><strong>AfriCyberCore</strong><br/>Lagos, Nigeria<br/>Email: info@africybercore.com<br/>Phone: +234 (0) 810 681 8560</p>' +

    '<h3>3. Information We Collect</h3>' +
    '<p>We may collect the following categories of personal data:</p>' +
    '<p><strong>3.1 Information you provide directly:</strong></p>' +
    '<ul>' +
      '<li>Full name, email address, phone number, and business name when you fill out contact or consultation booking forms</li>' +
      '<li>Professional title, company size, and industry sector when you request consulting services</li>' +
      '<li>Payment and billing information when you purchase our services or products (processed through PCI-DSS compliant payment processors)</li>' +
      '<li>Training enrolment details, certifications, and course progress for our Training Academy</li>' +
      '<li>Communications, feedback, and correspondence you send to us</li>' +
    '</ul>' +
    '<p><strong>3.2 Information collected automatically:</strong></p>' +
    '<ul>' +
      '<li>Device information (browser type, operating system, screen resolution)</li>' +
      '<li>IP address and approximate geographic location</li>' +
      '<li>Pages visited, time spent, referring URLs, and click patterns</li>' +
      '<li>Cookies and similar tracking technologies (see Section 9)</li>' +
    '</ul>' +
    '<p><strong>3.3 Information from third parties:</strong></p>' +
    '<ul>' +
      '<li>Professional profile data from LinkedIn when you connect your account</li>' +
      '<li>Business information from publicly available sources for our consulting assessments</li>' +
    '</ul>' +

    '<h3>4. Legal Basis for Processing</h3>' +
    '<p>Under the NDPA 2023 and NDPR 2019, we process your personal data on the following lawful bases:</p>' +
    '<ul>' +
      '<li><strong>Consent:</strong> Where you have given clear, informed consent for specific processing activities (e.g., marketing communications, newsletter subscriptions).</li>' +
      '<li><strong>Contractual necessity:</strong> Where processing is necessary for the performance of a contract or to take pre-contractual steps at your request (e.g., delivering consulting services, fulfilling product orders).</li>' +
      '<li><strong>Legitimate interest:</strong> Where processing is necessary for our legitimate business interests, provided such interests do not override your fundamental rights (e.g., improving our services, fraud prevention, network security).</li>' +
      '<li><strong>Legal obligation:</strong> Where processing is required to comply with Nigerian law, including the Cybercrimes (Prohibition, Prevention, etc.) Act 2015, tax regulations, and regulatory reporting requirements.</li>' +
    '</ul>' +

    '<h3>5. How We Use Your Information</h3>' +
    '<p>We use the personal data we collect for the following purposes:</p>' +
    '<ul>' +
      '<li>To provide, maintain, and improve our cybersecurity consulting, automation, web development, AI products, and training services</li>' +
      '<li>To respond to enquiries and process consultation bookings</li>' +
      '<li>To conduct cybersecurity assessments and vulnerability analyses as contracted</li>' +
      '<li>To deliver personalised training content and track certification progress</li>' +
      '<li>To process payments and manage billing</li>' +
      '<li>To send service-related communications (updates, security alerts, maintenance notices)</li>' +
      '<li>To send marketing communications where you have opted in</li>' +
      '<li>To analyse usage patterns and improve our website and services</li>' +
      '<li>To detect, prevent, and address fraud, security incidents, and technical issues</li>' +
      '<li>To comply with legal and regulatory obligations under Nigerian law</li>' +
    '</ul>' +

    '<h3>6. Data Sharing and Disclosure</h3>' +
    '<p>We do not sell your personal data. We may share your information with:</p>' +
    '<ul>' +
      '<li><strong>Service providers:</strong> Trusted third-party vendors who assist us in operating our business (hosting providers, payment processors, analytics tools), bound by data processing agreements compliant with the NDPA 2023.</li>' +
      '<li><strong>Professional partners:</strong> Where necessary for delivering joint consulting or training engagements, with your prior consent.</li>' +
      '<li><strong>Legal authorities:</strong> Where required by Nigerian law, regulation, or court order, including cooperation with the Nigeria Data Protection Commission (NDPC), law enforcement agencies, or pursuant to the Cybercrimes Act 2015.</li>' +
      '<li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of such a transaction, with appropriate safeguards.</li>' +
    '</ul>' +

    '<h3>7. International Data Transfers</h3>' +
    '<p>Where we transfer personal data outside Nigeria, we ensure that adequate safeguards are in place as required by Section 43 of the NDPA 2023. This includes ensuring the recipient country provides an adequate level of data protection, or implementing appropriate contractual clauses and security measures. We will not transfer your data to any country that has not been assessed for adequacy by the NDPC without implementing supplementary measures.</p>' +

    '<h3>8. Data Retention</h3>' +
    '<p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by Nigerian law:</p>' +
    '<ul>' +
      '<li><strong>Client records and contracts:</strong> 6 years after the conclusion of our business relationship (in line with the Limitation Act and tax regulations)</li>' +
      '<li><strong>Training and certification records:</strong> Duration of certification validity plus 3 years</li>' +
      '<li><strong>Marketing consent records:</strong> Until you withdraw consent</li>' +
      '<li><strong>Website analytics data:</strong> 24 months, after which data is anonymised</li>' +
      '<li><strong>Security incident logs:</strong> 5 years as required by the Cybercrimes Act 2015</li>' +
    '</ul>' +
    '<p>After the retention period, data is securely deleted or irreversibly anonymised.</p>' +

    '<h3>9. Cookies and Tracking Technologies</h3>' +
    '<p>Our website uses cookies and similar technologies to enhance your browsing experience. We use:</p>' +
    '<ul>' +
      '<li><strong>Essential cookies:</strong> Required for the website to function (no consent needed)</li>' +
      '<li><strong>Analytics cookies:</strong> To understand how visitors interact with our website (collected with consent)</li>' +
      '<li><strong>Preference cookies:</strong> To remember your settings and preferences</li>' +
    '</ul>' +
    '<p>You may disable non-essential cookies through your browser settings. Disabling cookies may affect certain functionalities of our website.</p>' +

    '<h3>10. Your Rights</h3>' +
    '<p>Under the NDPA 2023 and NDPR 2019, you have the following rights:</p>' +
    '<ul>' +
      '<li><strong>Right of access:</strong> To request a copy of the personal data we hold about you</li>' +
      '<li><strong>Right to rectification:</strong> To request correction of inaccurate or incomplete data</li>' +
      '<li><strong>Right to erasure:</strong> To request deletion of your personal data, subject to legal retention requirements</li>' +
      '<li><strong>Right to restrict processing:</strong> To request limitation of processing in certain circumstances</li>' +
      '<li><strong>Right to data portability:</strong> To receive your data in a structured, commonly used format</li>' +
      '<li><strong>Right to object:</strong> To object to processing based on legitimate interest or for direct marketing</li>' +
      '<li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing</li>' +
    '</ul>' +
    '<p>To exercise any of these rights, please contact us at <strong>info@africybercore.com</strong>. We will respond within 30 days in accordance with the NDPA 2023.</p>' +

    '<h3>11. Data Security</h3>' +
    '<p>As a cybersecurity company, we implement industry-leading technical and organisational measures to protect your personal data, including:</p>' +
    '<ul>' +
      '<li>End-to-end encryption for data in transit (TLS 1.3) and at rest (AES-256)</li>' +
      '<li>Multi-factor authentication and role-based access controls</li>' +
      '<li>Regular security audits and penetration testing</li>' +
      '<li>Incident response and data breach notification procedures compliant with the NDPA 2023 (notification to the NDPC within 72 hours of becoming aware of a breach)</li>' +
      '<li>Staff training on data protection and information security best practices</li>' +
    '</ul>' +

    '<h3>12. Children\'s Privacy</h3>' +
    '<p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take immediate steps to delete such information.</p>' +

    '<h3>13. Complaints</h3>' +
    '<p>If you are dissatisfied with how we handle your personal data, you have the right to lodge a complaint with the <strong>Nigeria Data Protection Commission (NDPC)</strong>, the supervisory authority established under the NDPA 2023. You may also contact NITDA or seek redress through the Nigerian courts.</p>' +

    '<h3>14. Changes to This Policy</h3>' +
    '<p>We may update this Privacy Policy from time to time. Material changes will be communicated via our website or by email. Continued use of our services after such changes constitutes acceptance of the updated policy.</p>' +

    '<h3>15. Contact Us</h3>' +
    '<p>For any questions regarding this Privacy Policy or our data processing practices, please contact:</p>' +
    '<p><strong>AfriCyberCore — Data Protection Office</strong><br/>Lagos, Nigeria<br/>Email: info@africybercore.com<br/>Phone: +234 (0) 810 681 8560</p>';

  var TERMS_OF_SERVICE = '' +
    '<h2>Terms of Service</h2>' +
    '<p class="acc-date">Effective Date: 1 January 2025 &nbsp;|&nbsp; Last Updated: 22 June 2026</p>' +

    '<h3>1. Introduction and Acceptance</h3>' +
    '<p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", "your") and <strong>AfriCyberCore</strong> ("Company", "we", "us", "our"), a technology company registered and operating under the laws of the Federal Republic of Nigeria, with its principal office in Lagos, Nigeria.</p>' +
    '<p>By accessing our website, engaging our services, or purchasing our products, you agree to be bound by these Terms. If you do not agree, please do not use our services. These Terms are governed by Nigerian law, including the <strong>Federal Competition and Consumer Protection Act (FCCPA) 2018</strong>, the <strong>Companies and Allied Matters Act (CAMA) 2020</strong>, and all other applicable legislation.</p>' +

    '<h3>2. Definitions</h3>' +
    '<ul>' +
      '<li><strong>"Services"</strong> means the cybersecurity consulting, business automation solutions, no-code web development, artificial intelligence products, and professional training programmes offered by AfriCyberCore.</li>' +
      '<li><strong>"Deliverables"</strong> means all reports, code, software, configurations, documentation, training materials, and other outputs produced by AfriCyberCore in the course of providing Services.</li>' +
      '<li><strong>"Confidential Information"</strong> means all non-public technical, business, financial, and security information disclosed by either party during the engagement.</li>' +
      '<li><strong>"Platform"</strong> means the AfriCyberCore website, applications, dashboards, and digital tools made available to Clients.</li>' +
    '</ul>' +

    '<h3>3. Services We Provide</h3>' +
    '<p>AfriCyberCore offers the following categories of services:</p>' +
    '<ul>' +
      '<li><strong>Cybersecurity Consulting:</strong> Vulnerability assessments, penetration testing, security audits, incident response, compliance advisory, and managed security services.</li>' +
      '<li><strong>Business Automation:</strong> Workflow automation, process optimisation, system integration, and custom automation solutions.</li>' +
      '<li><strong>No-Code Web Development:</strong> Website design and development, web application builds, and digital platform creation using modern no-code/low-code technologies.</li>' +
      '<li><strong>AI Innovations:</strong> AI-powered products, machine learning solutions, intelligent automation, and data analytics tools.</li>' +
      '<li><strong>Training Academy:</strong> Professional training programmes, certification courses, workshops, and capacity-building services in cybersecurity and technology.</li>' +
    '</ul>' +

    '<h3>4. Client Obligations</h3>' +
    '<p>By engaging our Services, you agree to:</p>' +
    '<ul>' +
      '<li>Provide accurate, complete, and up-to-date information as required for service delivery</li>' +
      '<li>Cooperate with our team and provide timely access to systems, networks, and personnel as needed for cybersecurity assessments and consulting engagements</li>' +
      '<li>Obtain all necessary authorisations, licences, and consents before requesting penetration testing or security assessments on any systems</li>' +
      '<li>Use our Services solely for lawful purposes in accordance with Nigerian law, including the Cybercrimes (Prohibition, Prevention, etc.) Act 2015</li>' +
      '<li>Not use our cybersecurity tools, reports, or methodologies to attack, compromise, or gain unauthorised access to any third-party systems</li>' +
      '<li>Comply with all applicable data protection laws when providing us access to personal data for processing</li>' +
    '</ul>' +

    '<h3>5. Engagement and Payment Terms</h3>' +
    '<p><strong>5.1 Proposals and Scope:</strong> All consulting and development engagements are governed by a written proposal or statement of work ("SOW") that outlines the scope, timeline, deliverables, and fees. These Terms apply in addition to any SOW.</p>' +
    '<p><strong>5.2 Fees:</strong> Fees are as stated in the applicable SOW or product listing. Unless otherwise agreed, all fees are quoted in Nigerian Naira (NGN) and are exclusive of Value Added Tax (VAT) at the prevailing rate as required by the Federal Inland Revenue Service (FIRS).</p>' +
    '<p><strong>5.3 Payment:</strong> Invoices are due within 14 days of issuance unless otherwise agreed. Late payments attract interest at 2% per month on the outstanding balance, in accordance with applicable commercial practice under Nigerian law.</p>' +
    '<p><strong>5.4 Refunds:</strong> Service fees are generally non-refundable once work has commenced. Refunds for unused portions of pre-paid services may be granted at our discretion, less a reasonable administration fee. Product refunds are governed by the FCCPA 2018 consumer protection provisions.</p>' +

    '<h3>6. Intellectual Property</h3>' +
    '<p><strong>6.1 AfriCyberCore IP:</strong> All intellectual property rights in our pre-existing tools, frameworks, methodologies, software, training materials, and proprietary technologies remain the exclusive property of AfriCyberCore. Nothing in these Terms transfers ownership of our core intellectual property to you.</p>' +
    '<p><strong>6.2 Client Deliverables:</strong> Upon full payment, you are granted a non-exclusive, non-transferable licence to use Deliverables created specifically for your engagement. Custom code and configurations developed exclusively for you are assigned to you upon full payment, excluding any AfriCyberCore proprietary frameworks embedded therein.</p>' +
    '<p><strong>6.3 Client Data:</strong> You retain all rights in data and materials you provide to us. You grant AfriCyberCore a limited licence to use such materials solely for the purpose of delivering the contracted Services.</p>' +

    '<h3>7. Confidentiality</h3>' +
    '<p>Both parties agree to maintain the confidentiality of all Confidential Information received during the engagement. This obligation:</p>' +
    '<ul>' +
      '<li>Survives the termination of any engagement for a period of 5 years</li>' +
      '<li>Does not apply to information that is publicly available, independently developed, or required to be disclosed by Nigerian law or court order</li>' +
      '<li>Is especially critical for cybersecurity assessments — vulnerability reports, penetration test results, and security findings shall be treated as strictly confidential and shared only with authorised personnel designated by the Client</li>' +
    '</ul>' +

    '<h3>8. Cybersecurity-Specific Terms</h3>' +
    '<p><strong>8.1 Authorisation:</strong> You warrant that you have full authority to authorise any cybersecurity testing, assessment, or audit conducted by AfriCyberCore on your systems. You shall provide written authorisation before any testing commences.</p>' +
    '<p><strong>8.2 Scope Limitations:</strong> AfriCyberCore will conduct testing strictly within the agreed scope. We shall not be liable for any disruption to systems that falls within the normal and expected consequences of authorised security testing as described in the SOW.</p>' +
    '<p><strong>8.3 Responsible Disclosure:</strong> If our assessments reveal vulnerabilities in third-party systems or software, we will follow responsible disclosure practices in accordance with industry standards and Nigerian law.</p>' +
    '<p><strong>8.4 No Guarantee of Absolute Security:</strong> While we employ industry best practices, no cybersecurity solution can guarantee absolute protection. Our Services reduce risk but do not eliminate it entirely.</p>' +

    '<h3>9. AI Products and Automation</h3>' +
    '<p><strong>9.1 Nature of AI:</strong> Our AI-powered products and automation tools provide recommendations and outputs based on algorithms and data analysis. These outputs are advisory in nature and should not be treated as infallible. You are responsible for reviewing and validating AI-generated outputs before acting on them.</p>' +
    '<p><strong>9.2 Data Inputs:</strong> The quality and accuracy of AI outputs depend on the quality of input data. AfriCyberCore is not liable for inaccurate outputs resulting from incomplete, incorrect, or biased input data provided by the Client.</p>' +
    '<p><strong>9.3 Compliance:</strong> You are responsible for ensuring that your use of our AI products complies with all applicable Nigerian laws and regulations, including data protection requirements under the NDPA 2023.</p>' +

    '<h3>10. Training Academy</h3>' +
    '<p><strong>10.1 Enrolment:</strong> Training programme enrolment is subject to availability and payment of applicable fees.</p>' +
    '<p><strong>10.2 Certification:</strong> Certifications are awarded upon successful completion of programme requirements. AfriCyberCore reserves the right to revoke certifications obtained through fraud or misrepresentation.</p>' +
    '<p><strong>10.3 Materials:</strong> All training materials are protected by copyright and may not be reproduced, distributed, or shared without written permission from AfriCyberCore.</p>' +

    '<h3>11. Limitation of Liability</h3>' +
    '<p>To the maximum extent permitted by Nigerian law:</p>' +
    '<ul>' +
      '<li>AfriCyberCore\'s total aggregate liability for any claims arising out of or related to these Terms or our Services shall not exceed the total fees paid by you for the specific Service giving rise to the claim in the 12 months preceding the claim.</li>' +
      '<li>AfriCyberCore shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill.</li>' +
      '<li>Nothing in these Terms excludes or limits liability for fraud, gross negligence, or any liability that cannot be excluded under Nigerian law, including obligations under the FCCPA 2018.</li>' +
    '</ul>' +

    '<h3>12. Indemnification</h3>' +
    '<p>You agree to indemnify and hold harmless AfriCyberCore, its directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including reasonable legal fees) arising from:</p>' +
    '<ul>' +
      '<li>Your breach of these Terms</li>' +
      '<li>Your misuse of our Services, tools, or Deliverables</li>' +
      '<li>Unauthorised use of our cybersecurity findings or reports</li>' +
      '<li>Your violation of any applicable Nigerian law or regulation</li>' +
    '</ul>' +

    '<h3>13. Termination</h3>' +
    '<p><strong>13.1 By Either Party:</strong> Either party may terminate an engagement by providing 30 days\' written notice, unless the SOW specifies otherwise.</p>' +
    '<p><strong>13.2 For Cause:</strong> Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within 14 days of receiving written notice.</p>' +
    '<p><strong>13.3 Effect of Termination:</strong> Upon termination, you shall pay for all Services rendered up to the termination date. Clauses relating to confidentiality, intellectual property, limitation of liability, and dispute resolution survive termination.</p>' +

    '<h3>14. Force Majeure</h3>' +
    '<p>Neither party shall be liable for failure or delay in performing obligations due to circumstances beyond reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, government actions, power failures, internet outages, or cyberattacks by third parties. The affected party shall notify the other party promptly and use reasonable efforts to mitigate the impact.</p>' +

    '<h3>15. Dispute Resolution</h3>' +
    '<p><strong>15.1 Negotiation:</strong> In the event of any dispute arising out of or in connection with these Terms, the parties shall first attempt to resolve the dispute amicably through good-faith negotiations within 30 days.</p>' +
    '<p><strong>15.2 Mediation:</strong> If negotiation fails, the dispute shall be referred to mediation under the rules of the Lagos Multi-Door Courthouse (LMDC) or any other accredited mediation centre agreed upon by the parties.</p>' +
    '<p><strong>15.3 Arbitration:</strong> If mediation is unsuccessful within 60 days, the dispute shall be referred to and finally resolved by arbitration under the <strong>Arbitration and Mediation Act 2023</strong> of Nigeria. The arbitration shall be conducted in Lagos, Nigeria, in the English language, by a sole arbitrator appointed by mutual agreement or, failing agreement, in accordance with the Act.</p>' +
    '<p><strong>15.4 Jurisdiction:</strong> Notwithstanding the above, either party may seek urgent injunctive or equitable relief from the courts of competent jurisdiction in Lagos, Nigeria.</p>' +

    '<h3>16. Governing Law</h3>' +
    '<p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. The parties submit to the non-exclusive jurisdiction of the courts of Lagos State, Nigeria.</p>' +

    '<h3>17. Modifications</h3>' +
    '<p>AfriCyberCore reserves the right to modify these Terms at any time. Material changes will be communicated via our website or by email at least 14 days before they take effect. Continued use of our Services after such notice constitutes acceptance of the revised Terms.</p>' +

    '<h3>18. Severability</h3>' +
    '<p>If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction in Nigeria, the remaining provisions shall continue in full force and effect.</p>' +

    '<h3>19. Entire Agreement</h3>' +
    '<p>These Terms, together with any applicable SOW, proposal, or service agreement, constitute the entire agreement between you and AfriCyberCore regarding the subject matter herein and supersede all prior negotiations, representations, and agreements.</p>' +

    '<h3>20. Contact</h3>' +
    '<p>For questions about these Terms, please contact:</p>' +
    '<p><strong>AfriCyberCore</strong><br/>Lagos, Nigeria<br/>Email: info@africybercore.com<br/>Phone: +234 (0) 810 681 8560</p>';

  // ==================== Modal system ====================

  function buildModalCSS() {
    if (document.getElementById('acc-legal-style')) return;
    var style = document.createElement('style');
    style.id = 'acc-legal-style';
    style.textContent =
      '#acc-legal-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:16px;}' +
      '#acc-legal-overlay.acc-open{display:flex;}' +
      '#acc-legal-backdrop{position:absolute;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}' +
      '#acc-legal-card{position:relative;background:#fff;border-radius:24px;max-width:800px;width:100%;max-height:85vh;display:flex;flex-direction:column;box-shadow:0 32px 80px rgba(0,0,0,0.25);animation:acc-pop .25s ease;}' +
      '@keyframes acc-pop{from{opacity:0;transform:scale(0.96) translateY(12px);}to{opacity:1;transform:scale(1) translateY(0);}}' +
      '#acc-legal-header{display:flex;align-items:center;justify-content:space-between;padding:24px 32px 16px;border-bottom:1px solid #f0f0f0;flex-shrink:0;}' +
      '#acc-legal-header h2{margin:0;font-size:20px;font-weight:700;color:#0a1b33;font-family:"Hanken Grotesk",sans-serif;}' +
      '#acc-legal-close{width:36px;height:36px;border-radius:50%;border:1px solid #e5e7eb;background:#fafafa;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0;}' +
      '#acc-legal-close:hover{background:#f0f0f0;border-color:#d1d5db;}' +
      '#acc-legal-body{overflow-y:auto;padding:28px 32px 32px;-webkit-overflow-scrolling:touch;}' +
      '#acc-legal-body h2{font-size:28px;font-weight:800;color:#0a1b33;margin:0 0 4px;font-family:"Hanken Grotesk",sans-serif;}' +
      '#acc-legal-body .acc-date{font-size:13px;color:#94a3b8;margin:0 0 28px;padding-bottom:20px;border-bottom:1px solid #f0f0f0;}' +
      '#acc-legal-body h3{font-size:16px;font-weight:700;color:#1e293b;margin:28px 0 10px;font-family:"Hanken Grotesk",sans-serif;}' +
      '#acc-legal-body p{font-size:14px;line-height:1.75;color:#475569;margin:0 0 12px;font-family:"Inter",sans-serif;}' +
      '#acc-legal-body ul{margin:0 0 16px 0;padding-left:20px;}' +
      '#acc-legal-body li{font-size:14px;line-height:1.75;color:#475569;margin-bottom:6px;font-family:"Inter",sans-serif;}' +
      '#acc-legal-body strong{color:#1e293b;font-weight:600;}' +
      '@media(max-width:640px){' +
        '#acc-legal-card{max-height:92vh;border-radius:20px;}' +
        '#acc-legal-header{padding:20px 20px 14px;}' +
        '#acc-legal-body{padding:20px 20px 24px;}' +
        '#acc-legal-body h2{font-size:22px;}' +
        '#acc-legal-body h3{font-size:15px;}' +
      '}';
    document.head.appendChild(style);
  }

  function buildModalHTML() {
    if (document.getElementById('acc-legal-overlay')) return;
    var div = document.createElement('div');
    div.id = 'acc-legal-overlay';
    div.innerHTML =
      '<div id="acc-legal-backdrop"></div>' +
      '<div id="acc-legal-card">' +
        '<div id="acc-legal-header">' +
          '<h2 id="acc-legal-title"></h2>' +
          '<button id="acc-legal-close" aria-label="Close">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div id="acc-legal-body"></div>' +
      '</div>';
    document.body.appendChild(div);

    function closeModal() {
      div.classList.remove('acc-open');
      document.body.style.overflow = '';
    }
    document.getElementById('acc-legal-backdrop').addEventListener('click', closeModal);
    document.getElementById('acc-legal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }

  function openLegal(type) {
    buildModalCSS();
    buildModalHTML();
    var title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
    var content = type === 'privacy' ? PRIVACY_POLICY : TERMS_OF_SERVICE;
    document.getElementById('acc-legal-title').textContent = title;
    document.getElementById('acc-legal-body').innerHTML = content;
    document.getElementById('acc-legal-body').scrollTop = 0;
    document.getElementById('acc-legal-overlay').classList.add('acc-open');
    document.body.style.overflow = 'hidden';
  }

  // Expose globally so footer links can trigger it
  window.__accOpenLegal = openLegal;

  // ==================== Footer HTML ====================

  function buildHTML() {
    return '' +
'<footer class="bg-[#101415] px-4 sm:px-6 pb-8 pt-10">' +
  '<div class="relative max-w-[1400px] mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">' +
    '<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"><source src="' + GLASS_VIDEO + '" type="video/mp4"></video>' +
    '<div class="absolute inset-0 bg-[#0a152d]/85"></div>' +
    '<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a152d]/80 to-transparent"></div>' +
    '<div class="relative z-10 px-7 md:px-14 py-12 md:py-16">' +
      // CTA row
      '<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">' +
        '<div>' +
          '<h2 class="text-3xl md:text-[44px] font-semibold tracking-tight text-white leading-[1.08] max-w-xl" style="font-family:\'Hanken Grotesk\',sans-serif;">Ready to secure your future?</h2>' +
          '<p class="text-white/55 mt-4 max-w-md text-[15px] leading-relaxed">Together we protect our future &mdash; let\'s bulletproof your business and digital products.</p>' +
        '</div>' +
        '<a href="contact.html" class="shrink-0 inline-flex items-center gap-2 bg-[#ffb690] text-[#341100] font-semibold px-7 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform">Contact Us ' + chevron + '</a>' +
      '</div>' +
      // columns
      '<div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">' +
        '<div class="col-span-2 md:col-span-1">' +
          '<div class="flex items-center gap-2 mb-3">' +
            '<img src="assets/img/afrilogo.png" alt="AfriCyberCore" class="h-8 w-auto invert shrink-0" style="max-width:none"/>' +
          '</div>' +
          '<p class="text-white/45 text-sm max-w-xs leading-relaxed">Iron-Clad Innovation for the Silicon Savannah. Lagos, Nigeria.</p>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Company</h4>' +
          '<ul class="space-y-2.5 text-[14px]">' + link('index.html','Home') + link('about.html','About') + link('consulting.html','Consulting') + link('contact.html','Contact') + '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Solutions</h4>' +
          '<ul class="space-y-2.5 text-[14px]">' + link('services.html','Cybersecurity') + link('services.html','Automation') + link('services.html','No-Code Web Dev') + link('products.html','AI Products') + '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Connect</h4>' +
          '<div class="flex gap-2 mb-4">' + pill('mailto:info@africybercore.com','Email',iMail) + pill('https://www.linkedin.com/company/africybercore/','LinkedIn',iLinkedIn) + pill('https://x.com/africybercore','X / Twitter',iX) + '</div>' +
          '<p class="text-white/55 text-sm">info@africybercore.com</p>' +
          '<p class="text-white/55 text-sm">+234 (0) 810 681 8560</p>' +
        '</div>' +
      '</div>' +
      // bottom bar
      '<div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 mt-8 border-t border-white/10">' +
        '<span class="text-white/40 text-[13px]">&copy; 2025 AfriCyberCore. Together we protect our future.</span>' +
        '<div class="flex gap-5 text-[13px]">' +
          '<a href="javascript:void(0)" onclick="__accOpenLegal(\'privacy\')" class="text-white/40 hover:text-white/80 transition-colors cursor-pointer">Privacy Policy</a>' +
          '<a href="javascript:void(0)" onclick="__accOpenLegal(\'terms\')" class="text-white/40 hover:text-white/80 transition-colors cursor-pointer">Terms of Service</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</footer>';
  }

  function inject() {
    var tmp = document.createElement('div');
    tmp.innerHTML = buildHTML().trim();
    var newFooter = tmp.firstElementChild;
    var existing = document.querySelector('footer');
    if (existing) existing.replaceWith(newFooter);
    else document.body.appendChild(newFooter);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
