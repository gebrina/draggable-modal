import { KeyboardEvent } from "react";
import { FaCheck } from "react-icons/fa6";
import { CheckboxWrapper, InputChekbox, Label } from "./Checkbox.style";

export type TCheboxProps = {
  checked: boolean;
  label: string;
  id: string;
  onChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, label, id, onChange }: TCheboxProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onChange(!checked);
    }
  };

  const handleCheckboxClick = () => onChange(!checked);

  return (
    <CheckboxWrapper
      id={id}
      whileTap={{
        scale: 0.9,
        opacity: 0.8,
      }}
      onKeyDown={handleKeyDown}
      onClick={handleCheckboxClick}
    >
      <InputChekbox
        tabIndex={0}
        aria-checked={checked}
        aria-label={label}
        role="checkbox"
      >
        {checked && <FaCheck />}
      </InputChekbox>
      <Label>{label}</Label>
    </CheckboxWrapper>
  );
};
