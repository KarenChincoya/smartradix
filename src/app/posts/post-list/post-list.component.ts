import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  /*posts = [
    {title: 'This is the firts post', content: 'This is the frits post conten'},
    {title: 'This is the firts post', content: 'This is the frits post conten'},
    {title: 'This is the firts post', content: 'This is the frits post conten'}
  ];*/

  posts: Post[] = [];
  isLoading = false;
  userIsAuthenticated = false;
  private authStatusSubs: Subscription;
  private postsSub: Subscription;

  constructor(public postsService: PostsService, public authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSubs.unsubscribe();
  }

  onDelete(postId: string) {
    console.log(postId);
    this.postsService.deletePost(postId);
  }
}
