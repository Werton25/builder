import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Requests from "../Requests";

jest.mock('connected-react-router');
jest.mock('../select/Select');
jest.mock('../../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../../selectors/select', () => ({isDefaultRequest: () => false}));
jest.mock('../../../../../selectors/requests', () => ({
  getCurrentRequest: () => ({
    id: '1',
    name: 'test',
    value: '{}'
  })
}));
const store = configureStore()({
  requests: {}
});

describe('Requests tests', () => {
  it('Requests renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Requests/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
