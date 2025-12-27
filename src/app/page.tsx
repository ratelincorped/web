import { ComponentExample } from "@/components/component-example";
import { DarkModeToggle } from "@/feature/theme/component/theme-toggle";

export default function Page() {
  return (
    <div>
      <DarkModeToggle />
      <ComponentExample />
    </div>
  );
}
