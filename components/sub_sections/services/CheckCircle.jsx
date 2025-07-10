import { CheckCircle } from "lucide-react";

export default function CheckCircleList({title}) {
    return (
      <li className="flex items-center text-sm text-foreground/90">
        <CheckCircle className="h-4 w-4 mr-2 text-foreground/30" />
        {title}
      </li>
    );
};
