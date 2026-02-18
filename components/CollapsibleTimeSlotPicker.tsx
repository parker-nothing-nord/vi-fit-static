"use client";

import { useState } from "react";

interface CollapsibleTimeSlotPickerProps {
  selectedSlot: string;
  onSlotSelect: (slot: string) => void;
}

export default function CollapsibleTimeSlotPicker({
  selectedSlot,
  onSlotSelect,
}: CollapsibleTimeSlotPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Generate next 14 days (excluding Sundays)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDate = new Date(today);

    while (daysAdded < 14) {
      if (currentDate.getDay() !== 0) {
        // Exclude Sundays
        dates.push(new Date(currentDate));
        daysAdded++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // Generate time slots for a given date
  const generateTimeSlots = (date: Date) => {
    const slots = [];
    const startHour = 6; // 6 AM
    const endHour = 21; // 9 PM

    for (let hour = startHour; hour < endHour; hour++) {
      const slotDate = new Date(date);
      slotDate.setHours(hour, 0, 0, 0);
      slots.push(slotDate);
    }

    return slots;
  };

  const dates = generateDates();

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(formatDateKey(date));
  };

  const handleTimeSelect = (slot: Date) => {
    onSlotSelect(slot.toISOString());
    setIsOpen(false);
    setSelectedDate(null);
  };

  const selectedDateObj = selectedDate
    ? dates.find((d) => formatDateKey(d) === selectedDate)
    : null;

  return (
    <div className="w-full">
      {/* Collapsed State - Shows selected time or prompt */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white text-text-dark border border-gray-300 rounded text-left flex items-center justify-between hover:border-accent-green transition-colors"
      >
        <span className={selectedSlot ? "text-text-dark" : "text-gray-400"}>
          {selectedSlot
            ? formatTime(new Date(selectedSlot)) +
              " on " +
              formatDate(new Date(selectedSlot))
            : "Select a date and time"}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expanded State */}
      {isOpen && (
        <div className="mt-2 bg-white border border-gray-300 rounded p-4 max-h-[400px] overflow-y-auto">
          {!selectedDate ? (
            /* Step 1: Pick a Day */
            <div>
              <h3 className="font-poppins font-semibold text-text-dark mb-3">
                Step 1: Pick a Day
              </h3>
              <div className="space-y-2">
                {dates.map((date) => (
                  <button
                    key={formatDateKey(date)}
                    type="button"
                    onClick={() => handleDateSelect(date)}
                    className="w-full px-4 py-3 bg-secondary-cream text-text-dark rounded hover:bg-primary-green transition-colors text-left font-cantarell"
                  >
                    {formatDate(date)}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Step 2: Pick a Time */
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-poppins font-semibold text-text-dark">
                  Step 2: Pick a Time on {formatDate(selectedDateObj!)}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedDate(null)}
                  className="text-accent-green hover:text-hover-green text-sm font-cantarell"
                >
                  ← Back
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {generateTimeSlots(selectedDateObj!).map((slot) => {
                  const slotISO = slot.toISOString();
                  const isSelected = selectedSlot === slotISO;

                  return (
                    <button
                      key={slotISO}
                      type="button"
                      onClick={() => handleTimeSelect(slot)}
                      className={`px-4 py-2 rounded font-cantarell text-sm transition-colors ${
                        isSelected
                          ? "bg-accent-green text-white"
                          : "bg-secondary-cream text-text-dark hover:bg-primary-green"
                      }`}
                    >
                      {formatTime(slot)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


