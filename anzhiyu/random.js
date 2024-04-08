var posts=["posts/7599.html","posts/4370.html","posts/10f9.html","posts/d25.html","posts/1a03.html","posts/9bba.html","posts/6e4.html","posts/cee1.html","posts/4522.html","posts/6c0f.html","posts/b6a6.html","posts/54dd.html","posts/b8bb.html","posts/55c8.html","posts/a6b5.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };