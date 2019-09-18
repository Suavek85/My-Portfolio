import React from "react";
import NavList from "./NavigationList";
import { shallow } from "enzyme";
import { findByTestAttr, propTest } from "../../testUtils";

// SETUP
const defaultProps = { mobile: false, hamburger: false }

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<NavList {...setUpProps} />);
};

//TESTS
describe("test wrapper and inner wrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavList />);
  });
  test("render wrapper", () => {
    expect(wrapper.length).toBe(1);
  });
  test("render inner wrapper", () => {
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.length).toBe(1);
  });
});

describe("test nav items", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavList />);
  });
  test("renders five nav items", () => {
    const navItem = findByTestAttr(wrapper, "nav-item");
    expect(navItem.length).toBe(5);
  });
  test("renders five nav items 2", () => {
    expect(wrapper.find(".nav__link")).toHaveLength(5);;
  });
  test("renders five nav items with correct classes", () => {
    wrapper.find(".nav__link").forEach(n => {
      expect(n.hasClass("nav__link-ltr")).toEqual(true);
    });
  });
});


describe("test conditional rendering of class names with props", () => {
  let wrapper;
  test("does not throw warning with expected prop type", () => {
    const expectedProps = { mobile: false, hamburger: false };
    propTest(NavList, expectedProps);
  });
  test("wrapper has nav__side class with default props", () => {
    wrapper = setup({ mobile: false, hamburger: false });
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.hasClass("nav__side")).toEqual(true);
  });
  test("mobile nav items have undisplay class when hamburger menu is not active ", () => {
    wrapper = setup({ mobile: true, hamburger: false });
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.hasClass("nav__side--hidden")).toEqual(true);
  });
  test("mobile nav items have not display class when hamburger menu is not active", () => {
    wrapper = setup({ mobile: true, hamburger: false });
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.hasClass("nav__side")).toEqual(false);
  });
  test("mobile nav items have not undisplay class when hamburger menu is active ", () => {
    wrapper = setup({ mobile: true, hamburger: true });
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.hasClass("nav__side--hidden")).toEqual(false);
  });
  test("mobile nav items have display class when hamburger menu is active", () => {
    wrapper = setup({ mobile: true, hamburger: true });
    const navWrapper = findByTestAttr(wrapper, "nav-wrapper");
    expect(navWrapper.hasClass("nav__side")).toEqual(true);
  });

});


