import { SetNewPasswordForm } from "@/app/ui/set-new-password-form";

export default function ConfirmResetPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SetNewPasswordForm />
      </div>
    </div>
  );
}
