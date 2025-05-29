"use client";

import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account?")) {
     // "Account deletion logic would go here."
    }
  };

  const handleChangePassword = () => {
if (confirm("Are you sure to change the password?")) {
     // "Password change logic would go here."
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        <div className="bg-white shadow rounded-lg p-6 space-y-6 max-w-xl">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Email Notifications</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>

          {/* Change Password */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Change Password</h2>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-2 p-2 border border-gray-300 text-gray-600 rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
            <button
  onClick={handleChangePassword}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
>
  Change Password
</button>

          </div>

          {/* Delete Account */}
          <div className="pt-4 border-t">
            <button
  onClick={handleDeleteAccount}
  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
>
  Delete My Account
</button>

          </div>
        </div>
      </main>
    </div>
  );
}
