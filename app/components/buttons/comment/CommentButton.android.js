import React, { Component } from 'react';
import CommentButtonBase from './CommentButtonBase';

class CommentButton extends CommentButtonBase {

    icon() {
        return 'md-chatbubbles';
    }
}

export default CommentButton;