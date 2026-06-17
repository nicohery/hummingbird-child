/**
 * Hummingbird Child — JS entry.
 *
 * Mirrors the parent Hummingbird theme.ts init list (wrapper pattern:
 * use_parent_assets: false, this bundle replaces the parent's).
 * Audit after every parent update — see README "Init list drift".
 *
 * child: dropped inits (modules disabled in config/theme.yml):
 *   - initGdpr             → psgdpr
 *   - initProductComments  → productcomments
 *   - initLanguageSelector → ps_languageselector
 *   - initCurrencySelector → ps_currencyselector
 */
import themeSelectors from '@constants/selectors-map';
import EVENTS from '@constants/events-map';
import initEmitter from '@js/prestashop';
import initResponsiveToggler from '@js/responsive-toggler';
import initQuickview from '@js/quickview';
import initCart from '@js/pages/cart';
import initCheckout from '@js/pages/checkout';
import initCustomer from '@js/pages/customer';
import initProductBehavior from '@js/product';
import initMobileMenu from '@js/mobile-menu';
import initSearchbar from '@js/modules/ps_searchbar';
import initEmailalerts from '@js/modules/ps_emailalerts';
import initGuestPasswordToggle from '@js/guest-password-toggle';
import initVisiblePassword from '@js/visible-password';
import initErrorHandler from '@js/errors';
import useToast from '@js/components/useToast';
import useAlert from '@js/components/useAlert';
import usePasswordPolicy from '@js/components/usePasswordPolicy';
import useProgressRing from '@js/components/useProgressRing';
import useQuantityInput from '@js/components/useQuantityInput';
import initBlockCart from '@js/modules/blockcart';
import '@js/modules/facetedsearch';
import initDesktopMenu from '@js/modules/ps_mainmenu';
import initFormValidation from '@js/form-validation';
import initCategoryTree from '@js/modules/ps_categorytree';
import initScrollPaddingTop from '@helpers/scrollPadding';
import initProductAccessibility from '@js/accessibility/product';
import initCartAccessibility from '@js/accessibility/cart';
import parseData from '@helpers/parseData';
import initChild from './child/child';

initEmitter();

document.addEventListener('DOMContentLoaded', () => {
  const {prestashop, Theme: {events}} = window;

  initProductBehavior();
  initQuickview();
  initCheckout();
  initCustomer();
  initResponsiveToggler();
  initCart();
  useQuantityInput();
  initSearchbar();
  initEmailalerts();
  initMobileMenu();
  initGuestPasswordToggle();
  initVisiblePassword();
  initDesktopMenu();
  initFormValidation();
  initErrorHandler();
  usePasswordPolicy();
  initCategoryTree();
  initScrollPaddingTop();
  initBlockCart();
  // Accessibility
  initProductAccessibility();
  initCartAccessibility();
  // Child
  initChild();

  prestashop.on(events.responsiveUpdate, () => {
    initSearchbar();
    initDesktopMenu();
  });
});

export const components = {
  useToast,
  useAlert,
  useProgressRing,
  useQuantityInput,
};

export const helpers = {
  parseData,
};

export const selectors = themeSelectors;

export const events = EVENTS;
