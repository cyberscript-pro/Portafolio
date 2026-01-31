import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { IconType } from "react-icons";

export interface StackItem {
  name: string;
  icon: IconType;
}

interface TecnoStatProps {
  items: StackItem[];
  className?: string;
}

export function TecnoStat({ items, className }: TecnoStatProps) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto scrollbar-hide sm:flex-wrap snap-x snap-mandatory",
        className,
      )}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <Badge
            variant="secondary"
            className="
              flex items-center gap-1.5 px-3 py-1 text-xs
              rounded-full bg-muted/60 backdrop-blur
              hover:bg-muted transition-colors snap-start
            "
          >
            <span className="text-muted-foreground">
              <item.icon />
            </span>
            {item.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
