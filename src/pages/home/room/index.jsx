import React from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from "react-router-dom";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1275059957;
        const serverSecret = "f28d099904ea16da6979b81b260b9498";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Kartikey");

        const zp = ZegoUIKitPrebuilt.create(kitToken); 
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <div className="room-page">
            {roomId}

        <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;
