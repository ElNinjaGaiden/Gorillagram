import React, { Component } from 'react';
import LikeButtonBase from './LikeButtonBase';

export default class LikeButton extends LikeButtonBase {

    icon() {
        return this.state.liked ? 'ios-heart' : 'ios-heart-outline';
    }
}