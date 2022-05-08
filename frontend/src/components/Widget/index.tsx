import { WidgetCloseButton } from "./WidgetCloseButton";

import BugImage from "../../assets/Bugbug.png";
import IdeaImage from "../../assets/Ideaidea.png";
import OtherImage from "../../assets/Thoughtother.png";
import { useState } from "react";
import { WidgetStepSelect } from "./Steps/WidgetStepSelect";
import { WidgetBackButton } from "./WidgetBackButton";
import { WidgetButton } from "./WidgetButton";
import { WidgetButtonImage } from "./WidgetButtonImage";
import { WidgetStepSuccess } from "./Steps/WidgetStepSuccess";

export const FeedbackItems = {
  BUG: {
    title: "bug",
    image: {
      source: BugImage,
      alt: "Problema",
    },
  },
  IDEA: {
    title: "idea",
    image: {
      source: IdeaImage,
      alt: "Ideia",
    },
  },
  OTHER: {
    title: "other",
    image: {
      source: OtherImage,
      alt: "Outro",
    },
  },
};

export type FeedbackType = keyof typeof FeedbackItems;

export const WidgetForm: React.FC = () => {
  const [feedbackSelected, setFeedbackSelected] = useState<FeedbackType | null>(
    null
  );
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const [sended, setSended] = useState<boolean>(false);

  const onSubmitForm = () => {
    console.log(screenShot);
    console.log(comment);
    setSended(true);
  };

  const onReSendFeedback = () => {
    setFeedbackSelected(null);
    setScreenShot(null);
    setComment(null);
    setSended(false);
  };

  return (
    <div className="bg-zinc-800 p-4 relative rounded-2xl mb-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        {feedbackSelected ? (
          <span className="flex gap-1 items-center">
            <img
              className="w-5 h-5"
              src={FeedbackItems[feedbackSelected].image.source}
            />
            <span className="text-xl">
              {FeedbackItems[feedbackSelected].image.alt}
            </span>
          </span>
        ) : (
          <span className="text-xl leading-6">Deixe seu Feedback</span>
        )}
        <WidgetCloseButton />
        {feedbackSelected && (
          <WidgetBackButton onBackFeedback={setFeedbackSelected} />
        )}
      </header>
      {feedbackSelected ? (
        sended ? (
          <WidgetStepSuccess onReSendFeedback={onReSendFeedback} />
        ) : (
          <form className="my-4">
            <div className="min-w-[304px]">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-zinc-800 min-h-[112px] rounded-md focus:outline-none text-zinc-400 placeholder:text-zinc-400 border-2 border-transparent focus:border-brand-50 hover:border-brand-500 resize-none ring-1 ring-zinc-400 scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin"
                placeholder="Texto do seu feedback"
              />
              <div className="flex items-center gap-1">
                <WidgetButtonImage
                  screenShot={screenShot}
                  onScreenShot={setScreenShot}
                  onRemoveScreenShot={() => setScreenShot(null)}
                />
                <WidgetButton
                  onSubmitForm={onSubmitForm}
                  disabledSubmit={comment ? comment.length === 0 : true}
                />
              </div>
            </div>
          </form>
        )
      ) : (
        <WidgetStepSelect setWidgetStep={setFeedbackSelected} />
      )}
      <footer className="text-xs text-neutral-400">
        Feito pela Rocketseat
      </footer>
    </div>
  );
};
