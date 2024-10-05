import React from "react";
import { ErrorFallbackProps } from "./ErrorFallback.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  errorMessage,
  onRetry,
  onClose,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-[var(--spacing-md,1rem)] text-center fixed inset-0 bg-[var(--background-opacity)] backdrop-blur-[6px] z-[1]",
        className
      )}
    >
      <Button
        className={
          "absolute top-5 right-5 bg-none z-100 px-[var(--spacing-xxs,0.25rem)]"
        }
        variant="outline"
        size="sm"
        onClick={onClose}
        aria-label="Close"
      >
        <Cross1Icon className="w-6 h-6 text-[var(--primary,#dc3545)]" />
      </Button>
      <p
        className={
          "mb-[var(--spacing-md,1rem)] text-[var(--primary-foreground,#fff)] font-medium"
        }
      >
        {errorMessage}
      </p>
      <Button className={"border-none"} onClick={onRetry}>
        Try Again
      </Button>
    </div>
  );
};

ErrorFallback.displayName = "ErrorFallback";

export default ErrorFallback;
