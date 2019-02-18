//
//  NSObject+JitsiHelper.m
//  JitsiMeet
//
//  Created by Ivan Isaev on 15/02/2019.
//  Copyright © 2019 Jitsi. All rights reserved.
//

#import <React/RCTBridge.h>
#import <React/RCTBridgeModule.h>
#import "JitsiMeetView.h"
#import <Foundation/Foundation.h>

@interface JitsiHelper : NSObject<RCTBridgeModule>

@end

@implementation JitsiHelper

RCT_EXPORT_MODULE(JitsiHelper);

RCT_EXPORT_METHOD(getParticipantDisplayName: (NSString *)name
                  callback: (RCTResponseSenderBlock)callback) {
    
    NSString *displayName = [[JitsiMeetView lastViewInstance] getParticipantDisplayName](name);
    NSString *result = (displayName != nil ? displayName : name);
    callback( @[[NSNull null], result] );
}

@end
