import React from 'react';
import avatar from './avatar.png'

export default function Comment(props) {
	
	return (
        <ul>
            <li class="comment user-comment">

                <div class="info">
                    <a href="#">{props.comment.name}</a>
                    <span>{props.comment.time}</span>
                </div>

                <a class="avatar" href="#">
                    <img src={avatar} width="35" alt="Profile Avatar" title="Anie Silverston" />
                </a>

                <p>{props.comment.comment}</p>
            </li>
        </ul>

		)

	}