"use client";
import { useRouter } from "next/navigation";
import TripAdvisorForm from "@/app/components/TripAdvisorForm";

export default function SignUpPage() {
  const router = useRouter();

  return <TripAdvisorForm isLogin={false} onBack={() => router.push("/")} />;
}
