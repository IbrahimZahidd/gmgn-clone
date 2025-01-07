"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WalletModalProps } from "@/types/nav";

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            Please select a wallet to connect
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
