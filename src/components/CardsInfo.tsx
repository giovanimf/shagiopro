import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
};

export function CardsInfo({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card
      className="flex flex-row items-center justify-between p-4 bg-gradient-to-t from-primary/5
        to-card dark:bg-card w-full"
    >
      <div>
        <p className="text-base text-muted-foreground font-semibold">{title}</p>
        <span className="text-xl font-bold">{value}</span>
      </div>
      <div
        className="rounded-xl p-4 bg-gradient-to-br from-primary to-primary text-primary-foreground
          flex items-center justify-center"
      >
        <Icon className="w-6 h-6" />
      </div>
    </Card>
  );
}
