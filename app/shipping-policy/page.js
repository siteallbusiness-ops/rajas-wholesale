import PolicyPage from "@/components/Legal/PolicyPage";
import { createMetadata } from "@/utils/metadata";
import { POLICIES } from "@/constants/policies";

const policy = POLICIES.shipping;

export const metadata = createMetadata({
  title: policy.title,
  description: policy.description,
  path: `/${policy.slug}`,
});

export default function ShippingPolicyPage() {
  return <PolicyPage policy={policy} />;
}
