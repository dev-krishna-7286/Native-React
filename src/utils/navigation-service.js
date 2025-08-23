const { createNavigationContainerRef } = require("@react-navigation/native");


const navigationRef = createNavigationContainerRef();


/* * Navigate to a specific route
 * @param {string} route - The name of the route to navigate to
 * @param {object} params - Optional parameters to pass to the route
 */
const navigate = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.navigate(route, params);
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (error) {
        console.error("Navigation error:", error);
    }
}

/**
 * Go back to the previous screen
 */
const goBack = () => {
    try {
        if (navigationRef.isReady() && navigationRef.canGoBack()) {
            navigationRef.goBack();
        } else {
            console.warn("Cannot go back, either NavigationRef is not ready or there's no screen to go back to");
        }
    } catch (error) {
        console.error("Go back error:", error);
    }
}

/** * Replace the current route with a new one
 * @param {string} route - The name of the route to replace with
 * @param {object} params - Optional parameters to pass to the route
 */
const replace = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.replace(route, params);
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (error) {
        console.error("Replace navigation error:", error);
    }
}

/** * Reset the navigation state to a specific route
 * @param {string} route - The name of the route to reset to
 * @param {object} params - Optional parameters to pass to the route
 */
const reset = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{ name: route, params }],
            });
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (error) {
        console.error("Reset navigation error:", error);
    }
};

/** * Get the current route
 * @returns {object|null} - The current route object or null if not available
 */
const getCurrentRoute = () => {
    try {
        if (navigationRef.isReady())
            return navigationRef.getCurrentRoute();
        else return null;
    } catch (error) {
        return null;
    }
};

/** * Pop a specific number of screens from the navigation stack
 * @param {number} count - The number of screens to pop (default is 1)
 */
const pop = (count = 1) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.dispatch({
                type: 'POP',
                count,
            });
        } else {
            console.warn(`Navigation not ready (tried to pop ${count} screens)`);
        }
    } catch (error) {
        console.error(`NavigationService.pop Error (count: ${count}):`, error);
    }
};

/** * Check if it's possible to go back in the navigation stack
 * @returns {boolean} - True if it's possible to go back, false otherwise
 */
const canGoBack = () => {
    try {
        if (navigationRef.isReady()) {
            return navigationRef.canGoBack();
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}


export default NavigationService = {
    navigationRef,
    navigate,
    goBack,
    replace,
    reset,
    getCurrentRoute,
    pop,
    canGoBack,
};