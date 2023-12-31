type SmallTextProps = {
  children: React.ReactNode;
};

export default function SmallText({ children }: SmallTextProps) {
  return (
    <span className="text-gray-400 text-sm leading-5 font-normal">
      {children}
    </span>
  );
}
