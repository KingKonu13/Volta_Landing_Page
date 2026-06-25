"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  type: "experts" | "sponsors";
  inverted?: boolean;
  className?: string;
}

export function ContactForm({ type, inverted = false, className }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          name: formData.name,
          email: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "" });
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className={cn("text-center", className)}>
        <p className={inverted ? "text-[#f8f6f2]" : "text-[#1c1612]"}>
          We'll reach out to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div>
        <label
          htmlFor={`${type}-name`}
          className={cn(
            "block text-xs font-medium uppercase tracking-[0.18em] mb-2",
            inverted ? "text-[#ddd2c0]" : "text-[#6c5e4e]"
          )}
        >
          Name
        </label>
        <input
          type="text"
          id={`${type}-name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={cn(
            "w-full rounded-[8px] px-4 py-3 text-[15px] leading-[1.55] transition-all duration-200 focus-visible:outline-none",
            inverted
              ? "bg-[#f8f6f2]/10 border border-[#f8f6f2]/20 text-[#f8f6f2] placeholder:text-[#f8f6f2]/40 focus:border-[#f8f6f2]/45"
              : "bg-[#f8f6f2] border border-[#1c1612]/12 text-[#1c1612] placeholder:text-[#6c5e4e]/50 focus:border-[#1c1612]/30",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            inverted ? "focus:ring-[#f8f6f2]/20" : "focus:ring-[#1c1612]/10"
          )}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor={`${type}-email`}
          className={cn(
            "block text-xs font-medium uppercase tracking-[0.18em] mb-2",
            inverted ? "text-[#ddd2c0]" : "text-[#6c5e4e]"
          )}
        >
          Email
        </label>
        <input
          type="email"
          id={`${type}-email`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={cn(
            "w-full rounded-[8px] px-4 py-3 text-[15px] leading-[1.55] transition-all duration-200 focus-visible:outline-none",
            inverted
              ? "bg-[#f8f6f2]/10 border border-[#f8f6f2]/20 text-[#f8f6f2] placeholder:text-[#f8f6f2]/40 focus:border-[#f8f6f2]/45"
              : "bg-[#f8f6f2] border border-[#1c1612]/12 text-[#1c1612] placeholder:text-[#6c5e4e]/50 focus:border-[#1c1612]/30",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            inverted ? "focus:ring-[#f8f6f2]/20" : "focus:ring-[#1c1612]/10"
          )}
          placeholder="your@email.com"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "inline-flex items-center justify-center rounded-[8px] px-6 py-3 text-[15px] leading-[1.55] font-medium tracking-[-0.005em] transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap active:scale-[0.98] w-full",
          inverted
            ? "bg-[#f8f6f2] text-[#1c1612] hover:bg-[#f8f6f2]/90"
            : "bg-[#1c1612]/85 text-[#f8f6f2] hover:bg-[#1c1612]"
        )}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
