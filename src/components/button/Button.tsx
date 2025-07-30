import { Button as StyledButton, TButtonVariant } from "./Button.style";

export type TButtonProps = {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
};

export const Button = ({ label, variant, onClick }: TButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
