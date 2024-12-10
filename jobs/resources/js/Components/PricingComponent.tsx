import { PricingPlan } from "@/types";

const PricingComponent = ({ pricing }: { pricing: PricingPlan[] }) => {
    return (
        <>
            <div className="w-full flex justify-start items-center">
                <h1 className="text-2xl text-slate-600 font-medium">
                    ტარიფები
                </h1>
            </div>
            {pricing?.map((option: PricingPlan) => (
                <div
                    key={option.id}
                    className="w-full flex flex-col justify-center items-start gap-2 text-slate-700"
                >
                    <div className="w-full flex flex-col justify-center items-start gap-1">
                        <h4 className="underline">{option.name}</h4>
                        {option.options.map((item) => (
                            <p key={item.id}>
                                {item.max_vacancies} ვაკანსია ერთ განცხადებაში:{" "}
                                {item.price} ლარი
                            </p>
                        ))}
                        <div className="w-full flex justify-center items-start flex-col my-4">
                            <p>{option.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PricingComponent;
