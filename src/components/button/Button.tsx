import { Button as StyledButton, TButtonVariant } from "./Button.style";

export type TButtonProps = {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
};

export const Button = ({ label, variant, onClick }: TButtonProps) => (
  <StyledButton
    whileTap={{
      scale: 0.9,
    }}
    variant={variant}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);
