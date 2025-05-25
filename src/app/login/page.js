// app/login/page.tsx
"use client";
import { useRouter } from "next/navigation";
import TripAdvisorForm from "@/app/components/TripAdvisorForm";

export default function LoginPage() {
  const router = useRouter();

  return <TripAdvisorForm isLogin={true} onBack={() => router.push("/")} />;
}