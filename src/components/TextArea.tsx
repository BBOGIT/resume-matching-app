import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default function TextArea({ label, value, onChange, placeholder }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}