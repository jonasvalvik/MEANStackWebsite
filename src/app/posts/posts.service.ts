import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Post } from "./post.model";

import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/posts/";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post[], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any, maxPosts: number }>(BACKEND_URL + queryParams)
      .pipe(
        map(postData => {
          return {posts:postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              creator: post.creator
            };
          }), maxPosts: postData.maxPosts};
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({ posts: [...this.posts], postCount: transformedPostData.maxPosts});
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ _id: string; title: string; content: string, creator: string; }>(
      BACKEND_URL + id
    );
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content, creator: null };
    this.http
      .post<{ message: string; postId: string }>(
        BACKEND_URL,
        post
      )
      .subscribe(responseData => {
        this.router.navigate(["/game"]);
      });
  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = { id: id, title: title, content: content, creator: null };
    this.http
      .put(BACKEND_URL + id, post)
      .subscribe(response => {
        this.router.navigate(["/game"]);
      });
  }

  deletePost(postId: string) {
    return this.http
      .delete(BACKEND_URL + postId);
  }
}
