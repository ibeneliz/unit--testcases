import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting  component', () => {
    test('render Greetings everyone text', () => {
        //Act
        render(<Greeting />);
        // Assign - nothing
        //Assert
        const greetingElement = screen.getByText('Greetings everyone!', {exact : false});
        expect(greetingElement).toBeInTheDocument();
    });
});