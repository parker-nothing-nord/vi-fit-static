"use client";

import { useState } from "react";
import CollapsibleTimeSlotPicker from "./CollapsibleTimeSlotPicker";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedSlot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.selectedSlot) {
      setErrorMessage("Please select a time slot");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        selectedSlot: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us at (778) 538-4998");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-text-dark font-cantarell mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-white text-text-dark border border-gray-300 rounded focus:outline-none focus:border-accent-green transition-colors"
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-text-dark font-cantarell mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-white text-text-dark border border-gray-300 rounded focus:outline-none focus:border-accent-green transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-text-dark font-cantarell mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white text-text-dark border border-gray-300 rounded focus:outline-none focus:border-accent-green transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-text-dark font-cantarell mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white text-text-dark border border-gray-300 rounded focus:outline-none focus:border-accent-green transition-colors"
            placeholder="(778) 555-1234"
          />
        </div>

        {/* Time Slot Picker */}
        <div>
          <label className="block text-text-dark font-cantarell mb-2">
            Select Your Preferred Time Slot *
          </label>
          <CollapsibleTimeSlotPicker
            selectedSlot={formData.selectedSlot}
            onSlotSelect={(slot) => setFormData({ ...formData, selectedSlot: slot })}
          />
        </div>

        {/* Error Message */}
        {(submitStatus === "error" || errorMessage) && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded">
            {errorMessage || "An error occurred. Please try again."}
          </div>
        )}

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded">
            Booking submitted successfully! We'll contact you shortly to confirm.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 min-h-[56px] bg-secondary-cream text-text-dark font-cantarell font-bold text-sm uppercase tracking-wider transition-colors hover:bg-primary-green disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Book Your Free Intro"}
        </button>
      </form>
    </div>
  );
}

