"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const RegistrationModal = DialogPrimitive.Root;

const RegistrationModalTrigger = DialogPrimitive.Trigger;

const RegistrationModalPortal = DialogPrimitive.Portal;

const RegistrationModalClose = DialogPrimitive.Close;

const RegistrationModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
RegistrationModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const RegistrationModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <RegistrationModalPortal>
    <RegistrationModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "text-center text-black fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background-4 p-8 pt-16 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
        className,
      )}
      {...props}
    >
      <Image
        src="/modal-flower.png"
        alt="Modal Flower"
        height={200}
        width={200}
        className="w-20 h-auto absolute top-2 left-2 z-[100]"
      />
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </RegistrationModalPortal>
));
RegistrationModalContent.displayName = DialogPrimitive.Content.displayName;

const RegistrationModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 items-center text-center sm:text-left text-black",
      className,
    )}
    {...props}
  />
);
RegistrationModalHeader.displayName = "DialogHeader";

const RegistrationModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2 w-full",
      className,
    )}
    {...props}
  />
);
RegistrationModalFooter.displayName = "DialogFooter";

const RegistrationModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-bold leading-none tracking-tight", className)}
    {...props}
  />
));
RegistrationModalTitle.displayName = DialogPrimitive.Title.displayName;

const RegistrationModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-black text-center", className)}
    {...props}
  />
));
RegistrationModalDescription.displayName =
  DialogPrimitive.Description.displayName;

export {
  RegistrationModal,
  RegistrationModalPortal,
  RegistrationModalOverlay,
  RegistrationModalClose,
  RegistrationModalTrigger,
  RegistrationModalContent,
  RegistrationModalHeader,
  RegistrationModalFooter,
  RegistrationModalTitle,
  RegistrationModalDescription,
};
