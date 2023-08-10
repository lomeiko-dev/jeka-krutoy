declare global {
    declare module '*.scss';

    declare type RootState = import('./src/1_App/Store/index').RootState
    declare type AppDispatch = import('./src/1_App/Store/index').AppDispatch
}

export {}