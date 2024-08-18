// Card.test.jsx
import { render, screen } from "@testing-library/react";
import Card from "./components/Card";
import FetchCharacters from "./components/FetchCharacters";
import { vi,  describe, it, expect } from "vitest";


vi.mock("./components/FetchCharacters");

describe("Card Component", () => {
    it("renders characters correctly and displays correct image sources", async () => {
      // Mock data returned by FetchCharacters
      const mockCharacters = [
        { id: 1, fullName: "Jon Snow", imageUrl: "url1", image: "Jon Snow" },
        { id: 15, fullName: "Tyrion Lannister", imageUrl: "url3", image: "Tyrion Lannister" },
      ];
  
      // Mock FetchCharacters to return the mock data
      FetchCharacters.mockResolvedValue(mockCharacters);
  
      // Render the Card component
      render(<Card />);
  
      // Wait for the images to be rendered
      const img1 = await screen.findByAltText("Jon Snow");
      const img2 = await screen.findByAltText("Tyrion Lannister");
  
      // Assert that the images are displayed with the correct src attributes
      expect(img1).toHaveAttribute("src", "url1");
      expect(img2).toHaveAttribute("src", "url3");
    });
  });