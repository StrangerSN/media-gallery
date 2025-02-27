import classNames from "classnames";

interface Props {
  isSelected: boolean;
  orderNumber: number;
}
export default function MediaFileCardCheckbox(props: Props) {
  const { isSelected, orderNumber } = props;

  const classname = classNames(
    "absolute flex items-center justify-center text-white text-xs bottom-1 left-1 w-5 h-5 cursor-pointer rounded border-2",
    {
      "bg-primary border-primary block": isSelected,
      "bg-transparent border-white hover:bg-white/40 hidden group-hover:block":
        !isSelected,
    }
  );

  return <div className={classname}>{isSelected && orderNumber}</div>;
}
