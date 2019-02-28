// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

import { ConfirmDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import {
    createToolbarEvent,
    sendAnalytics,
    VIDEO_MUTE
} from '../../../analytics';
import { setVideoMuted, VIDEO_MUTISM_AUTHORITY } from '../../../base/media';
import UIEvents from '../../../../../service/UI/UIEvents';


type Props = {

    /**
     * The Redux dispatch function.
     */
    dispatch: Function,

    /**
     * Function to translate i18n labels.
     */
    t: Function
};

/**
 * Abstract dialog to confirm a remote participant mute action.
 *
 * @extends Component
 */
export default class UnmuteVideoDialog
    extends Component<Props> {
    /**
     * Initializes a new {@code AbstractMuteRemoteParticipantDialog} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit: () => boolean;

    render() {
        return (
            <ConfirmDialog
                contentKey = 'dialog.muteParticipantDialog'
                onSubmit = { this._onSubmit } />
        );
    }

    _setVideoMuted(videoMuted: boolean) {
        sendAnalytics(createToolbarEvent(VIDEO_MUTE, { enable: videoMuted }));
        this.props.dispatch(
            setVideoMuted(
                videoMuted,
                VIDEO_MUTISM_AUTHORITY.USER,
                /* ensureTrack */ true));

        // FIXME: The old conference logic still relies on this event being
        // emitted.
        typeof APP === 'undefined'
        || APP.UI.emitEvent(UIEvents.VIDEO_MUTED, videoMuted, true);
    }

    /**
     * Handles the submit button action.
     *
     * @private
     * @returns {boolean} - True (to note that the modal should be closed).
     */
    _onSubmit() {
        const { dispatch } = this.props;

        // sendAnalytics(createRemoteMuteConfirmedEvent(participantID));
        _setVideoMuted(false);
        // dispatch(muteRemoteParticipant(participantID));

        return true;
    }
}

// import AbstractMuteRemoteParticipantDialog
//     from '../AbstractMuteRemoteParticipantDialog';
// import {
//     createRemoteMuteConfirmedEvent,
//     sendAnalytics
// } from '../../../analytics';
// import { muteRemoteParticipant } from '../../../base/participants';
//
// /**
//  * Dialog to confirm a remote participant mute action.
//  */
// class  extends AbstractMuteRemoteParticipantDialog {
//     /**
//      * Implements React's {@link Component#render()}.
//      *
//      * @inheritdoc
//      * @returns {ReactElement}
//      */
//     render() {
//         return (
//             <ConfirmDialog
//                 contentKey = 'dialog.muteParticipantDialog'
//                 onSubmit = { this._onSubmit } />
//         );
//     }
//
//     _onSubmit: () => boolean;
// }

export default translate(connect()(UnmuteVideoDialog));
