import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formPayload = {
      Name: formData.get("name"),
      Email: formData.get("email"),
      Mobile: formData.get("mobile"), // You should add a mobile input field in the form
      Message: formData.get("message"),
    };
    console.log(formPayload);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwAdVwMTaK0zfH0erAtEVhacXmUHT559vwhfSsNJNg2nv1ONNLhXtEA5hPD5WvzkUku/exec",
        {
          method: "POST",
          body: new URLSearchParams(formPayload as any),
        }
      );

      const data = await response.json();

      if (data.result === "success") {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        form.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to send message. ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <Input name="name" required placeholder="Your name" />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Input name="email" type="email" required placeholder="Your email" />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile
          </label>
          <Input
            name="mobile"
            type="tel"
            required
            placeholder="Your mobile number"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            name="message"
            required
            placeholder="Your message"
            className="min-h-[150px]"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 hover:shadow-md"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
