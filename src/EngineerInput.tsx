interface Props {
  index: number;
  checked: boolean;
  onChange: (i: number) => void;
}

export const EngineerInput = (props: Props) => {
  const { index, checked, onChange } = props;

  return (
    <input
      type={"checkbox"}
      checked={checked}
      onChange={() => {
        onChange(index);
      }}
    />
  );
};
