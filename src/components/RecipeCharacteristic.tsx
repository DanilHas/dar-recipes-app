interface RecipeCharacteristicProps {
  title: string;
  text: string | number;
  style?: string;
  area: string;
  cals?: boolean;
}

export default function RecipeCharacteristic({
  title,
  text,
  style,
  area,
  cals,
}: RecipeCharacteristicProps) {
  return (
    <div style={{ gridArea: area }} className="bg-white pb-6 pt-4 tablet:pb-5">
      <h2
        className="pb-4 shadow-characteristicTitle
      font-roboto text-base font-medium text-left text-customBlack px-6 tablet:pb-3"
      >
        {title}
      </h2>
      <p
        className={`pt-6 px-6 font-roboto text-base text-left 
      text-customBlack ${style} tablet:pt-3`}
      >
        {text}
      </p>
      {cals && (
        <p
          className="font-roboto text-sm leading-[22px] text-left 
      text-opacityBlack mt-2 px-6"
        >
          100 gram
        </p>
      )}
    </div>
  );
}
