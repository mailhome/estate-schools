import { cn } from "@/lib/utils";

interface WidthContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const WidthContainer = ({
    children,
    className
}: WidthContainerProps) => {
    return (
        <div className={cn("2xl:max-w-screen-2xl mx-auto container g:px-16 xl:px-10 md:px-10 px-8", className)}>
            {children}
        </div>
    )
}