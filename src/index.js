import React from "react";
import Root from './Root'

export default {
  name: "radio-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMobileMenuOpen: false
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen
      },
      closeMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = false
      }
    }
  }
};
