import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function WitcherSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{ alignItems: 'center', padding: 24 }}>
                <View style={{ width: 180, height: 180, borderRadius: 8 }} />
                <View style={{ width: 220, height: 40, borderRadius: 4, marginTop: 12 }} />
                <View style={{ width: 300, height: 80, borderRadius: 4, marginTop: 12 }} />
                <View style={{ width: '80%', height: 48, borderRadius: 8, marginTop: 24 }} />
                <View style={{ width: '80%', height: 48, borderRadius: 8, marginTop: 12 }} />
            </View>
        </SkeletonPlaceholder>
    );
}
