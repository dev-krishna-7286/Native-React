import { createNavigationContainerRef, StackActions } from "@react-navigation/native"


/* * NavigationService provides a way to navigate between screens without using the useNavigation hook. */
const navigationRef = createNavigationContainerRef();


/**
*  Navigate to a specific route
 * @param {string} route - The name of the route to navigate to
 * @param {object} params - Optional parameters to pass to the route
 */
const navigate = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.navigate(route, params ?? {});
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (err) {
        console.error("Navigation error:", err);
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
        console.error("Error going back:", error);
    }
};


/**
 * Get the current route
 * @returns {object|null} - The current route object or null
 */
const getCurrentRoute = () => {
    try {
        if (navigationRef.isReady())
            return navigationRef.getCurrentRoute();
        else return null;
    } catch (err) {
        return null;
    }
};


/**
 * Get the route parameters for the current route
 * @returns {object|null} - The route parameters or null
 */
const getRouteParams = () => {
    try {
        const route = getCurrentRoute();
        return route ? route.params : null;
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
            navigationRef.dispatch(StackActions.pop(count));
        } else {
            console.warn(`Navigation not ready (tried to pop ${count} screens)`);
        }
    } catch (error) {
        console.error(`NavigationService.pop Error (count: ${count}):`, error);
    }
};


/** 
 * Replace the current route with a new one
 * @param {string} route - The name of the route to replace with
 * @param {object} params - Optional parameters to pass to the route
 */
const replace = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.replace(route, params ?? {});
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (error) {
        console.error("Replace navigation error:", error);
    }
}


/**
 * Reset the navigation state to a specific route
 * @param {string} route - The name of the route to reset to
 * @param {object} params - Optional parameters to pass to the route
 */
const reset = (route, params = {}) => {
    try {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{ name: route, params: params ?? {} }]
            });
        } else {
            console.warn("NavigationRef is not ready");
        }
    } catch (error) {
        console.error("Navigation error:", error);
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
    getCurrentRoute,
    getRouteParams,
    pop,
    replace,
    reset,
    canGoBack
};