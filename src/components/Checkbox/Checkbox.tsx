import { clsx } from "clsx";
import * as CheckboxPrimiteve from "@radix-ui/react-checkbox";
import { Check} from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimiteve.CheckboxIndicatorProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimiteve.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
        <CheckboxPrimiteve.Indicator asChild>
            <Check weight="bold" className="w-5 h-5 text-cyan-500"/>
        </CheckboxPrimiteve.Indicator>
    </CheckboxPrimiteve.Root>
  )
}
