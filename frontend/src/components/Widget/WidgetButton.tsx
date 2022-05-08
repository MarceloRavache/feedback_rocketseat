interface WidgetButtonProps {
  onSubmitForm: () => void;
  disabledSubmit: boolean;
}

export const WidgetButton: React.FC<WidgetButtonProps> = ({
  onSubmitForm,
  disabledSubmit,
}) => {
  return (
    <button
      type="button"
      className="min-w-[200px] w-full h-10 bg-brand-500 rounded-md"
      onClick={onSubmitForm}
      disabled={disabledSubmit}
    >
      Enviar
    </button>
  );
};
