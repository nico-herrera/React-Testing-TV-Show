import React from "react";
import App from "./App";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// const server = setupServer(
//   rest.get(
//     "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes",
//     (req, res, ctx) => {
//       return res(ctx.json());
//     }
//   )
// );

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test("App renders", () => {
  render(<App />);
});

test("Show name renders to screen", async () => {
  render(<App />);

  const showName = await waitFor(() => screen.getByText("Stranger Things"));

  console.log(showName);
});
