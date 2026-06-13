"use client";

import { useState, useRef, forwardRef, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText, X, Check, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabase";
import FadeIn from "@/components/animations/FadeIn";


const backgroundOptions = [
  "Aerospace Engineering",
  "Biology / Physiology",
  "Clinical Medicine / Anesthesiology",
  "Data Analysis / Research",
  "Other",
];

const timeOptions = ["2–5 hours", "5–10 hours", "10+ hours"];

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  occupation: z.string().min(1, { message: "Current occupation is required." }),
  linkedin: z.string()
    .url({ message: "Please enter a valid URL." })
    .or(z.literal(""))
    .optional(),
  country: z.string().min(1, { message: "Country is required." }),
  motivation: z.string().min(1, { message: "Motivation statement is required." }),
  backgrounds: z.array(z.string()),
  weeklyTime: z.string().min(1, { message: "Please select a time commitment." }),
  skill: z.string().optional(),
  comfortableReviewing: z.string().optional(),
  questions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function JoinForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Resume upload local state
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  // Submit status
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      occupation: "",
      linkedin: "",
      country: "",
      motivation: "",
      backgrounds: [],
      weeklyTime: "",
      skill: "",
      comfortableReviewing: "",
      questions: "",
    },
  });

  const backgrounds = watch("backgrounds") || [];
  const weeklyTime = watch("weeklyTime") || "";
  const comfortableReviewing = watch("comfortableReviewing") || "";

  const toggleBackground = (option: string) => {
    const current = watch("backgrounds") || [];
    const next = current.includes(option)
      ? current.filter((b) => b !== option)
      : [...current, option];
    setValue("backgrounds", next, { shouldValidate: true });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setFileError("Only PDF files are accepted.");
      setFile(null);
      return;
    }
    if (selected.size > 5 * 1024 * 1024) {
      setFileError("File must be under 5 MB.");
      setFile(null);
      return;
    }
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");
    setFileError("");

    if (!file) {
      setFileError("Resume is required.");
      return;
    }

    try {
      // 1. Upload resume to Supabase Storage bucket "resumes"
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      // 2. Get file URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("resumes").getPublicUrl(fileName);

      // 3. Insert applicant data into "applicants" table
      const { error: dbError } = await supabase
        .from("applicants")
        .insert([
          {
            full_name: data.fullName,
            email: data.email,
            occupation: data.occupation,
            linkedin: data.linkedin || null,
            country: data.country,
            motivation: data.motivation,
            background: data.backgrounds,
            time_commitment: data.weeklyTime,
            skill: data.skill || null,
            journal_review: data.comfortableReviewing || null,
            resume_url: publicUrl,
            final_questions: data.questions || null,
          },
        ]);

      console.log("DB ERROR FULL:", dbError);

      if (dbError) {
        throw new Error(`Database submission failed: ${dbError.message}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setSubmitError(
        err.message || "An unexpected error occurred during submission."
      );
    }
  };

  // ── Success state ──
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <FadeIn direction="up">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-500/10 mb-8">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Application Submitted
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-[#A1A1AA] font-sans text-base max-w-md leading-relaxed mb-10">
            Application submitted successfully. Welcome to Project Torpor.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono uppercase tracking-widest text-[#6B8AFD] border border-[#6B8AFD]/30 rounded-md hover:bg-[#6B8AFD]/10 transition-colors duration-300"
          >
            Return Home
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeIn>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-3xl mx-auto w-full"
    >
      {/* ────────────────────────────────────────────────
          SECTION 1 — Basic Information
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-xs tracking-widest text-[#6B8AFD] uppercase mb-3">
            01 — Basic Information
          </p>
          <h2 className="font-sans text-xl md:text-3xl font-bold text-[#F5F5F5] mb-8 md:mb-10">
            Tell us about yourself
          </h2>

          <div className="flex flex-col gap-8">
            <FormField
              label="Full Name"
              required
              error={errors.fullName?.message}
              placeholder="Your full name"
              {...register("fullName")}
            />
            <FormField
              label="Email"
              required
              type="email"
              error={errors.email?.message}
              placeholder="you@example.com"
              {...register("email")}
            />
            <FormField
              label="Current Occupation / Area of Study"
              required
              error={errors.occupation?.message}
              placeholder="e.g. Aerospace Engineering Student"
              {...register("occupation")}
            />
            <FormField
              label="LinkedIn Profile URL"
              type="url"
              error={errors.linkedin?.message}
              placeholder="https://linkedin.com/in/..."
              {...register("linkedin")}
            />
            <FormField
              label="Country"
              required
              error={errors.country?.message}
              placeholder="Your country of residence"
              {...register("country")}
            />
          </div>
        </div>
      </FadeIn>

      <div className="h-px bg-[#2A2A2A] mb-20" />

      {/* ────────────────────────────────────────────────
          SECTION 2 — Motivation & Background
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-xs tracking-widest text-[#6B8AFD] uppercase mb-3">
            02 — Motivation & Background
          </p>
          <h2 className="font-sans text-xl md:text-3xl font-bold text-[#F5F5F5] mb-8 md:mb-10">
            Your interest in torpor research
          </h2>

          <div className="flex flex-col gap-10">
            {/* Motivation textarea */}
            <div>
              <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
                Why are you interested in joining Project Torpor?{" "}
                <span className="text-[#6B8AFD]">*</span>
              </label>
              <textarea
                rows={5}
                {...register("motivation")}
                placeholder="Tell us what draws you to this research..."
                className="w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-sans text-base py-3 px-0 placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300 resize-y min-h-[120px]"
              />
              {errors.motivation && (
                <p className="text-red-400 font-mono text-xs mt-2">
                  {errors.motivation.message}
                </p>
              )}
            </div>

            {/* Background checkboxes */}
            <div>
              <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-4">
                Which areas best describe your background?
              </label>
              <div className="flex flex-col gap-3">
                {backgroundOptions.map((option) => (
                  <label
                    key={option}
                    onClick={() => toggleBackground(option)}
                    className="group flex items-center gap-3 cursor-pointer py-1"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border transition-all duration-300 flex items-center justify-center ${backgrounds.includes(option)
                        ? "bg-[#6B8AFD] border-[#6B8AFD]"
                        : "border-[#2A2A2A] group-hover:border-[#555]"
                        }`}
                    >
                      {backgrounds.includes(option) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-[#A1A1AA] font-sans text-sm group-hover:text-[#F5F5F5] transition-colors duration-300">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Time commitment radios */}
            <div>
              <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-4">
                How much time can you realistically dedicate per week?{" "}
                <span className="text-[#6B8AFD]">*</span>
              </label>
              <div className="flex flex-col gap-3">
                {timeOptions.map((option) => (
                  <label
                    key={option}
                    onClick={() =>
                      setValue("weeklyTime", option, { shouldValidate: true })
                    }
                    className="group flex items-center gap-3 cursor-pointer py-1"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border transition-all duration-300 flex items-center justify-center ${weeklyTime === option
                        ? "border-[#6B8AFD]"
                        : "border-[#2A2A2A] group-hover:border-[#555]"
                        }`}
                    >
                      {weeklyTime === option && (
                        <div className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
                      )}
                    </div>
                    <span className="text-[#A1A1AA] font-sans text-sm group-hover:text-[#F5F5F5] transition-colors duration-300">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.weeklyTime && (
                <p className="text-red-400 font-mono text-xs mt-2">
                  {errors.weeklyTime.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="h-px bg-[#2A2A2A] mb-20" />

      {/* ────────────────────────────────────────────────
          SECTION 3 — Skills & Contributions
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-xs tracking-widest text-[#6B8AFD] uppercase mb-3">
            03 — Skills & Contributions
          </p>
          <h2 className="font-sans text-xl md:text-3xl font-bold text-[#F5F5F5] mb-8 md:mb-10">
            What you bring to the table
          </h2>

          <div className="flex flex-col gap-10">
            <div>
              <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
                What specific skill could you bring to our team?
              </label>
              <textarea
                rows={4}
                {...register("skill")}
                placeholder="Describe your relevant skills or expertise..."
                className="w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-sans text-base py-3 px-0 placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300 resize-y min-h-[100px]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-4">
                Are you comfortable reviewing academic journals and clinical
                studies?
              </label>
              <div className="flex gap-6">
                {["Yes", "No"].map((option) => (
                  <label
                    key={option}
                    onClick={() =>
                      setValue("comfortableReviewing", option, {
                        shouldValidate: true,
                      })
                    }
                    className="group flex items-center gap-3 cursor-pointer py-1"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border transition-all duration-300 flex items-center justify-center ${comfortableReviewing === option
                        ? "border-[#6B8AFD]"
                        : "border-[#2A2A2A] group-hover:border-[#555]"
                        }`}
                    >
                      {comfortableReviewing === option && (
                        <div className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
                      )}
                    </div>
                    <span className="text-[#A1A1AA] font-sans text-sm group-hover:text-[#F5F5F5] transition-colors duration-300">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="h-px bg-[#2A2A2A] mb-20" />

      {/* ────────────────────────────────────────────────
          SECTION 4 — Document Submission
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-xs tracking-widest text-[#6B8AFD] uppercase mb-3">
            04 — Document Submission
          </p>
          <h2 className="font-sans text-xl md:text-3xl font-bold text-[#F5F5F5] mb-8 md:mb-10">
            Upload your resume
          </h2>

          <div>
            <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-4">
              CV / Resume (PDF only, max 5 MB) <span className="text-[#6B8AFD]">*</span>
            </label>

            {!file ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-10 border border-dashed border-[#2A2A2A] rounded-md flex flex-col items-center gap-3 hover:border-[#6B8AFD]/50 transition-colors duration-300 cursor-pointer group"
              >
                <Upload className="w-6 h-6 text-[#555] group-hover:text-[#6B8AFD] transition-colors duration-300" />
                <span className="text-[#555] font-sans text-sm group-hover:text-[#A1A1AA] transition-colors duration-300">
                  Click to upload PDF
                </span>
              </button>
            ) : (
              <div className="flex items-center justify-between py-4 px-4 border border-[#2A2A2A] rounded-md">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#6B8AFD]" />
                  <div>
                    <p className="text-[#F5F5F5] font-sans text-sm">
                      {file.name}
                    </p>
                    <p className="text-[#555] font-mono text-xs">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 hover:bg-white/5 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-[#555] hover:text-red-400" />
                </button>
              </div>
            )}

            {fileError && (
              <p className="text-red-400 font-mono text-xs mt-3">{fileError}</p>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      </FadeIn>

      <div className="h-px bg-[#2A2A2A] mb-20" />

      {/* ────────────────────────────────────────────────
          SECTION 5 — Closing
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-[#6B8AFD] uppercase mb-3">
            05 — Closing
          </p>
          <h2 className="font-sans text-xl md:text-3xl font-bold text-[#F5F5F5] mb-8 md:mb-10">
            Anything else?
          </h2>

          <div>
            <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
              Any initial questions or thoughts?
            </label>
            <textarea
              rows={4}
              {...register("questions")}
              placeholder="Feel free to share anything else..."
              className="w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-sans text-base py-3 px-0 placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300 resize-y min-h-[100px]"
            />
          </div>
        </div>
      </FadeIn>

      {/* Global submit error */}
      {submitError && (
        <FadeIn direction="none">
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-md">
            <p className="text-red-400 font-mono text-xs">{submitError}</p>
          </div>
        </FadeIn>
      )}

      {/* ────────────────────────────────────────────────
          Buttons
         ──────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <div className="flex flex-col sm:flex-row gap-4 pt-8 pb-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6B8AFD] text-white font-sans text-sm font-semibold tracking-wide rounded-md hover:bg-[#5A7BF0] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#2A2A2A] text-[#A1A1AA] font-sans text-sm font-semibold tracking-wide rounded-md hover:border-[#555] hover:text-[#F5F5F5] transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </FadeIn>
    </form>
  );
}

// ── Reusable text input field ──
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, required, type = "text", placeholder, error, ...props }, ref) => {
    return (
      <div>
        <label className="block font-mono text-xs tracking-widest text-[#A1A1AA] uppercase mb-3">
          {label}
          {required && <span className="text-[#6B8AFD] ml-1">*</span>}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...props}
          className="w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] font-sans text-base py-3 px-0 placeholder:text-[#555] focus:border-[#6B8AFD] focus:outline-none transition-colors duration-300"
        />
        {error && (
          <p className="text-red-400 font-mono text-xs mt-2">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";
