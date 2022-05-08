import { FeedbackType, FeedbackItems } from "../index";

interface WidgetStepSelectProps {
  setWidgetStep: (value: FeedbackType) => void;
}

export const WidgetStepSelect: React.FC<WidgetStepSelectProps> = ({
  setWidgetStep,
}) => {
  return (
    <div className="flex items-center gap-2 w-full mt-8 mb-8">
      {Object.entries(FeedbackItems).map(([key, value]) => {
        return (
          <button
            key={key}
            className="py-5 px-7 bg-zinc-700 rounded-lg border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => setWidgetStep(key as FeedbackType)}
          >
            <img src={value.image.source} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
};
