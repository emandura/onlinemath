import React from 'react';
import avatar from './avatar.png';
import Comment from './Comment'
import commentsdata from './commentsdata.js'

 class Comments extends React.Component {
	render() {
	       const commentComponents = commentsdata.map(item => <Comment key={item.id} comment={item}/>);


	return (
			<ul class="comment-section">

			{commentComponents}

            <li class="write-new">

                <form action="#" method="post">

                    <textarea placeholder="Write your comment here" name="comment"></textarea>

                    <div>
                        <img src={avatar} width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                        <button>Submit</button>
                    </div>

                </form>

            </li>

		</ul>
		);

	}
}

export default Comments;