import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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
    test('render good to seee you text if button was NOT clicked', () => {
        //Act
        render(<Greeting />);
        // Assign - nothing
        //Assert
        const outputElement = screen.getByText('good to see you', {exact : false});
        expect(outputElement).toBeInTheDocument();
    });
    test('render good to seee you text if button was clicked', () => {
        //Act
        render(<Greeting />);
        // Assign
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.getByText('Changed', {exact : false});
        expect(outputElement).toBeInTheDocument();
    });
    test(`does not render good to seee you text if button was clicked`, () => {
        //Act
        render(<Greeting />);
        // Assign
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.queryByText('good to see you', {exact : false});
        expect(outputElement).toBeNull();
    });
});