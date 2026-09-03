"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface EmailVerificationProps {
    email: string;
    onEmailChange: (email: string) => void;
    onVerified: () => void;
    error?: string;
}

export default function EmailVerification({
    email,
    onEmailChange,
    onVerified,
    error,
}: EmailVerificationProps) {
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [verified, setVerified] = useState(false);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [otpError, setOtpError] = useState("");

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const sendOTP = async () => {
        setMessage("");
        setOtpError("");

        if (!email) {
            setOtpError("Please enter your email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/auth/send-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setOtpError(
                    data.detail || "Failed to send verification code."
                );
                return;
            }

            setOtpSent(true);
            setMessage(
                "Verification code sent. Please check your email."
            );
        } catch (error) {
            console.error(error);

            setOtpError(
                "Unable to connect to the verification server."
            );
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = async () => {
        setMessage("");
        setOtpError("");

        if (!otp) {
            setOtpError("Please enter the verification code.");
            return;
        }

        if (otp.length !== 6) {
            setOtpError("Verification code must contain 6 digits.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/auth/verify-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        otp,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setOtpError(
                    data.detail || "Verification failed."
                );
                return;
            }

            if (data.verified === true) {
                setVerified(true);
                setMessage("Email verified successfully.");

                onVerified();
            } else {
                setOtpError(
                    data.message || "Incorrect verification code."
                );
            }
        } catch (error) {
            console.error(error);

            setOtpError(
                "Unable to connect to the verification server."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* Email */}
            <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
                Email
                <span className="text-[#6B8AFD] ml-1">*</span>
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    disabled={verified}
                    onChange={(e) => {
                        onEmailChange(e.target.value);
                        setOtpSent(false);
                        setOtp("");
                        setMessage("");
                        setOtpError("");
                    }}
                    placeholder="you@example.com"
                    className="flex-1 w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-sans text-base py-3 px-0 placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                />

                {!verified && (
                    <button
                        type="button"
                        onClick={sendOTP}
                        disabled={loading}
                        className="px-5 py-3 border border-[#2A2A2A] text-[#A1A1AA] font-mono text-xs uppercase tracking-widest rounded-md hover:border-[#6B8AFD] hover:text-[#6B8AFD] transition-colors duration-300 disabled:opacity-50"
                    >
                        {loading && !otpSent
                            ? "Sending..."
                            : otpSent
                                ? "Resend Code"
                                : "Send Code"}
                    </button>
                )}
            </div>

            {/* React Hook Form email error */}
            {error && (
                <p className="text-red-400 font-mono text-xs mt-2">
                    {error}
                </p>
            )}

            {/* OTP */}
            {otpSent && !verified && (
                <div className="mt-6">
                    <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
                        Verification Code
                    </label>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                                const value = e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 6);

                                setOtp(value);
                                setOtpError("");
                            }}
                            placeholder="Enter 6-digit code"
                            className="flex-1 w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-mono text-base py-3 px-0 tracking-[0.35em] placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300"
                        />

                        <button
                            type="button"
                            onClick={verifyOTP}
                            disabled={loading}
                            className="px-5 py-3 bg-[#6B8AFD] text-white font-mono text-xs uppercase tracking-widest rounded-md hover:bg-[#5A7BF0] transition-colors duration-300 disabled:opacity-50"
                        >
                            {loading ? "Checking..." : "Verify"}
                        </button>
                    </div>
                </div>
            )}

            {/* Success */}
            {verified && (
                <div className="flex items-center gap-2 mt-4 text-emerald-400 font-mono text-xs">
                    <Check className="w-4 h-4" />
                    Email verified successfully
                </div>
            )}

            {/* Message */}
            {message && !verified && (
                <p className="text-[#A1A1AA] font-mono text-xs mt-3">
                    {message}
                </p>
            )}

            {/* OTP Error */}
            {otpError && (
                <p className="text-red-400 font-mono text-xs mt-3">
                    {otpError}
                </p>
            )}
        </div>
    );
}