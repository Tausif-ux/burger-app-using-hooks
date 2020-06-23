import { useState, useEffect } from 'react';

export const useErrorHandler = axiosInstance => {
    const [error, setError] = useState(null);

    const reqInterceptor = axiosInstance.interceptors.request.use( req => {
        setError(null);
        return req;
    } );
    const resInterceptor = axiosInstance.interceptors.response.use( res => res, error => {
        setError(error);
    } );

    useEffect(() => {
        return () => {
            axiosInstance.interceptors.request.eject( reqInterceptor );
            axiosInstance.interceptors.response.eject( resInterceptor );
        };
    }, [ axiosInstance ]);
    
    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [error, errorConfirmedHandler];
};