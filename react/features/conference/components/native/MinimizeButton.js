// @flow

import { connect } from 'react-redux';

import { translate } from '../../../base/i18n';
import { AbstractButton } from '../../../base/toolbox';
import { CONFERENCE_DID_MINIMIZE } from '../../../base/conference';
import type { AbstractButtonProps } from '../../../base/toolbox';

export type Props = AbstractButtonProps & {
    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function
};

/**
 * An implementation of a button for entering Picture-in-Picture mode.
 */
export class MinimizeButton extends AbstractButton<Props, *> {
    // accessibilityLabel = 'toolbar.accessibilityLabel.pip';
    iconName = 'icon-menu-down';
    // label = 'toolbar.pip';

    /**
     * Handles clicking / pressing the button.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this.props.dispatch({
            type: CONFERENCE_DID_MINIMIZE
        });
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {React$Node}
     */
    render() {
        return this.props._enabled ? super.render() : null;
    }
}

/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code PictureInPictureButton} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _enabled: boolean
 * }}
 */
function _mapStateToProps(state): Object {
    return {

    };
}

export default translate(connect(_mapStateToProps)(MinimizeButton));
