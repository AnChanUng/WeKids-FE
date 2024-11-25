export default function ChoiceDesign({ text = "자녀가 선택한 디자인" }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-R-28 text-white">{text}</div>
      <div className="w-[196px] h-[312px] bg-red-100"></div>
    </div>
  );
}