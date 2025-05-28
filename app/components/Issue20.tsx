import { CheckCircle } from "lucide-react";

export default function PricingTable() {
    const plans = [
        {
            name: "Free",
            highlighted: false,
            mainFeatures: [
                "Unlimited members",
                "10MB file uploads",
            ]
        },
        {
            name: "Basic",
            highlighted: false,
            mainFeatures: [
                "Unlimited members",
                "Unlimited file uploads",
            ]
        },
        {
            name: "Business",
            highlighted: true,
            mainFeatures: [
                "Unlimited members",
                "Unlimited file uploads",
            ]
        },
        {
            name: "Enterprise",
            highlighted: false,
            mainFeatures: [
                "Unlimited members",
                "Unlimited file uploads",
            ]
        }
    ];
    const featureCategories = [
        {
            name: "Features",
            items: [
                "Issues, projects, cycles, and initiatives",
                "Customer requests",
            ]
        },
        {
            name: "Team management",
            items: [
                "Sub-teams",
                "Private teams",
            ]
        },
        {
            name: "Analytics & Reporting",
            items: [
                "Progress reports",
                "Insights",
            ]
        },
        {
            name: "Security",
            items: [
                "Google SSO",
                "Admin roles",
            ]
        },
        {
            name: "Support",
            items: [
                "Priority support",
                "Account manager",
            ]
        }
    ];

    // Verificar qué características están incluidas en cada plan
    const allFeatures = featureCategories.flatMap(category => category.items);
    const planFeatures = plans.map(plan => {
        const features = {};

        // Todas las características principales están incluidas
        plan.mainFeatures.forEach(f => features[f] = true);

        // Asignar características adicionales basadas en el plan
        allFeatures.forEach(f => {
            if (plan.name === "Free") {
                features[f] = false; // Free no incluye casi nada
            } else if (plan.name === "Basic") {
                // Basic incluye algunas características básicas
                features[f] = [
                    "Issues, projects, cycles, and initiatives",
                    "Customer requests",
                    "Integrations",
                    "API and webhook access",
                    "Import and export",
                    "Triage",
                    "Issue sync",
                    "Support integrations",
                    "Sub-teams",
                    "Private teams",
                    "Progress reports",
                    "Google SSO",
                    "Admin roles",
                    "Priority support"
                ].includes(f);
            } else if (plan.name === "Business") {
                // Business incluye casi todo excepto algunas características empresariales
                features[f] = ![
                    "SAML",
                    "Custom terms",
                    "Account manager"
                ].some(excluded => f.includes(excluded));
            } else if (plan.name === "Enterprise") {
                // Enterprise incluye todo
                features[f] = true;
            }
        });

        return {
            ...plan,
            features
        };
    });

    return (
        <div className="flex flex-col bg-black text-white w-full items-center py-8">
            <div className="w-[1040px] border border-gray-800 rounded-lg overflow-hidden">
                {/* Plan headers */}
                <div className="flex w-full">
                    {planFeatures.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex-1 p-6 ${plan.highlighted ? 'bg-gray-900' : 'bg-black'} border-b border-gray-800`}
                        >
                            <h2 className="text-xl font-medium text-center">{plan.name}</h2>
                        </div>
                    ))}
                </div>

                {/* Main features */}
                <div className="flex w-full border-b border-gray-800">
                    {planFeatures.map((plan, index) => (
                        <div
                            key={`main-${index}`}
                            className={`flex-1 p-6 ${plan.highlighted ? 'bg-gray-900' : 'bg-black'}`}
                        >
                            <ul className="space-y-2">
                                {plan.mainFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle size={18} className="text-blue-500 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Feature title */}
                {featureCategories.map((category, catIndex) => (
                    <div key={`cat-${catIndex}`} className="w-full">
                        {/* Features in category */}
                        <div className="flex w-full">
                            {planFeatures.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`flex-1 p-6 ${plan.highlighted ? 'bg-gray-900' : 'bg-black'} border-b border-gray-800`}
                                >
                                    <h2 className="text-xl font-medium text-center">{index == 0 ? category.name : ""}</h2>
                                </div>
                            ))}
                        </div>
                        {category.items.map((feature, featIndex) => (   
                            <div key={`feat-${featIndex}`} className="flex w-full border-b border-gray-800">
                                {planFeatures.map((plan, planIndex) => (
                                    <div
                                        key={`feat-${planIndex}-${featIndex}`}
                                        className={`flex-1 p-6 ${plan.highlighted ? 'bg-gray-900' : 'bg-black'}`}
                                    >
                                        <div className="flex justify-center">
                                            {plan.features[feature] ? (
                                                <CheckCircle size={18} className="text-blue-500" />
                                            ) : (
                                                <span className="text-gray-600">—</span>
                                            )}
                                            {feature}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

                {/* Link */}
                <div className="flex w-full">
                    {planFeatures.map((plan, index) => (
                        <a
                            href="#"
                            className={`flex-1 p-6 ${plan.highlighted ? 'bg-gray-900' : 'bg-black'} border-b border-gray-800`}
                        >
                            <h2 className="text-xl font-medium text-center">Get started</h2>
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
    );
}