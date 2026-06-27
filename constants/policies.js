import { CONTACT, SITE_NAME } from "./site";

export const POLICY_LAST_UPDATED = "27 June 2026";

export const POLICIES = {
  privacy: {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How Rajas Wholesale collects, uses, and protects your personal information.",
    intro: `This Privacy Policy explains how ${SITE_NAME} ("we", "us", or "our") collects, uses, stores, and protects your personal data when you visit our website, create an account, place an order, or contact us. We are committed to handling your information responsibly and in line with applicable UK data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We may collect the following types of personal information:",
        ],
        list: [
          "Identity and contact details such as your name, business name, email address, phone number, and delivery or billing address.",
          "Order information including products purchased, quantities, payment status, and delivery preferences.",
          "Account details if you register with us, including login credentials.",
          "Communications you send to us, including emails, contact form submissions, and customer support enquiries.",
          "Technical data such as IP address, browser type, device information, and pages visited, collected through cookies and similar technologies.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: ["We use your personal data to:"],
        list: [
          "Process and fulfil wholesale orders, including delivery and customer support.",
          "Manage your account and communicate with you about your orders.",
          "Respond to enquiries and provide information about our products and services.",
          "Improve our website, product range, and customer experience.",
          "Comply with legal, tax, and accounting obligations.",
          "Send marketing communications where you have opted in. You may unsubscribe at any time.",
        ],
      },
      {
        heading: "Legal basis for processing",
        paragraphs: [
          "We process personal data where necessary to perform a contract with you, to comply with legal obligations, where we have a legitimate business interest (such as improving our services), or where you have given consent (for example, for marketing emails).",
        ],
      },
      {
        heading: "Sharing your information",
        paragraphs: [
          "We do not sell your personal data. We may share information with trusted third parties who help us operate our business, such as payment processors, delivery partners, IT providers, and professional advisers. These parties are required to protect your data and use it only for the services they provide to us.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "We retain personal data only for as long as necessary to fulfil the purposes described in this policy, including satisfying legal, accounting, or reporting requirements. Order records are typically retained for up to seven years for tax and compliance purposes.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["Under UK data protection law, you may have the right to:"],
        list: [
          "Request access to the personal data we hold about you.",
          "Request correction of inaccurate or incomplete data.",
          "Request erasure of your data in certain circumstances.",
          "Object to or restrict processing in certain circumstances.",
          "Request data portability where applicable.",
          "Withdraw consent at any time where processing is based on consent.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Our website uses cookies and similar technologies to enable core functionality, remember preferences, and understand how visitors use our site. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [
          `If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at ${CONTACT.email} or write to us at ${CONTACT.address}.`,
        ],
      },
    ],
  },
  refund: {
    slug: "refund-policy",
    title: "Refund Policy",
    description:
      "Our refund and returns policy for wholesale orders placed with Rajas Wholesale.",
    intro: `At ${SITE_NAME}, we take pride in supplying quality wholesale confectionery, drinks, and snacks. We want you to be satisfied with every order. This Refund Policy explains when returns, replacements, or refunds may be offered for business and trade customers.`,
    sections: [
      {
        heading: "General policy",
        paragraphs: [
          "Due to the nature of food and confectionery products, we are unable to accept returns of opened, used, or perishable items unless they are faulty or not as described. Unopened products in resaleable condition may be considered for return subject to approval and applicable restocking fees.",
        ],
      },
      {
        heading: "Damaged or incorrect items",
        paragraphs: [
          "If your order arrives damaged, incomplete, or incorrect, please contact us within 48 hours of delivery. Include your order number, a description of the issue, and photographs where possible. We will review your claim and, where appropriate, arrange a replacement, credit, or refund.",
        ],
      },
      {
        heading: "Shortages and delivery issues",
        paragraphs: [
          "If items are missing from your delivery, notify us within 48 hours so we can investigate with our warehouse and courier partners. Verified shortages will be rectified by dispatching missing items or issuing a credit or refund for the affected products.",
        ],
      },
      {
        heading: "Non-returnable items",
        paragraphs: ["The following are generally not eligible for return:"],
        list: [
          "Opened, consumed, or tampered products.",
          "Items with broken seals or compromised packaging caused after delivery.",
          "Products purchased on clearance or marked as final sale.",
          "Items returned without prior authorisation.",
        ],
      },
      {
        heading: "Refund processing",
        paragraphs: [
          "Approved refunds are processed to the original payment method within 5–10 business days. Please allow additional time for your bank or card provider to post the credit. Store credit may be offered as an alternative where agreed.",
        ],
      },
      {
        heading: "How to request a return or refund",
        paragraphs: [
          `Contact our team at ${CONTACT.email} or ${CONTACT.phone} with your order details. Do not return goods without receiving return authorisation and instructions from us.`,
        ],
      },
    ],
  },
  shipping: {
    slug: "shipping-policy",
    title: "Shipping Policy",
    description:
      "Delivery information, lead times, and shipping terms for Rajas Wholesale orders.",
    intro: `This Shipping Policy outlines how ${SITE_NAME} processes and delivers wholesale orders across the United Kingdom. Delivery times and charges may vary depending on order size, location, and product availability.`,
    sections: [
      {
        heading: "Processing times",
        paragraphs: [
          "Orders are typically processed within 1–2 business days after payment confirmation. During busy periods or for large bulk orders, processing may take slightly longer. You will receive confirmation once your order has been dispatched.",
        ],
      },
      {
        heading: "Delivery areas",
        paragraphs: [
          "We currently deliver to business addresses across the United Kingdom. Local collection may be available from our Southall warehouse by prior arrangement. Contact us before placing an order if you require collection.",
        ],
      },
      {
        heading: "Delivery times",
        paragraphs: [
          "Standard delivery usually takes 2–5 business days after dispatch, depending on your location. Remote areas and certain postcodes may require additional transit time. Express or pallet delivery options may be available for qualifying orders — please contact us for a quote.",
        ],
      },
      {
        heading: "Shipping charges",
        paragraphs: [
          "Delivery fees are calculated at checkout based on order weight, volume, and destination. Free or reduced shipping may be offered on orders above a minimum spend threshold when promotions are active. Wholesale pallet orders may incur separate carriage charges.",
        ],
      },
      {
        heading: "Order tracking",
        paragraphs: [
          "Where available, tracking information will be sent to the email address provided at checkout once your order has been shipped. If you have not received tracking details within the expected timeframe, please contact us.",
        ],
      },
      {
        heading: "Failed deliveries and address errors",
        paragraphs: [
          "Please ensure your delivery address and contact details are accurate at checkout. We are not responsible for delays or failed deliveries caused by incorrect information. Additional charges may apply for re-delivery attempts.",
        ],
      },
      {
        heading: "Damaged in transit",
        paragraphs: [
          "Inspect your delivery on arrival. Report any visible damage to the courier where possible and contact us within 48 hours with photos and your order number so we can assist promptly.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `For shipping enquiries, email ${CONTACT.email} or call ${CONTACT.phone}. Our address for collections and correspondence is ${CONTACT.address}.`,
        ],
      },
    ],
  },
  terms: {
    slug: "terms-of-service",
    title: "Terms of Service",
    description:
      "Terms and conditions governing use of the Rajas Wholesale website and services.",
    intro: `These Terms of Service ("Terms") govern your access to and use of the ${SITE_NAME} website and the purchase of products from us. By using our website or placing an order, you agree to these Terms. Please read them carefully.`,
    sections: [
      {
        heading: "About us",
        paragraphs: [
          `${SITE_NAME} is a wholesale supplier of confectionery, beverages, snacks, and related products. Our registered business address is ${CONTACT.address}.`,
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "Our products are intended for trade, retail, and business customers. By placing an order, you confirm that you are purchasing for business or resale purposes where applicable, and that you are authorised to enter into a binding contract.",
        ],
      },
      {
        heading: "Orders and acceptance",
        paragraphs: [
          "All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel an order before dispatch, including in cases of pricing errors, stock unavailability, or suspected fraudulent activity. A contract is formed when we confirm your order or dispatch your goods, whichever occurs first.",
        ],
      },
      {
        heading: "Pricing and payment",
        paragraphs: [
          "Prices are shown in GBP and are exclusive of VAT unless stated otherwise. We reserve the right to change prices at any time, but changes will not affect orders already confirmed. Payment must be received or authorised before dispatch unless a credit account has been agreed in writing.",
        ],
      },
      {
        heading: "Product information",
        paragraphs: [
          "We make every effort to display accurate product descriptions, images, and allergen information. However, packaging and formulations may change by manufacturers. Customers are responsible for checking labels on receipt and ensuring products meet their resale and regulatory requirements.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, we shall not be liable for indirect or consequential losses arising from your use of our website or products. Our total liability for any claim relating to an order shall not exceed the value of that order.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All content on this website, including text, logos, images, and design, is owned by or licensed to us and may not be copied or used without permission.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
        ],
      },
      {
        heading: "Changes to these Terms",
        paragraphs: [
          "We may update these Terms from time to time. The version published on our website at the time of your order will apply. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about these Terms can be sent to ${CONTACT.email} or ${CONTACT.phone}.`,
        ],
      },
    ],
  },
};

export const POLICY_LIST = [
  { key: "privacy", ...POLICIES.privacy },
  { key: "refund", ...POLICIES.refund },
  { key: "shipping", ...POLICIES.shipping },
  { key: "terms", ...POLICIES.terms },
];

export function getPolicyBySlug(slug) {
  return POLICY_LIST.find((policy) => policy.slug === slug) || null;
}
