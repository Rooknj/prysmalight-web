import React from "react";
import { shallow, mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { GET_LIGHTS } from "common/graphqlConstants.js";
import wait from "waait";
import LightListQueryContainer, { Loading } from "./LightListQueryContainer";
import ErrorPage from "./ErrorPage";
import LightListSubscriptionContainer from "./LightListSubscriptionContainer";

// Mock out the Subscription Container so that it will not get rendered when mounting the Query Container
jest.mock("./LightListSubscriptionContainer");

const MOCK_LIGHT = {
  __typename: "Light",
  id: "LightListQueryContainerTest",
  name: "LightListQueryContainerTest",
  state: "ON",
  connected: 2,
  brightness: 76,
  color: {
    __typename: "Color",
    r: 255,
    g: 0,
    b: 35
  },
  effect: "None",
  speed: 5,
  supportedEffects: []
};

it("renders without crashing", () => {
  shallow(<LightListQueryContainer />);
});

it("shows Loading component when loading", () => {
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <LightListQueryContainer />
    </MockedProvider>
  );
  expect(wrapper.find(Loading)).toHaveLength(1);
});

it("shows ErrorPage component when it receives an error", async () => {
  const getLightErrorMock = {
    request: {
      query: GET_LIGHTS
    },
    error: new Error("LightListQueryContainer Test Error")
  };
  const wrapper = mount(
    <MockedProvider mocks={[getLightErrorMock]}>
      <LightListQueryContainer />
    </MockedProvider>
  );

  await wait(0); // wait for query response
  wrapper.update(); // Update the wrapper with query response
  expect(wrapper.find(Loading)).toHaveLength(0); // Make sure the loading component is gone
  expect(wrapper.find(ErrorPage)).toHaveLength(1); // Make sure the error component is there
});

it("shows the LightListSubscriptionContainer if there are no errors and it receives lights", async () => {
  const getLightMock = {
    request: {
      query: GET_LIGHTS
    },
    result: {
      data: {
        lights: [MOCK_LIGHT]
      }
    }
  };
  const wrapper = mount(
    <MockedProvider mocks={[getLightMock]}>
      <LightListQueryContainer />
    </MockedProvider>
  );

  await wait(0); // wait for query response
  wrapper.update(); // Update the wrapper with query response
  expect(wrapper.find(Loading)).toHaveLength(0); // Make sure the loading component is gone
  expect(wrapper.find(ErrorPage)).toHaveLength(0); // Expect no errors
  expect(wrapper.find(LightListSubscriptionContainer)).toHaveLength(1); // Expect the correct component
});
