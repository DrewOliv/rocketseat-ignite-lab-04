import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  parameters:{
    msw:{
      handlers:[
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            menssage: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta<any>;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "davib@example.com"
    );

    userEvent.type(canvas.getByPlaceholderText("********"), "12345678");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login Realizado !")).toBeInTheDocument();
    });
  },
};
