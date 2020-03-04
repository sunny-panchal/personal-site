import ReactGA from 'react-ga';
import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import dayjs from 'dayjs';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import Post from '../components/Blog/Post';
import data from '../data/blog';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// remove posts with show: false
var filteredData = data.filter(function(post) {
  return post.show === true;
});

// Two options:
  // 1) Build it as an application where I interact with the posts to render new children components and maintain a state within the parent
        // -- Would need to figure out how to maintain the history for this and how to reference to subpages directly via a link
  // 2) Set up each blog post as a new page
        // -- still need to figure out how to set up the server side routing of this...

const Blog = () => (
  <Main>
    <Helmet title="Blog" />
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2><Link to="/blog">Blog</Link></h2>
          <p> Coming Soon </p>
        </div>
      </header>
      {filteredData.map((blogpost) => (
        <Link to={blogpost.link}>
          <Cell
            data={blogpost}
            key={blogpost.title}
          />
        </Link>
      ))}
    </article>
  </Main>
);

// class Blog extends Component {
//   constructor(props){
//     super(props);
//     this.handleCellClick = this.handleCellClick.bind(this);
//     this.state = {
//       showSummary: true,
//       blogPostTitle: null,
//       blogPostDate: null,
//     }
//   }
//
//   handleCellClick = (blogPostTitle, blogPostDate) => {
//     this.setState({showSummary: !this.state.showSummary,
//     blogPostDate: blogPostDate, blogPostTitle: blogPostTitle});
//   }
//
//   render() {
//     const showSummary = this.state.showSummary
//     const blogPostTitle = this.state.blogPostTitle
//     const blogPostDate = this.state.blogPostDate
//
//     return (
//       <div>
//         <BlogView
//           showSummary={showSummary}
//           onClick={this.handleCellClick}
//           blogPostTitle={blogPostTitle}
//           blogPostDate={blogPostDate}
//         />
//       </div>
//     )
//   }
// }
//
// function BlogView(props) {
//   const showSummary = props.showSummary;
//   const handleClick = props.onClick;
//   const blogPostTitle = props.blogPostTitle;
//   const blogPostDate = props.blogPostDate;
//   if (showSummary) {
//     return (
//       <Main>
//         <Helmet title="Blog" />
//         <article className="post" id="blog">
//           <header>
//             <div className="title">
//               <h2><Link to="/blog">Blog</Link></h2>
//               {/*<p>A selection of projects that I&apos;m not too ashamed of</p>*/}
//               <p>COMING SOON</p>
//             </div>
//           </header>
//           {data.map((blogpost) => (
//             // <Link to={blogpost.link}>
//               <Cell
//                 data={blogpost}
//                 key={blogpost.title}
//                 handleClick={handleClick}/>
//             // </Link>
//           ))}
//         </article>
//       </Main>
//     );
//   }
//   return (
//     <Main>
//       <Helmet title="Blog" />
//       <article className="post" id="blog">
//         <header>
//           <div className="title">
//             <h2>{blogPostTitle}</h2>
//             <time className="published">{dayjs(data.date).format('MMMM DD, YYYY')}</time>
//           </div>
//         </header>
//         <Post data={data.filter(obj => {return obj.title=blogPostTitle})}/>
//       </article>
//     </Main>
//   );
// }

export default Blog;
