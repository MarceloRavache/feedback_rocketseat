import { ArrowArcLeft, ArrowLeft, ArrowUpLeft, Backpack } from "phosphor-react";
import { FeedbackType } from "./Widget/index";

interface WidgetBackButtonProps {
  onBackFeedback: (value: null) => void;
}

export const WidgetBackButton: React.FC<WidgetBackButtonProps> = ({
  onBackFeedback,
}) => {
  return (
    <button className="left-6 top-6 absolute text-zinc-400 hover:text-zinc-100">
      <ArrowLeft
        weight="bold"
        className="w-4 h-4"
        onClick={() => onBackFeedback(null)}
      />
    </button>
  );
};
