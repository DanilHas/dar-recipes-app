interface InstructionStepProps {
  step: string;
}

export default function InstructionStep({ step }: InstructionStepProps) {
  return (
    <li className="instructionStep">
      <p className="font-roboto text-sm leading-[22px] font-normal text-left text-customBlack mb-5">
        {step}
      </p>
    </li>
  );
}
