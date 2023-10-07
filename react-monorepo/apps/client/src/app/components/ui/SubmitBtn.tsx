interface SubmitBtnProps {
  btnName: string;
  btnAction: () => void;
  btnClassName?: string;
}

export const SubmitBtn = ({
  btnName,
  btnAction,
  btnClassName,
}: SubmitBtnProps) => {
  return (
    <button
      onClick={btnAction}
      className={`w-1/4 text-xl rounded-lg h-[60px] outline-none bg-hk-accent-100 text-white bg-[#4e3bc4] hover:bg-[#4d32fa] duration-200 active:bg-[#3319e0]'${btnClassName}`}
    >
      {btnName}
    </button>
  );
};
