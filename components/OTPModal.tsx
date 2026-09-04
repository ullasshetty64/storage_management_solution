"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { verifySecret, sendEmailOTP } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const OtpModal = ({
  accountId,
  email,
}: {
  accountId: string;
  email: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const sessionId = await verifySecret({ accountId, password });
      if (sessionId) router.push("/");
    } catch (error) {
      console.log("Failed to verify OTP", error);
    }

    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    await sendEmailOTP({ email });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="sm:max-w-md bg-white p-8 rounded-2xl outline-none">
        <AlertDialogHeader className="relative flex flex-col gap-3">
          <AlertDialogTitle className="text-2xl font-bold text-center">
            Enter Your OTP
            <Image
              src="/assets/icons/close-dark.svg"
              alt="close"
              width={20}
              height={20}
              onClick={() => setIsOpen(false)}
              className="absolute -right-2 -top-2 cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-center text-gray-500">
            We&apos;ve sent a code to{" "}
            <span className="pl-1 text-brand font-medium">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-center w-full my-4">
          <InputOTP maxLength={6} value={password} onChange={setPassword}>
            <InputOTPGroup className="gap-2">
              <InputOTPSlot
                index={0}
                className="w-12 h-12 text-lg border rounded-md"
              />
              <InputOTPSlot
                index={1}
                className="w-12 h-12 text-lg border rounded-md"
              />
              <InputOTPSlot
                index={2}
                className="w-12 h-12 text-lg border rounded-md"
              />
              <InputOTPSlot
                index={3}
                className="w-12 h-12 text-lg border rounded-md"
              />
              <InputOTPSlot
                index={4}
                className="w-12 h-12 text-lg border rounded-md"
              />
              <InputOTPSlot
                index={5}
                className="w-12 h-12 text-lg border rounded-md"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={handleSubmit}
              className="w-full bg-brand hover:bg-brand/90 text-white rounded-full h-12"
              type="button"
            >
              Submit
              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  width={24}
                  height={24}
                  className="ml-2 animate-spin"
                />
              )}
            </AlertDialogAction>

            <div className="text-sm mt-2 text-center text-gray-500">
              Didn&apos;t get a code?
              <Button
                type="button"
                variant="link"
                className="pl-1 text-brand hover:text-brand/80"
                onClick={handleResendOtp}
              >
                Click to resend
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpModal;
