// @flow

import { connect } from 'react-redux';
import React, { Component } from 'react';

import { translate } from '../../../base/i18n';
import { AbstractButton } from '../../../base/toolbox';
import { CONFERENCE_DID_MINIMIZE } from '../../../base/conference';
import type { AbstractButtonProps } from '../../../base/toolbox';

export type Props = AbstractButtonProps & {
    dispatch: Function
};

/**
 * An implementation of a button for minimizing conference.
 */
export class MinimizeButton extends AbstractButton<Props, *> {
    // accessibilityLabel = 'toolbar.accessibilityLabel.pip';
    iconName = 'icon-navigate_before';

    // label = 'toolbar.pip';

    /**
     * Handles clicking / pressing the button.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        // console.error(this.props);
        this.props.dispatch({
            type: CONFERENCE_DID_MINIMIZE
        });
    }
}

function _mapStateToProps(state): Object {
    console.error(state);
    return {
        _state: state,
        dispatch: state.dispatch
    };
}

export default translate(connect(_mapStateToProps)(MinimizeButton));
