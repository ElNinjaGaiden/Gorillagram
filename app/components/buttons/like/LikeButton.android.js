import React, { Component } from 'react';
import LikeButtonBase from './LikeButtonBase';

export default class LikeButton extends LikeButtonBase {

    icon() {
        return this.state.liked ? 'md-heart' : 'md-heart-outline';
    }
}