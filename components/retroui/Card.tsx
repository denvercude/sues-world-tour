import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Text } from "./Text";
 
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
 
const Card = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block shadow-md transition-all hover:shadow-xs bg-card border-2 border-gray-200",
        className,
      )}
      {...props}
    />
  );
};
 
const CardHeader = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};
 
const CardTitle = ({ className, ...props }: ICardProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};
 
const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-muted-foreground", className)} {...props} />
);
 
const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("pt-4 px-4", className)} {...props} />;
};
 
const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});
 
export { CardComponent as Card };