import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    newTech: '', 
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      }, 
    ]
  };
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });

  }
  handleSub = e => {
    if((e.type === 'click') || (e.which === 13)){
      let id = this.state.posts[0].comments.map((idPost) => {
        return idPost.id
      })
      id = ++id.slice(-1)[0];
      this.state.posts[0].comments.push({
        id,
        "author": {
          "name": "Lucas Lamar",
          "avatar": "https://avatars0.githubusercontent.com/u/37666623?s=64&v=4"
        },
        "date": "04 Jun 2019",
        "content": this.state.newTech
      })
      this.setState({ newTech: '' });
       
    } else {
      return
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
         <input 
        type="text" 
        onKeyDown={this.handleSub} 
        onChange={this.handleInputChange} 
        value={this.state.newTech}
      />
      <button type="button" onClick={this.handleSub}>Adicionar</button>
      </div>
    );
  }
}

export default PostList;