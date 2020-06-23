import React, { Fragment} from 'react';
import { useErrorHandler } from '../../hooks/error-handler';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return props => {

        const [error, errorConfirmedHandler] = useErrorHandler(axios);

        return (
            <Fragment>
                <Modal
                    show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Fragment>
        );
    };
}

export default withErrorHandler;