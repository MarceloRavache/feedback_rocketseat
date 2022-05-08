import { Camera, CircleNotch, Image, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";

interface WidgetButtonImageProps {
  screenShot: string | null;
  onScreenShot: (value: string) => void;
  onRemoveScreenShot: () => void;
}

export const WidgetButtonImage: React.FC<WidgetButtonImageProps> = ({
  screenShot,
  onScreenShot,
  onRemoveScreenShot,
}) => {
  const [loadingScreenShot, setLoadingScreenShot] = useState(false);

  const onPrintScreenPage = async () => {
    setLoadingScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenShot(base64image);
    setLoadingScreenShot(false);
  };

  const onTrashScreenShot = () => {
    onRemoveScreenShot();
  };

  if (screenShot)
    return (
      <button
        type="button"
        onClick={onTrashScreenShot}
        className="text-zinc-500 bg-zinc-700 hover:text-zinc-100 py-2 px-2 rounded-md p-1 flex justify-end items-end w-12 h-10"
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 100,
        }}
      >
        <Trash weight="fill" />
      </button>
    );

  return (
    <button
      type="button"
      className="text-zinc-500 bg-zinc-700 hover:text-zinc-100 py-2 px-2 rounded-md"
    >
      {loadingScreenShot ? (
        <CircleNotch weight="bold" className="w-6 h-6 animate-spin" />
      ) : (
        <Camera weight="bold" className="w-6 h-6" onClick={onPrintScreenPage} />
      )}
    </button>
  );
};
