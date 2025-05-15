import { TextareaHTMLAttributes } from 'react';

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full p-2 border rounded resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
