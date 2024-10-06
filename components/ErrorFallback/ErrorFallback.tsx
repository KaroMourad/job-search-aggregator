import React from "react";
import { ErrorFallbackProps } from "./ErrorFallback.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  errorMessage,
  onRetry,
  onClose,
  className,
}) => {
  return (
    <div
      className={cn(
        "animate-fadeIn flex flex-col items-center justify-center p-[var(--spacing-md,1rem)] text-center fixed inset-0 bg-[var(--background-opacity)] backdrop-blur-[6px] z-[1]",
        className
      )}
    >
      <p
        className={
          "mb-[var(--spacing-md,1rem)] text-[var(--primary-foreground,#fff)]"
        }
      >
        {errorMessage}
      </p>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button onClick={onRetry}>Try Again</Button>
      </div>
    </div>
  );
};

ErrorFallback.displayName = "ErrorFallback";
export default ErrorFallback;
