import SuccessImage from "../../../assets/Successsuccess.png";

interface WidgetStepSuccessProps {
  onReSendFeedback: () => void;
}

export const WidgetStepSuccess: React.FC<WidgetStepSuccessProps> = ({
  onReSendFeedback,
}) => {
  return (
    <div className="min-w-[306px] min-h-[150px] w-full flex flex-col items-center justify-center gap-2">
      <img src={SuccessImage} className="w-10 h-10" />
      <span className="text-lg text-zinc-200 font-medium">
        Agradecemos o feedback!
      </span>
      <button
        className="bg-zinc-700 text-zinc-100 h-10 px-4 rounded-[4px]"
        onClick={onReSendFeedback}
      >
        Quero enviar outro
      </button>
    </div>
  );
};
