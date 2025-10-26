import { type ReactNode } from "react";

type QuestionCardProps = {
  title: string;
  children: ReactNode;
  expanded: boolean;
  onToggle: () => void;
};

 const QuestionCard=({
  title,
  children,
  expanded,
  onToggle,
}: QuestionCardProps)=> {
  return (
    <div className="w-full max-w-[620px] bg-white shadow-xl rounded p-5 transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="capitalize text-slate-800 font-medium">{title}</span>

        <button
          onClick={onToggle}
          className="hover:scale-90 cursor-pointer transition-transform"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <rect x="1"y="1" width="28" height="28"rx="6"fill="none"stroke="#c59d5f" strokeWidth="2" />

            {expanded ? 
            (<path d="M8 15h14" stroke="#c59d5f" strokeWidth="2" strokeLinecap="round"/>) :
             (<path d="M15 8v14M8 15h14"stroke="#c59d5f"strokeWidth="2"strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-40 animate-[accordion-down_0.3s_ease-out]" : "max-h-0 animate-[accordion-up_0.3s_ease-out]"
        }`}
      >
        <div className="mt-4 flex flex-col gap-4">
          <hr />
          <div className="text-[#617d98] text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard
