import React from 'react';
import { createNavigationContainer } from 'react-navigation';

// Import custome file(s) here.
import AppRouteConfigs from './AppRouteConfigs';

const Root = createNavigationContainer(AppRouteConfigs);

export {
    Root
};