// @flow

import { Component } from 'react';

import { setVideoMuted, VIDEO_MUTISM_AUTHORITY } from '../../base/media';
import UIEvents from '../../../../service/UI/UIEvents';


type Props = {

    dispatch: Function,

    t: Function
};

export default class AbstractUnmuteVideoDialog
    extends Component<Props> {

    constructor(props: Props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit: () => boolean;

    _setVideoMuted(videoMuted: boolean) {
        // sendAnalytics(createToolbarEvent(VIDEO_MUTE, { enable: videoMuted }));
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

    _onSubmit() {
        // const { dispatch, participantID } = this.props;
        //
        // sendAnalytics(createRemoteMuteConfirmedEvent(participantID));
        //
        // dispatch(muteRemoteParticipant(participantID));

        this._setVideoMuted(false);

        return true;
    }
}
