import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
    main: 'main',
};

const routesNames = {
    main: {
        home: 'home',
        library: 'library',
        search: 'search',
        settings: 'settings',
    },
};

export const RoutesConfig = {
    basePaths,
    routesNames,
    routes: {
        main: {
            home: `/${basePaths.main}/${routesNames.main.home}`,
            library: `/${basePaths.main}/${routesNames.main.library}`,
            search: `/${basePaths.main}/${routesNames.main.search}`,
            settings: `/${basePaths.main}/${routesNames.main.settings}`,
        },
    },
};
