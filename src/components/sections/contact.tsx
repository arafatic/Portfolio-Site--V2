import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-8 py-16 md:py-24 border-t border-border/40">
      <div className="flex flex-col items-center justify-center text-center max-w-[600px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:arafatul.designer@gmail.com"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          <Mail className="mr-2 h-4 w-4" />
          Say Hello
        </a>
      </div>
    </section>
  );
}
