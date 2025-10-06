import FloatingWhatsApp from '../FloatingWhatsApp';

export default function FloatingWhatsAppExample() {
  return (
    <div className="h-screen overflow-auto">
      <div className="h-[200vh]">
        <p className="p-8">Scroll down to see the floating WhatsApp button appear...</p>
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
