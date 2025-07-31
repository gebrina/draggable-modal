import { KeyboardEvent } from "react";
import { CheckboxWrapper, Input, Label } from "./Checkbox.style";

export type TCheboxProps = {
  checked: boolean;
  label: string;
  id: string;
  onChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, label, id, onChange }: TCheboxProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.charCode === 13) {
      onChange(!checked);
    }
  };

  return (
    <CheckboxWrapper>
      <Input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onKeyDown={handleKeyDown}
      />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};
