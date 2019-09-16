import React from "react";
import NavList from "./NavigationList";
import { shallow } from "enzyme";
import { findByTestAttr, propTest } from '../../testUtils';

describe("render wrapper and children", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavList />);
  });
  test("render wrapper", () => {
    expect(wrapper.length).toBe(1);
  });
  test("render wrapper nav items", () => {
    const navItem = findByTestAttr(wrapper, "nav-item");
    expect(navItem.length).toBe(5);
  });
  test("does not throw warning with expected prop type", () => {
    const expectedProps = { mobile: false, hamburger: false};
    propTest(NavList, expectedProps)
  });
});
