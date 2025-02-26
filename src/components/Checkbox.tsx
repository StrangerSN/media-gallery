import { useEffect, useRef } from "react";

interface Props extends Omit<React.ComponentProps<"input">, "type"> {
  indeterminate?: boolean;
}

export default function Checkbox(props: Props) {
  const { indeterminate, ...restProps } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.indeterminate = Boolean(indeterminate);
  }, [ref, indeterminate]);

  return <input ref={ref} type="checkbox" {...restProps} />;
}
