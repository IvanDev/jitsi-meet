// @flow

import React from 'react';
import { connect } from 'react-redux';

import { ConfirmDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';

import AbstractUnmuteVideoDialog from '../AbstractUnmuteVideoDialog';

/**
 * Dialog to confirm a remote participant mute action.
 */
class UnmuteVideoDialog extends AbstractUnmuteVideoDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <ConfirmDialog
                contentKey = 'dialog.unmuteLocalVideoDialog'
                onSubmit = { this._onSubmit } />
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect()(UnmuteVideoDialog));
