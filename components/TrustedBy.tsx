export default function TrustedBy() {
  const logos = [
    { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Shopify", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-12">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center gap-2 opacity-40 grayscale hover:opacity-60 transition-opacity">
            <img src={logo.icon} alt={logo.name} className="h-7 object-contain" />
            <span className="text-gray-600 font-semibold text-lg">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
