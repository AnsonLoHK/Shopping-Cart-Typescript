// TODO: 定義 Button
export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  oneOfYourProps: unknown;
}

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};
