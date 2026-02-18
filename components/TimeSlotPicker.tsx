"use client";

import { useState, useMemo } from "react";

interface TimeSlot {
  date: string;
  time: string;
}

interface TimeSlotPickerProps {
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export default function TimeSlotPicker({ selectedSlot, onSelectSlot }: TimeSlotPickerProps) {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  // Generate available time slots for the next 2 weeks
  const availableSlots = useMemo(() => {
    const slots: { date: Date; dateString: string; times: string[] }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Generate slots for 14 days
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip Sundays (day 0)
      if (date.getDay() === 0) continue;

      const dateString = date.toISOString().split("T")[0];

      // Available times: 6am-9pm in 1-hour slots
      const times: string[] = [];
      for (let hour = 6; hour <= 20; hour++) {
        const timeString = `${hour.toString().padStart(2, "0")}:00`;
        times.push(timeString);
      }

      slots.push({ date, dateString, times });
    }

    return slots;
  }, []);

  // Get slots for current week view (7 days at a time)
  const visibleSlots = useMemo(() => {
    const startIndex = currentWeekOffset * 7;
    return availableSlots.slice(startIndex, startIndex + 7);
  }, [availableSlots, currentWeekOffset]);

  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const formatTime = (time: string) => {
    const [hour] = time.split(":");
    const hourNum = parseInt(hour);
    if (hourNum === 12) return "12:00 PM";
    if (hourNum > 12) return `${hourNum - 12}:00 PM`;
    return `${hourNum}:00 AM`;
  };

  const isSelected = (dateString: string, time: string) => {
    return selectedSlot?.date === dateString && selectedSlot?.time === time;
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6">
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => setCurrentWeekOffset(Math.max(0, currentWeekOffset - 1))}
          disabled={currentWeekOffset === 0}
          className="px-4 py-2 bg-secondary-cream text-text-dark rounded hover:bg-primary-green disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous Week
        </button>
        <span className="text-text-dark font-cantarell">
          {currentWeekOffset === 0 ? "This Week" : "Next Week"}
        </span>
        <button
          type="button"
          onClick={() => setCurrentWeekOffset(Math.min(1, currentWeekOffset + 1))}
          disabled={currentWeekOffset === 1}
          className="px-4 py-2 bg-secondary-cream text-text-dark rounded hover:bg-primary-green disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next Week →
        </button>
      </div>

      {/* Time Slots Grid */}
      <div className="space-y-6">
        {visibleSlots.map((slot) => (
          <div key={slot.dateString}>
            <h4 className="text-accent-green font-poppins font-semibold mb-3">
              {formatDate(slot.date)}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {slot.times.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => onSelectSlot({ date: slot.dateString, time })}
                  className={`px-3 py-2 rounded text-sm font-cantarell transition-colors ${
                    isSelected(slot.dateString, time)
                      ? "bg-primary-green text-text-dark font-bold"
                      : "bg-secondary-cream text-text-dark hover:bg-primary-green"
                  }`}
                >
                  {formatTime(time)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Slot Display */}
      {selectedSlot && (
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-text-dark">
            <span className="font-semibold">Selected:</span>{" "}
            {formatDate(new Date(selectedSlot.date))} at {formatTime(selectedSlot.time)}
          </p>
        </div>
      )}
    </div>
  );
}

