import IntegrationsFeatures from "@/components/Integration/integratiion-features";
import IntegrationGillete from "@/components/Integration/integration-gillete";
import IntegrationsHero from "@/components/Integration/integration-hero";
import IntegrationTrust from "@/components/Integration/trust";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen ">
      <IntegrationsHero />
      <IntegrationsFeatures />
      <IntegrationTrust />
      <IntegrationGillete />
    </main>
  );
}

