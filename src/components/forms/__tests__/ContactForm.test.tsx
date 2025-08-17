import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "@/components/forms/ContactForm";

// Mock router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("ContactForm", () => {
  it("should render all form fields", () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Child's Age")).toBeInTheDocument();
    expect(screen.getByLabelText("Subjects")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("should display validation errors for required fields", async () => {
    render(<ContactForm />);
    
    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));
    
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("should display validation error for invalid email", async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "invalid-email" },
    });
    
    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));
    
    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });
  });

  it("should select and deselect subjects", async () => {
    render(<ContactForm />);
    
    // Click on a subject button
    const mathsButton = screen.getByText("11+ Maths");
    fireEvent.click(mathsButton);
    
    // Check that the button has the "default" variant (selected)
    expect(mathsButton).toHaveClass("bg-primary");
    
    // Click again to deselect
    fireEvent.click(mathsButton);
    
    // Check that the button has the "outline" variant (deselected)
    expect(mathsButton).toHaveClass("border");
  });
});