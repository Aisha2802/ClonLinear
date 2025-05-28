import { Link } from "@remix-run/react";

interface Company {
  name: string;
  logo: string;
  categories: string[];
  action: "visit" | "read";
  url: string;
}

export default function Issue26() {
  const companies: Company[] = [
    {
      name: "Vercel",
      logo: "https://webassets.linear.app/images/ornj730p/production/b36668d49938880fb8d42a45be77fbcc0269d0ac-56x56.svg",
      categories: ["SaaS", "AI"],
      action: "visit",
      url: "https://vercel.com"
    },
    {
      name: "The Browser Company",
      logo: "https://webassets.linear.app/images/ornj730p/production/6e22cda9a3e1f59c1cbf44380ea9ef1aa1a33585-56x56.svg",
      categories: ["Consumer"],
      action: "read",
      url: "/customers/browsercompany"
    },
    {
      name: "Monzo",
      logo: "https://webassets.linear.app/images/ornj730p/production/921f7cc471fdf00e8dc658e3751227bf2343b65a-56x56.svg",
      categories: ["Fintech", "Consumer"],
      action: "visit",
      url: "https://monzo.com/"
    },
    {
      name: "Perplexity",
      logo: "https://webassets.linear.app/images/ornj730p/production/0634ce02aeb211342ae68e79e203ca16933de989-56x56.svg",
      categories: ["AI", "Consumer"],
      action: "visit",
      url: "https://www.perplexity.ai/"
    },
    {
      name: "Supercell",
      logo: "https://webassets.linear.app/images/ornj730p/production/66f1f07fdebb327de28cfe8fbe70570dde92c194-56x56.svg",
      categories: ["Consumer"],
      action: "visit",
      url: "https://supercell.com/"
    },
    {
      name: "Cursor",
      logo: "https://webassets.linear.app/images/ornj730p/production/74578d2b40ee00432db7c5a910fbcd9899fdd522-56x56.svg",
      categories: ["AI"],
      action: "visit",
      url: "https://www.cursor.com/"
    },
    {
      name: "Descript",
      logo: "https://webassets.linear.app/images/ornj730p/production/5494a32be3c77b5fd654e93da0a47b624d5ad4d3-56x56.svg",
      categories: ["SaaS", "AI"],
      action: "read",
      url: "/customers/descript"
    },
    {
      name: "Runway",
      logo: "https://webassets.linear.app/images/ornj730p/production/b52e9cd57ea9881d92e5d46373abbf1525c154b4-56x56.svg",
      categories: ["AI"],
      action: "visit",
      url: "https://runwayml.com/"
    },
    {
      name: "Raycast",
      logo: "https://webassets.linear.app/images/ornj730p/production/e49b121abff6209db36584e2bc070ddb3b3dd5f2-56x56.svg",
      categories: ["SaaS"],
      action: "read",
      url: "/customers/raycast"
    },
    {
      name: "Netlify",
      logo: "https://webassets.linear.app/images/ornj730p/production/2fabb66ac00ee688086dc5e4231f97eb3957d10c-56x56.svg",
      categories: ["SaaS"],
      action: "visit",
      url: "https://www.netlify.com/"
    },
    {
      name: "Cohere",
      logo: "https://webassets.linear.app/images/ornj730p/production/a29aa6a5a361fe63e0c0b0ed7016d20c71b08c32-56x56.svg",
      categories: ["AI"],
      action: "read",
      url: "/customers/cohere"
    },
    {
      name: "OpenSea",
      logo: "https://webassets.linear.app/images/ornj730p/production/fc000cc580ba314111ec35a89fb67105ac0459a2-56x56.svg",
      categories: ["Crypto"],
      action: "visit",
      url: "https://opensea.io/"
    },
    {
      name: "Substack",
      logo: "https://webassets.linear.app/images/ornj730p/production/9cb19bf674d0ae45065757d343cf9913a2fd271c-56x56.svg",
      categories: ["Consumer"],
      action: "visit",
      url: "https://substack.com/"
    },
    {
      name: "Boom",
      logo: "https://webassets.linear.app/images/ornj730p/production/203f9a55fc886cabc6ad7fb840050f7ac5eac021-56x56.svg",
      categories: ["Hardware"],
      action: "visit",
      url: "https://boomsupersonic.com/"
    },
    {
      name: "Modern Treasury",
      logo: "https://webassets.linear.app/images/ornj730p/production/6afdfdf6b9c36d674aab65e811fc0c8a6496d084-56x56.svg",
      categories: ["Fintech"],
      action: "visit",
      url: "https://www.moderntreasury.com/"
    },
    {
      name: "Worldcoin",
      logo: "https://webassets.linear.app/images/ornj730p/production/351ae674d2e6566117ca78090bf8448f14656388-56x56.svg",
      categories: ["Crypto"],
      action: "visit",
      url: "https://worldcoin.org"
    },
    {
      name: "Clipboard Health",
      logo: "https://webassets.linear.app/images/ornj730p/production/dfbe4526277658f7a08cb41bfc60141972dc6439-56x56.svg",
      categories: ["Health"],
      action: "visit",
      url: "https://www.clipboardhealth.com"
    }
  ];

  const categories = [
    { id: "featured", name: "Featured" },
    { id: "saas", name: "SaaS" },
    { id: "ai", name: "AI" },
    { id: "fintech", name: "Fintech" },
    { id: "consumer", name: "Consumer" },
    { id: "hardware", name: "Hardware" },
    { id: "crypto", name: "Crypto" },
    { id: "healthcare", name: "Health" }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Powering 10,000+ ambitious product teams of all shapes and sizes
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center w-full overflow-x-auto mb-8 scrollbar-hide">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    category.id === "featured"
                      ? "bg-white text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Companies List */}
          <div className="w-full">
            {companies.map((company, index) => {
              const isExternalLink = company.url.startsWith("http");
              const LinkComponent = isExternalLink
                ? ({ children }: { children: React.ReactNode }) => (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <Link to={company.url} className="block">
                      {children}
                    </Link>
                  );

              return (
                <LinkComponent key={company.name}>
                  <div className={`w-full py-4 px-3 hover:bg-gray-900/50 transition-colors ${
                    index !== companies.length - 1 ? 'border-b border-gray-800' : ''
                  }`}>
                    <div className="grid grid-cols-12 items-center gap-3">
                      {/* Company Info */}
                      <div className="col-span-8 sm:col-span-6 flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-base font-medium">{company.name}</span>
                      </div>

                      {/* Categories - Hide on mobile */}
                      <div className="hidden sm:block col-span-4">
                        <span className="text-sm text-gray-400">
                          {company.categories.join(", ")}
                        </span>
                      </div>

                      {/* Action Button */}
                      <div className="col-span-4 sm:col-span-2 flex justify-end">
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300">
                          {company.action === "visit" ? (
                            <>
                              Visit site
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.184 3.894a.75.75 0 0 0-.136 1.494l2.295.209-4.879 4.878a.75.75 0 0 0 1.061 1.06l4.878-4.878.209 2.295a.75.75 0 1 0 1.494-.136l-.354-3.89a.75.75 0 0 0-.679-.678l-3.889-.354Z"></path>
                              </svg>
                            </>
                          ) : (
                            <>
                              Read story
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                              </svg>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </LinkComponent>
              );
            })}

            {/* Your Company Row */}
            <Link to="/switch" className="block">
              <div className="w-full py-4 px-3 border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-8 sm:col-span-10 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="var(--color-text-quaternary)"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.88889 2.55556C3.60022 2.55556 2.55556 3.60022 2.55556 4.88889V5.66667C2.55556 6.09622 2.20733 6.44444 1.77778 6.44444C1.34822 6.44444 1 6.09622 1 5.66667V4.88889C1 2.74111 2.74111 1 4.88889 1H5.66667C6.09622 1 6.44444 1.34822 6.44444 1.77778C6.44444 2.20733 6.09622 2.55556 5.66667 2.55556H4.88889ZM11.1111 2.55556H10.3333C9.90378 2.55556 9.55556 2.20733 9.55556 1.77778C9.55556 1.34822 9.90378 1 10.3333 1H11.1111C13.2589 1 15 2.74111 15 4.88889V5.66667C15 6.09622 14.6518 6.44444 14.2222 6.44444C13.7927 6.44444 13.4444 6.09622 13.4444 5.66667V4.88889C13.4444 3.60022 12.3998 2.55556 11.1111 2.55556ZM1.77778 9.55556C2.20733 9.55556 2.55556 9.90378 2.55556 10.3333V11.1111C2.55556 12.3998 3.60022 13.4444 4.88889 13.4444H5.66667C6.09622 13.4444 6.44444 13.7927 6.44444 14.2222C6.44444 14.6518 6.09622 15 5.66667 15H4.88889C2.74111 15 1 13.2589 1 11.1111V10.3333C1 9.90378 1.34822 9.55556 1.77778 9.55556ZM13.4444 11.1111V10.3333C13.4444 9.90378 13.7927 9.55556 14.2222 9.55556C14.6518 9.55556 15 9.90378 15 10.3333V11.1111C15 13.2589 13.2589 15 11.1111 15H10.3333C9.90378 15 9.55556 14.6518 9.55556 14.2222C9.55556 13.7927 9.90378 13.4444 10.3333 13.4444H11.1111C12.3998 13.4444 13.4444 12.3998 13.4444 11.1111Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-400">Your company</span>
                  </div>

                  <div className="col-span-4 sm:col-span-2 flex justify-end">
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300">
                      Make the switch
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}