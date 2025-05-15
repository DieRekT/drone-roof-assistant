'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AssistantPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [context, setContext] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput('');

    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages, context }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder('utf-8');
    let assistantMessage = '';

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;
      assistantMessage += decoder.decode(value);
      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">DroneLogIQ Assistant</h1>
      <p className="text-muted-foreground">Ask questions about your drone jobs, photos, or flight logs.</p>

      <Card className="h-[400px] overflow-y-auto p-4 space-y-2">
        <CardContent>
          {messages.length === 0 && <p className="text-sm text-muted">No messages yet.</p>}
          {messages.map((msg, i) => (
            <div key={i} className={`text-sm ${msg.role === 'user' ? 'text-right text-blue-600' : 'text-gray-800'}`}>
              <p><strong>{msg.role === 'user' ? 'You' : 'DroneIQ'}:</strong> {msg.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Textarea
        className="w-full"
        rows={2}
        placeholder="Paste flight log text or notes here (optional)..."
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />

      <div className="flex space-x-2">
        <Textarea
          className="flex-1"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your mission..."
        />
        <Button onClick={sendMessage} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
}
